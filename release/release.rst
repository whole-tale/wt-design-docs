.. _releases:

Release Notes
=============

unreleased
----------
This release will include the following features:

- Environmental variables can be passed to a running Tale, using ``containerConfig.environment``
  (`whole-tale/girder_wholetale#102 <https://github.com/whole-tale/girder_wholetale/pull/102>`_,
  `whole-tale/gwvolman@b4c068a0
  <https://github.com/whole-tale/gwvolman/commit/b4c068a0d81e19ff43602cf7ed5696e39d98297e>`_)
- Tales accept multiple sources as input data (`whole-tale/girder_wholetale#98
  <https://github.com/whole-tale/girder_wholetale/pull/98>`_)
- WT Homes/Workspaces support moving data to other assetstores (`whole-tale/wt_home_dirs#9
  <https://github.com/whole-tale/wt_home_dirs/pull/9>`_)


v0.3
----
This release includes the following features:

- Automated deployment for development instances of WT  
- HTTPS for frontends/Wildcard certificate support
- Migration process from GridFS to WebDav  

v0.2
----

This release includes the following features:

- Home directories (WebDav)
- Backup of database and home directories 
- Container repository of frontends
- Interface for creating new frontends

v0.1
----

This initial release includes the following features:

- User dashboard
- Ability to create and run tales
- Globus and ORCID authentication
- Globus, HTTP and DataONE ingestion  
- Jupyter and RStudio frontends
- POSIX filesystem for remote data 
- Scalable infrastructure as code
