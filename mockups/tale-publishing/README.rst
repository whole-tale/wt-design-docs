Tale Publishing
===============

When a user has created a Tale and wishes to save it so it can be shared/launched by others, they will have to be able to publish their Tale on an external repository such as Globus or a DataONE Member Node.

High-level Questions
--------------------

- What files get saved?
- How will we generate metadata for Tales?
- How will authentication happen with the service we save to?
- Will Tales get DOIs?

Requirements
-------------

Solution should satisfy these requirements:

1. Tales can be published to one or more external repositories using OAI/ORE Resource Maps as the glue between artifacts
2. Published Tales can be round-tripped: A Tale can be published, then imported back into a WholeTale environment
3. A none-zero amount of provenance information should be archived
4. Published tales have to work outside the WT environment (to at least some degree) (not necessarily as seamless as in WT?)


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
  Zero or more filesystem artifacts, either externally registered or uploaded directly to the Dashboard. This is the data the user will compute with using their Frontend.
**Tale**
  The combination of the Tale metadata and other artifacts (e.g. Dockerfiles) plus the analytical code (Jupyter Notebooks, R scripts, etc.)
**Derived Data**
  Any filesystem artifacts derived from executing a script/notebook.
  This includes provenance traces.

(There are definitely other ways of thinking about this)

Use cases
*********

We can certainly save a lot of stuff. Whatever gets saved needs to serve a use case. Tales have two different modalities of use:

1. Re-tell Tale (e.g., re-compute each cell in a Jupyter Notebook, re-run the R script)
  
  For this case, the user doesn't necessarily need the **Dervied Data** because they can generate it themselves.
  However, this requires them to have the computational resources to do so, which can't be counted on.

  Advantages:

  - Encourages re-running analysis and investigating results
  - Fewer files / less data to archive

  Disadvantages:
  
  - User viewing Tale would have to re-run analysis to see the result
  - User viewing Tale may not be able to re-run analysis (decently likely, probability increasing with time from Tale publication date)

2. Read through Tale to see what was done (read the code, look at the output)

  For this case, the user *does* need the **Derived Data** (they need everything, really).
  But they don't need the computational resources to re-run the analysis

  Advantages:

  - User viewing Tale doesn't need to have access to WholeTale to see results
  - User viewing Tale doesn't need to come up with the computation resources to see results

  Disadvantages:
  
  - More files / more data to archive

We want to cover both of these use cases and covering use case 2 covers use case 1.
Therefore, we need to archive enough information so the user doesn't have to re-run the analysis to read the Tale.

Plan
----

There are a lot of things we could do and, because of this, it makes a lot of sense to build this up in phases, starting just getting basic publishing work from WT -> (DataONE/Globus).

=============== ======= ======= ======= ====
Artifact        Phase 1 Phase 2 Phase 3 Note
=============== ======= ======= ======= ====
Registered Data N       N       N       Probably never (See below)
Uploaded Data   N       Y       Y
YT Manifest     Y       Y       Y
Dockerfile      Y       Y       Y
Script(s)       Y       Y       Y  
Metadata        Y       Y       Y      
Derived Data    N       Y       Y
PROV            N       N       Y
=============== ======= ======= ======= ====

To make WholeTale useful/special, we really need to get to Phase 3.

Potential risks/problems:

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

- What if the user generates a massive file, how will we save that (or tell the user we won't?)

Provenance
----------

See `Provenance Capture <../provenance-capture/README.rst>`_

Authentication
--------------

Right now, WT (Globus) Auth and DataONE auth aren't designed such that a user working within WT can write to DataONE and this needs to be resolved if the user is going to save Tales or if the WT backend is going be able to save tales for the user.

- Do we adopt one or the other auth system across both systems?
- Do we make DataONE trust Globus tokens?
- Do we make DataONE trust the WT backend and have the backend do the saving on behalf of the user?

Easiest thing is probably to get a D1 token 

Metadata Creation
-----------------

- Which standard?
- How will the user generate it?

More coming in this section

Uploaded Data
-------------

- Are we going to archive this? Most likely

More coming in this section

Registerd Data
--------------

- Maybe we won't archive this since registration comes from long-term archives

More coming in this section

Saving to DataONE
-----------------------

Basically: Which MN do we save to?

More coming in this section

Saving to Globus
----------------

The user is already authenticated with Globus, so is this easy?

More coming in this section
