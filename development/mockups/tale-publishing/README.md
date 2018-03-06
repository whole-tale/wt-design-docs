Tale Publishing
===============

When a user has created a Tale and wishes to save it so it can be shared/launched by others, they will have to be able to publish their Tale on an external destination.

  - What gets saved?
  - How will authentication happen with the service we save to?

What gets saved?
----------------

  - WT manifest (the yml file the Dashboard & backend generate)
      - Docker image(s) / Dockerfiles
      - Registered datasets
  - Provenance capture in the front end
      - Automatic
      - Manual
  - Filesystem artifacts created using the front-end

Handling authentication
-----------------------

Right now, WT (Globus) Auth and DataONE auth aren't designed such that a user working within WT can write to DataONE and this needs to be resolved if the user is going to save Tales or if the WT backend is going be able to save tales for the user.

  - Do we adopt one or the other auth system across both systems?
  - Do we make DataONE trust Globus tokens?
  - Do we make DataONE trust the WT backend and have the backend do the saving on behalf of the user?

Other open questions
--------------------

  - Do we publish the data sometimes/ever/never?
  - Do we publish the WT manifest or just the Docker image itself?
  - Do we publish DataONE Data Packages?
