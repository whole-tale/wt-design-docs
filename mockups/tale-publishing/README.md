Tale Publishing
===============

When a user has created a Tale and wishes to save it so it can be shared/launched by others, they will have to be able to publish their Tale on an external repository such as Globus or a DataONE Member Node.

Questions:
----------

- What files get saved?
- Will Tales get DOIs?
- How will authentication happen with the service we save to?

Requirements:
-------------

Solution should satisfy these requirements:

- Tales can be published to one or more external repositories in a standard manner
- Published Tales can be round-tripped (imported back into WholeTale) and "forked"
- Some amount of provenance information should be archived

What files get saved?
---------------------

A little or a lot could be archived:

- An OAI/ORE Resource Map aggregating the following
- WT manifest (the yml file the Dashboard & backend generate)
- Docker image(s) / Dockerfiles
- Registered datasets (the actual data files, not just pointers/URLs)
- Provenance capture in the front end
    - Automatic
    - Manual
- Filesystem artifacts created using the front-end

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

Handling authentication
-----------------------

Right now, WT (Globus) Auth and DataONE auth aren't designed such that a user working within WT can write to DataONE and this needs to be resolved if the user is going to save Tales or if the WT backend is going be able to save tales for the user.

- Do we adopt one or the other auth system across both systems?
- Do we make DataONE trust Globus tokens?
- Do we make DataONE trust the WT backend and have the backend do the saving on behalf of the user?
