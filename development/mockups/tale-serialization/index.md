# Tale Serialization Format

## Status of this document

This document is a draft and corresponds to version 3 of the format.

## Introduction

In order to publish, share, or otherwise save Tales, they must be serialized.
Tales are serialized as set of files (data, code, output) and a corresponding `tale.yml` file gluing everything together.
Tale serialization is lossless, in the sense that a serialized Tale can be re-imported back into WholeTale and it should appear and work the same.

Tales may be serialized to the user's filesystem (local export), or published to a long-lived archive outside of WholeTale such as DataONE, Zenodo, etc.

## Example

```yml
format: 3
metadata:
  name: Humans and Hydrology Test
  identifier: '8e475f85-d7af-465f-97a1-198b9acdc4fb'
  authors: 
    - name: Craig Willis
      orcid: https://orcid.org/0000-0002-6148-7196
  category: science
  description: Test of tale serialization format
  illustration: https://raw.githubusercontent.com/whole-tale/.../demo-graph2.jpg
  entrypoint: wt_quickstart.ipynb
  public: true
data:
  - source: DataONE
    url: http://cn.dataone.org/cn/v2/resolve/urn:uuid:1d23e155-3ef5-47c6-9612-027c80855e8d
  - source: HTTP
    url: http://example.com/data.csv
files:
  - path: notebooks/wt_quickstart.ipynb
    url: https://cn.dataone.org/cn/v2/resolve/urn:uuid:71359f62-b260-4793-a866-418f7fa73aaa 
  - path: environment/docker-environment.tar.gz
    url: https://cn.dataone.org/cn/v2/resolve/urn:uuid:71359f62-b260-4793-a866-418f7fa73aaa 
environment:
  name: Jupyter Notebook
  url: https://github.com/whole-tale/jupyter-yt
  commit: dc91deafdc959c7edcb8199171b5ac75763323e
  icon: https://raw.githubusercontent.com/whole-tale/rstudio-base/master/RStudio-Ball.png
  archive: environment/docker-environment.tar.gz
  config:  
    - command: /init
      environment: CSP_HOSTS=dashboard.dev.wholetale.org,
      port: 8787
      targetMount: /home/rstudio/work
      user: rstudio
```

## Specification

### tale.yml

The `tale.yml` file must be present and contain fields following the below specification.

#### format

Required

- Type: [int](http://yaml.org/spec/1.2/spec.html#tag/repository/int)
- Restrictions:
  - Must be a positive integer
- Description: Tale serialization format version. This is used by WholeTale to properly re-execute Tales if and when the serialization format updates.
- Examples:

```yml
format: 3
```

#### metadata

- Type: [map](http://yaml.org/spec/1.2/spec.html#tag/repository/map) with fields:
  - name ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): The name of the Tale.
 - description ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): A description for th eTale.
  - identifier ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): A globally unique identifier for the Tale. Used to unambiguously identify Tales within and outside the WholeTale system. Should also be used when publishing a Tale to a long-lived repository.
  - authors ([seq](http://yaml.org/spec/1.2/spec.html#tag/repository/seq)): The authors of the tale
    - name ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): The name of the author.
    - orcid ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): The author's ORCID. Expressed as an HTTPS ORCID URI.
  - category ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): The category of the Tale.
  - illustration ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): URL of a picture to be used as an illustration for the Tale. This is used in web displays.
  - entrypoint ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): The file to open or run to re-run the Tale. Must be a member of `files` field where a match is determined when the value for `entrypoint` matches the `path` key in `files`.
  - public ([bool](http://yaml.org/spec/1.2/spec.html#tag/repository/bool)):
- Description: A minimal metadata description for the Tale.
- Examples:

```yml
metadata:
  name: Humans and Hydrology Test
  identifier: '8e475f85-d7af-465f-97a1-198b9acdc4fb'
  authors: 
    - name: Craig Willis
      orcid: https://orcid.org/0000-0002-6148-7196
  category: science
  description: Test of tale serialization format
  illustration: https://raw.githubusercontent.com/whole-tale/.../demo-graph2.jpg
  entrypoint: wt_quickstart.ipynb
  public: true

  ```
#### data

Optional

- Type: 
  - [seq](http://yaml.org/spec/1.2/spec.html#tag/repository/seq) of [map](http://yaml.org/spec/1.2/spec.html#tag/repository/map)
  - `source` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Required. Must be one of:
    - `DataONE`
    - `Globus`
    - `HTTP` or `HTTPS`
  - `url` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)) Required.
- Description: A list of datasets registered from outside the WholeTale system. These are distinct from files referenced in the `files` section.
- Examples:

A dataset registered from [DataONE](https://search.dataone.org) and a file registered over an HTTP endpoint:

```yml
data:
  - source: DataONE
    url: http://cn.dataone.org/cn/v2/resolve/urn:uuid:1d23e155-3ef5-47c6-9612-027c80855e8d
  - source: HTTP
    url: http://example.com/data.csv
```

#### files

Optional

- Type: 
  - [seq](http://yaml.org/spec/1.2/spec.html#tag/repository/seq) of [map](http://yaml.org/spec/1.2/spec.html#tag/repository/map)
    - `path` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Required. The filesystem path the file is found (local serialization) or should be serialized to when retrieved via `url` (web serialization). Should be a relative path (i.e., `./some_folder`) relative to the Tale's root folder. If an absolute path is used, the value will be converted to a relative one.
    - `url` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Optional. When serialized to the web (i.e., published), is used to retrieve the file in order to re-run a Tale. Absent if the Tale has been serialized to a local filesystem.
- Restrictions:
  - All values for `path` must be unique within this file.
- Description: A list of files (local data, scripts, etc.) contained within the Tale. These are distinct from files referenced in the `data` section.
- Examples:

```yml
files:
  - path: notebooks/wt_quickstart.ipynb
    url: https://cn.dataone.org/cn/v2/resolve/urn:uuid:71359f62-b260-4793-a866-418f7fa73aaa 
  - path: environment/docker-environment.tar.gz
    url: https://cn.dataone.org/cn/v2/resolve/urn:uuid:71359f62-b260-4793-a866-418f7fa73aaa 
```

#### environment

Required

- Type: [map](http://yaml.org/spec/1.2/spec.html#tag/repository/map) with fields:
  - `name` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Required. Name of the Environment.
  - `url` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Required. URL to a GitHub repository containing the environment files.
  - `commit` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Optional. The commit ID to build the Environment from.
  - `icon` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Required. A URL to an appropriate icon to use in web displays of the Tale and the Environment.
  - `archive` ([str](http://yaml.org/spec/1.2/spec.html#tag/repository/str)): Required. Path to a `tar.gz` snapshot of the repository containing the Environment. Must be referenced in the `files` section by `path`.
  - `config` ([map](http://yaml.org/spec/1.2/spec.html#tag/repository/map)) with various keys desrcribing WholeTale-specific configuration directives to be parsed and passed to WholeTale as key-value [str](http://yaml.org/spec/1.2/spec.html#tag/repository/str) pairs.
- Description: Description of the Environment a Tale is run in.
- Examples:

```yml
environment:
  name: Jupyter Notebook
  url: https://github.com/whole-tale/jupyter-yt
  commit: dc91deafdc959c7edcb8199171b5ac75763323e
  icon: https://raw.githubusercontent.com/whole-tale/rstudio-base/master/RStudio-Ball.png
  archive: environment/docker-environment.tar.gz
  config:  
    - command: /init
      environment: CSP_HOSTS=dashboard.dev.wholetale.org,
      port: 8787
      targetMount: /home/rstudio/work
      user: rstudio
```
