Tale Publishing
===============

When a user has created a Tale and wishes to save it so it can be shared/launched by others, they will have to be able to publish their Tale on an external repository such as a DataONE Member Node.

TODOS
-----
- TODO: Should I call this "Tale Archiving"?

High-level Questions
--------------------

- What files get saved?
- How will we generate metadata for Tales?
- How will authentication happen with the DataONE Member Node?
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
  
  For this case, the user doesn't necessarily need the *Dervied Data* because they can generate it themselves.
  However, this requires them to have the computational resources to do so, which can't be counted on.

  Advantages:

  - Encourages re-running analysis and investigating results
  - Fewer files / less data to archive

  Disadvantages:
  
  - User viewing Tale would have to re-run analysis to see the result
  - User viewing Tale may not be able to re-run analysis (decently likely, probability increasing with time from Tale publication date)

2. Read through Tale to see what was done (read the code, look at the output)

  For this case, the user *does* need the *Derived Data* (they need everything, really).
  But they don't need the computational resources to re-run the analysis

  Advantages:

  - User viewing Tale doesn't need to have access to WholeTale to see results
  - User viewing Tale doesn't need to come up with the computation resources to see results

  Disadvantages:
  
  - More files / more data to archive

We want to cover both of these use cases and covering use case 2 covers use case 1.
Therefore, we need to archive enough information so the user doesn't have to re-run the analysis to read the Tale.

Proposal
********

There are a lot of things to archive, because of this, it makes a lot of sense to build this up in phases, starting just getting basic publishing work from WT -> (DataONE).

=============== ======= ======= ======= ====
Artifact        Phase 1 Phase 2 Phase 3 Note
=============== ======= ======= ======= ====
Registered Data N       N       N       Probably never (See below)
Uploaded Data   N       Y       Y
Recipe          Y       Y       Y
Dockerfile      Y       Y       Y
Script(s)       Y       Y       Y  
Metadata        Y       Y       Y      
Derived Data    N       Y       Y
PROV            N       N       Y
=============== ======= ======= ======= ====

To make WholeTale useful/special, we really need to get to Phase 3.

Provenance
----------

**Problem:** We need to capture provenance for Tales.

See `Provenance Capture <../provenance-capture/README.rst>`_

Authentication
--------------

See ongoing discussion https://github.com/whole-tale/wt-design-docs/issues/4

**Problem:** Right now, WT (Globus) Auth and DataONE auth aren't designed such that a user working within WT can write to DataONE and this needs to be resolved if the user is going to save Tales or if the WT backend is going be able to save tales for the user.

**Problem:** Globus and DataONE have different ways of identifying users (Subjects): In DataONE, we use strings like the user's LDAP DN or their ORCID. Globus Auth generates unique identifiers for each user. If a user create content in DataONE, how is that linked to their work in WT?

- Do we make DataONE trust Globus?

  From what others on the team are saying, it sounds like we could essentially just store a Globus certificate on a DataONE CN and authenticate the incoming request from WholeTale this cert. I don't really know how this would work.

  Pros:

  - The user doesn't have to log into DataONE ever. Users hate logging into things.

  Cons:

  - Will require discussion with DataONE CI about the change
  - Potentially incompatible with how DataONE likes to do things
  - If a user archives a Tale from the Dashboard, the Objects may not show up in their profile on DataONE because the Globus subject is unlikely to match their identity in DataONE

- Give the user a way to retrieve and store a DataONE auth token in the Dashboard

  Pros:

  - Requires no buy-in from DataONE and no codebase changes on the DataONE side
  - Doesn't require storing a Globus cert on a DataONE CN which reduces complexity and maintenance
  - The user will definitely be able to view/edit their content they create from the Dashboard once on DataONE because the Objects they create will have been created by their Subject

  Cons:
  
  - If we choose to generate tokens with an 18 hour expiry, the user would have to get a token more than once which is annoying and unusual for users
  - The user would have to log into DataONE which is normal for third-party integrations but is still extra steps

- Set up a shadow account on Globus
  This is from Kacper, I have on clue how any of this would work:
  
  > Could also set up a shadow account on WT/Globus? that automatically connects the Globus user to DataONE. Would need to establish transitive trust between the two systems (DataONE needs to trust Globus)

  Pros:

  - It sounds like this would be seamless for the user

  Cons:

  - Not sure. Is this hard to maintain?
  - (From above) If a user archives a Tale from the Dashboard, the Objects may not show up in their profile on DataONE because the Globus subject is unlikely to match their identity in DataONE

**Proposed solution:**

- Phase 1: Store a DataONE JWT in the Dashboard and send it with requests
- Phase 2: Decide on the above issues (either trust Globus w/in DataONE or stick with the storing a DataONE token approach)
  - If we just store a DataONE token, build out UI/UX for supporting this in the Dashboard
  - If we choose to trust Globus w/in DataONE, we need to implement that on the backend in WT

Metadata Creation
-----------------

General questions:

- How much metadata do we let/make the user submit?
- Which standard?
- How will the user generate it?

**Problem:** To publish in DataONE, and also to make a useful Tale, we'll need a metadata record for the Tale.

**Possible solutions:**

- Generate a minimal metadata record automatically for the user (w/o interaction)
- Create a minimal metadata editor in the Dashboard
- Send the user to the MetacatUI EML Editor pre-populated with files and metadata and let them finish the upload there

**Proposed solution:**

- Phase 1: Automatically generate an EML record
- Phase 2: Offer a rich metadata-editing environment, either in the Dashboard or via MetacatUI

Saving to DataONE
-----------------

**Problems:** DataONE itself cannot be published to. New content can only come into DataONE through a Member Node

Possible solutions:

- Publish to an existing Member Node (KNB is a good candidate)
- Set up a dedicated Member Node just for WholeTale
- Unlikely: Don't publish into DataONE

**Proposed solution:**

- Phase 1: Publish to a test MN just to get things working
- Phase 2: Decide on whether to re-use a production MN or set up a new one and make that work

Other potential risks/problems
------------------------------

- What if the user generates a massive file, how will we save that (or tell the user we won't?)
