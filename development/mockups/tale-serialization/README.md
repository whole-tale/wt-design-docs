# Tale Serialization

## Background

What makes something a Tale, and how is it stored, transferred from one place to another, archived, and cited?
The answer to these questions impacts numerous parts of this project.

Let's start by listing the information contained in a Tale. The core stuff is:

- The computing environment the researcher used, e.g.,
  - Dockerfile
- The data the researcher used, e.g.,
  - Files local to the WholeTale environment
  - Remote files (DataONE, Globus)
- How the researcher used that data, e.g.,
  - e.g., Python/R scripts/notebooks
- What the researcher did with that data, e.g.,
  - Plots
  - Derived data
  - Any output

Additionally, we want to support additional metadata about the Tale:

- Scientific metadata on the Tale and its parts (creator, license, detailed file metadata)
- Provenance information
- The paper(s) this Tale represents the analysis for
- Relationships to other Tales
  - New version of an existing Tale?
  - Fork of another person's Tale?

At a minimum, the serialized Tale needs to have enough information to be runnable (e.g., the user can get back into the running Frontend) in a WholeTale environment, and possibly outside of one (with some minor re-configuration or some extra steps.

Whichever serialization method we use, which may change over time, the core information being serialized will be the same. For example, we may use YML today, and use JSON-LD later on but the information in each file would be the same.

Options:

- There is no serialization format

    This won't work beacuse it won't allow us to capture all of the metadata needed (see above) and doesn't give WholeTale enough information to re-Launch the Tale such as a Dockerfile.

- Include a file or two at the root that, by convention, indicates a Tale, e.g. a Dockerfile and a minimal YML/JSON config
- Use OAI/ORE Resource Maps for everything

## Usability

A Tale should be recognizable as a Tale no matter the system it's in:

![different settings tales can be found in](./images/collage.png)

This needs a discussion for sure. I think it's important that the user can identify a Tale in the wild and also can identity their Tale as it moves out of WholeTale and into an archival repository. At current, we aren't striving to achieve this because the user has to manage Home, Data, and Workspace directories while in WholeTale so the artifacts they might want to archive with their Tale are scattered across numerous places.

Potential problem: DataONE doesn't deal with folders as well as we might need. DataONE federates Objects (loosely: files) into Data Packages which is presented to the user as a flat bag of Objects. Data Packages can contain other Data Packages as children so something like folders can work but, in practice, this doesn't work as well as it should (yet).

## Proposal

1. Dictate a "glue" file be also included at the top level
DataONE, other container formats as needed by archival repositories
2. Dictate that a Dockerfile should be present at the root of the folder, BagIt archive, DataONE Data Package, etc
3. Use BagIt for storage/export/transmission, DataONE Resource Maps when archiving on 

### Glue file

On https://github.com/whole-tale/whole-tale/issues/24 we were linked a super helpful Google Doc with lots of existing data packaging formats:
https://docs.google.com/document/d/155lA2BcixTl-zwJHGfLkxsmg7WmQbBK00QWyP8QggkE/edit

I think requiring a WholeTale "glue" file to give WholeTale enough information to reconstruct the Tale is not necessarily a hard requirement but more of an option at this point.

Options:

- Establish a `tale.yml` at the root (YAML or another format, such as JSON-LD) that looks something like this:

    ```yml
    version: 1
    name: "The Tale Name"
    description: "A description of the Tale"
    creator: "Tale User"
    metadata:
      - tale_metadata.xml
    data:
      - https://cn.dataone.org/cn/v2/resolve/XYZ
      - some_local_file.csv
    entrypoint: analysis.Rmd
    output:
      - output.png
      - derived_data.csv
    ```

- JSON-LD or other format version of the above at the root
- codemeta.json (JSON-LD) at the root instead (Develop our own vocab, use existing?)
  - I don't think this is quite the right fit but it's interesting to think about
- OAI/ORE at the root (may need to develop our own vocab)
- Re-use [ERC config file](http://o2r.info/erc-spec/spec/#erc-configuration-file)
    ```yml
    id: b9b0099e-9f8d-4a33-8acf-cb0c062efaec
    spec_version: 1
    main: workflow.Rmd
    display: paper.html
    ```

## Use Cases

### Local Tale Export

The user of the Dashboard wants to save a copy of a Tale to their computer

The user takes the following actions:

1. Navigates to Tale View
2. Clicks "Export Tale" button

    [A modal dialog pops up showing a list of files and other options]
3. (Optional) The user selects/de-selects some of the files
4. They click the "Export Tale" button

    [User's browser downloads a ZIP file]

The ZIP file in (3) follows makes use of the BagIt standard.

Implementation:

- Create a new Girder API method, like `/tale/export` that takes as optional input the files the user has selected
- That endpoint will create a BagIt zip that looks something like this:

```txt
tale/
|-- data
|   Dockerfile
|   \-- analysis
|       \-- analysis.ipynb
|   \-- figures
|       \-- plot.png
|   \-- data
|       \-- some_data.csv
|-- manifest-md5.txt
|     49afbd86a1ca9f34b677a3f09655eae9 data/Dockerfile
|     49afbd86a1ca9f34b677a3f09655eae9 data/analysis/analysis.ipynb
|     49afbd86a1ca9f34b677a3f09655eae9 data/figures/q172.png
|     49afbd86a1ca9f34b677a3f09655eae9 data/data/some_data.csv
\-- bagit.txt
      BagIt-Version: 0.97
      Tag-File-Character-Encoding: UTF-8
```

Potential issues:

- AFAIK ZIP files can't be created in a streaming fashion so the backend will have to buffer the entire ZIP before sending. Also AFAIK `tar.gz` can give you streaming and compression so we might think about this.
- Do we allow the user to export large data files?

### Tale Publishing (Freezing)

The user of the Dashboard wants to freeze the state a Tale to an external repository and make it citable

The user takes the following actions:

1. Navigates to Tale View
2. Clicks "Publish Tale" button

   [A modal dialog pops up showing a list of files and other options]
3. (Optional) The user selects/de-selects some of the files
4. Clicks the "Publish Tale" button

    [Redirected to DataONE to finish publishing their Tale]

### Tale Importing (Un-Freezing)

The user of an external repository has found a Tale and wants to bring it back into the WholeTale environment

[The user is already on an external repository where a Tale has been published, such as DataONE]

1. Clicks "Import into WholeTale"

    [A new tab opens in the user's browser with the WholeTale Dashboard]

Note: Not totally sure what the user experience is here

## TODO

(Notes for Bryce)

- I think it's great to make the entrypoint explicit
- What about the "result" too?
- Matt: Start with flat representation
- Other idea: Archive a bagit zip directly on dataone
- Also add in ability to scan container fs for installed packages (deb, npm, etc.)
