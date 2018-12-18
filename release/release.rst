.. _releases:

Release Notes
=============

unreleased
----------

DataONE integration:

- Create an endpoint for "Analyze in WT" from DataONE Dataset (`whole-tale/girder_wholetale#194
  <https://github.com/whole-tale/girder_wholetale/pull/194>`_)

Bugfixes:

- Incorrect Globus URLs when importing (`whole-tale/girder_wholetale#197
  <https://github.com/whole-tale/girder_wholetale/pull/197>`_)
- SessionId is not exposed in Instance model (`whole-tale/girder_wholetale#196
  <https://github.com/whole-tale/girder_wholetale/pull/196>`_)
- Importing nested dataset from DataONE fails (`whole-tale/girder_wholetale#199
  <https://github.com/whole-tale/girder_wholetale/pull/199>`_)
- CSP_HOSTS env variable is set automatically (`whole-tale/gwvolman#35
  <https://github.com/whole-tale/gwvolman/pull/35>`_)

v0.5
----
This release includes the following features. Note that with this release we're
adopting detailed release notes:

Refactor of data registration framework:

- Globus registration (`whole-tale/girder_wholetale/165 <https://github.com/whole-tale/girder_wholetale/pull/165>`_)
- Refactor DataONE lookup (`whole-tale/girder_wholetale/177 <https://github.com/whole-tale/girder_wholetale/pull/177>`_)
- Change to use DMS (`whole-tale/girder_wholetale/168 <https://github.com/whole-tale/girder_wholetale/pull/168>`_, `whole-tale/gwvolman/30 <https://github.com/whole-tale/gwvolman/pull/30>`_)
- Refactor task handling (`whole-tale/girder_wholetale/170 <https://github.com/whole-tale/girder_wholetale/pull/170>`_)
- Added Tale import support (`whole-tale/girder_wholetale/173 <https://github.com/whole-tale/girder_wholetale/pull/173>`_, `whole-tale/gwvolman/32 <https://github.com/whole-tale/gwvolman/pull/32>`_, `whole-tale/dashboard/287 <https://github.com/whole-tale/dashboard/pull/287>`_)

Dataverse integration:

- Support ingest from Dataverse (`whole-tale/girder_wholetale/175 <https://github.com/whole-tale/girder_wholetale/pull/175>`_)
- External tools integration (`whole-tale/girder_wholetale/180 <https://github.com/whole-tale/girder_wholetale/pull/180>`_)

Minor changes/bug fixes:

- Optional DataMap parameters  (`whole-tale/girder_wholetale/178 <https://github.com/whole-tale/girder_wholetale/pull/178>`_)
- Removed obsolete plugin config options (`whole-tale/girder_wholetale/186 <https://github.com/whole-tale/girder_wholetale/pull/186>`_)
- Lookup error handling (`whole-tale/girder_wholetale/190 <https://github.com/whole-tale/girder_wholetale/pull/190>`_)
- Chained redirects in DOI (  `whole-tale/girder_wholetale/188 <https://github.com/whole-tale/girder_wholetale/pull/188>`_)
- Add OPTIONS to methods allowed by DAV read privilege (`whole-tale/wt_home_dirs/17 <https://github.com/whole-tale/wt_home_dirs/pull/17>`_)
- Propagate file size changes (`whole-tale/wt_home_dirs/16 <https://github.com/whole-tale/wt_home_dirs/pull/16>`_)
- Login route handling (`whole-tale/dashboard/300 <https://github.com/whole-tale/dashboard/pull/300>`_)
- Run Tale from view page (`whole-tale/dashboard/pull/273 <https://github.com/whole-tale/dashboard/pull/273>`_)
- Local storage problem (`whole-tale/dashboard/326  <https://github.com/whole-tale/dashboard/pull/326>`_)
- Allow manual configuration of Dataverse instances (`whole-tale/girder_wholetale/182 <https://github.com/whole-tale/girder_wholetale/pull/182>`_)
- Updated registration modal (`whole-tale/dashboard/324 <https://github.com/whole-tale/dashboard/pull/324>`_)
- Re-enabled http check (`whole-tale/girder_wholetale/181 <https://github.com/whole-tale/girder_wholetale/pull/181>`_)
- Upgraded to Girder 2.5.0, no longer running as root

Deployment:

- Added DMS volume (`whole-tale/terraform_deployment/38 <https://github.com/whole-tale/terraform_deployment/pull/38>`_)


v0.4
----
This release includes the following features:

- Redesigned user interface based on user experience testing, including ability
  to access running tales directly (via iframes)
- Environmental variables can be passed to a running Tale, using ``containerConfig.environment``
  (`whole-tale/girder_wholetale#102 <https://github.com/whole-tale/girder_wholetale/pull/102>`_,
  `whole-tale/gwvolman@b4c068a0
  <https://github.com/whole-tale/gwvolman/commit/b4c068a0d81e19ff43602cf7ed5696e39d98297e>`_)
- Tales accept multiple sources as input data (`whole-tale/girder_wholetale#98
  <https://github.com/whole-tale/girder_wholetale/pull/98>`_)
- WT Homes/Workspaces support moving data to other assetstores (`whole-tale/wt_home_dirs#9
  <https://github.com/whole-tale/wt_home_dirs/pull/9>`_)
- Improved monitoring and backup


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
