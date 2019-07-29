.. _features:

Features and Limitations
========================

Key system features of v0.8:

- Authentication using Globus Auth
- Ability to compose and run tales using Jupyter and RStudio environments
- Ability to compose tales using data from published sources via HTTP URL 
  or Digital Object Identifier (DOI). Note that with this release, DOIs 
  are only supported for `DataONE <https://search.dataone.org/>`_ and 
  the `Materials Data Facility (MDF) <https://www.materialsdatafacility.org/>`_
- Ability to share tales with users in the system
- Home directories (personal data shared across tale environments)
- Local registry of Docker images used in the system
- System monitoring and daily backups of user data  
- Ability to publish Tales to DataONE
- Ability to export Tales to zip and bagit, and then run locally

Upcoming features:

- Framework for tale validation
- Ability to create and remix tale environments
- Provenance capture
- Publishing to Dataverse

For a complete list of current and planned features, see the
:ref:`release schedule <milestones>`.

Limitations
-----------
* The Whole Tale dashboard works best in Chrome. There are known issues in
  Firefox.
