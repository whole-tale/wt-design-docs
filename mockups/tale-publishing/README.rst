Tale Publishing
===============

When a user has created a Tale and wishes to save it so it can be shared/launched by others, they will have to be able to publish their Tale on an external repository such as Globus or a DataONE Member Node.

High-level Questions
----------

- What files get saved?
- Will Tales get DOIs?
- How will authentication happen with the service we save to?

Requirements:
-------------

Solution should satisfy these requirements:

- Tales can be published to one or more external repositories using OAI/ORE Resource Maps as the glue between artifacts
- Published Tales can be round-tripped: A Tale can be published, then imported back into a WholeTale environment
- A none-zero amount of provenance information should be archived
- Published tales have to work outside the WT environment (to at least some degree) (not necessarily as seamless as in WT?)


What files get saved?
---------------------

Types of things
***************

There are three main categories of Things involved in Tale saving:

::

   ----------------       ------      --------------
  | Registered Data | -> | Tale | -> | Derived Data |
   ----------------       ------      --------------

**Registered Data**
  Zero or more filesystem artifacts, either externally registered or uploaded directly to the Dashboard
**Tale**
  The combination of the Tale metadata and other artifacts (e.g. Dockerfiles) and the analytical code (Jupyter Notebooks, R scripts, etc.)
**Derived Data**
  Any filesystem artifacts derived from exeucting a script/notebook.
  This includes provenance traces.

(There are definitely other ways of thinking about this)

Use cases
*********

Tales have two different modalities of use:

1. Re-tell Tale (e.g., re-compute each cell in a Jupyter Notebook)
  
  For this case, the user doesn't necessarily need the **Dervied Data** because they can generate it themselves.
  However, this requires them to have the computational resources to do so, which can't be counted on

2. Read through Tale to see what was done

  For this cae, the user *does* need the **Derived Data** (everything, really)
  But they don't neen the computational resources to re-run the analysis

We want to cover both of these use cases.
Therefore, we need to archive enough information so the user doesn't have to re-run the analysis to read the Tale.

Plan
----

There are a lot of things we could do and, because of this, it makes a lot of sense to build this up in phases, starting with something simple.

Phases:

1: ORE + wt.yml + Dockerfile + Notebooks/Rscripts + Super-minimal metadata record + minimal prov information
2: Above + Derived Data
3. Above + Detailed PROV info

To make WholeTale useful, we really need to get close to 3.

todo:
make table of minimals, desires
do it in passes (incremental releases)

A little or a lot could be archived:

- An OAI/ORE Resource Map aggregating the following
- WT manifest (the yml file the Dashboard & backend generate)
- Docker image(s) / Dockerfiles (Matt: do archive Dockerfile)

get more details on docker usage
- Registered datasets (the actual data files, not just pointers/URLs)

how do deal with non-d1/non-wt data?

- Provenance capture in the front end
    - Automatic
    - Manual
    - Could use recordr in RStudio and capture that PROV
    - TODO: Check out https://github.com/gems-uff/noworkflow
    - Lots of intrest in notebook environments, and capturing prov in Jupyter
      - Esp w/ YesWorkflow
    - See NoWorkflow too
    - See tickets from prov-a-thon

- Filesystem artifacts created using the front-end

could:
publish minimal metadata, generate miniaml doc, incld in package


Potential problems:

- Authentication (see below for possible solutions)
- For publishing to DataONE:
    - DataONE itself cannot be published to. New content can only come into DataONE through a Member Node

      Possible solutions:

      - Publish to an existing Member Node (KNB is a good candidate)
      - Set up a dedicated Member Node just for WholeTale
      - Unlikely: Don't publish into DataONE

    - Content in DataONE is wrapped up in Data Packages which are essentially aggregations of files described by OAI/OE Resource Maps except DataONE requires an XML metadata document in every DataPackage. Users creating Tales might not necessarily (1) understand this requirement (2) want to fill in information

      Possible solutions:

      - Allow the Tale manifest (YML) act as the metadata record
      - Author a minimal EML record for the Tale. EML only requires a title, creator, and contact (title <=> Tale title, creator/contact <=> Logged-in user)
      - Support a new metadata format just for Tales

TODO: what do we do with really large files?

Handling authentication
-----------------------

Right now, WT (Globus) Auth and DataONE auth aren't designed such that a user working within WT can write to DataONE and this needs to be resolved if the user is going to save Tales or if the WT backend is going be able to save tales for the user.

- Do we adopt one or the other auth system across both systems?
- Do we make DataONE trust Globus tokens?
- Do we make DataONE trust the WT backend and have the backend do the saving on behalf of the user?
