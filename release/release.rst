.. _releases:

Release Notes
=============

v1.2 (tba)
----------

New Features
^^^^^^^^^^^^

- Create a new tale populated with data by passing DOI using Dashboard's "add new tale" modal --
  `ngx-dashboard#281 <https://github.com/whole-tale/ngx-dashboard/pull/281>`_.
- Allow to upload entire folders to Home / Workspace via Dashboard --
  `ngx-dashboard#268 <https://github.com/whole-tale/ngx-dashboard/pull/268>`_.
- Allow anonymous access to public Tales --
  `ngx-dashboard#277 <https://github.com/whole-tale/ngx-dashboard/pull/277>`_,
  `wt_versioning#45 <https://github.com/whole-tale/wt_versioning/pull/45>`_.
- Allow to view logs from running Instances --
  `ngx-dashboard#311 <https://github.com/whole-tale/ngx-dashboard/pull/311>`_,
  `girder_wholetale#557 <https://github.com/whole-tale/girder_wholetale/pull/557>`_,
  `instance_logger <https://github.com/whole-tale/instance_logger>`_.
- Publicly available Docker Registry with Tale images --
  `girder_wholetale#551 <https://github.com/whole-tale/girder_wholetale/pull/551>`_.
- Support for OpenICPSR as a data provider --
  `girder_wholetale#543 <https://github.com/whole-tale/girder_wholetale/pull/543>`_.
- Create a new Tale from a specific version --
  `ngx-dashboard#280 <https://github.com/whole-tale/ngx-dashboard/pull/280>`_,
  `wt_versioning#43 <https://github.com/whole-tale/wt_versioning/pull/43>`_,
  `girder_wholetale#536 <https://github.com/whole-tale/girder_wholetale/pull/536>`_.
- Add access to advanced Tale configuration via Metadata tab -- 
  `ngx-dashboard#274 <https://github.com/whole-tale/ngx-dashboard/pull/274>`_,
  `ngx-dashboard#275 <https://github.com/whole-tale/ngx-dashboard/pull/275>`_,
  `girder_wholetale#538 <https://github.com/whole-tale/girder_wholetale/pull/538>`_.
- Improved Home/Workspace/Run performance by using NFS mounts --
  `gwvolman#175 <https://github.com/whole-tale/gwvolman/pull/175>`_,
  `gwvolman#172 <https://github.com/whole-tale/gwvolman/pull/172>`_.
- Tale catalog search is now case insensitive and includes category field --
  `ngx-dashboard#278 <https://github.com/whole-tale/ngx-dashboard/pull/278>`_.
- Increase the amount of metadata stored with registered external resources --
  `girder_wholetale#542 <https://github.com/whole-tale/girder_wholetale/pull/542>`_.
- Allow to cancel long running jobs (image build, recorded run) --
  `girder_wholetale#565 <https://github.com/whole-tale/girder_wholetale/pull/565>`_,
  `ngx-dashboard#310 <https://github.com/whole-tale/ngx-dashboard/pull/310>`_,
  `gwvolman#177 <https://github.com/whole-tale/gwvolman/pull/177>`_.
- Add metrics/actions tracking --
  `girder_wholetale#564 <https://github.com/whole-tale/girder_wholetale/pull/564>`_,
  `gwvolman#186 <https://github.com/whole-tale/gwvolman/pull/186>`_.
- Update repo2docker to 2022.10 and add support for Julia based images in WholeTale --
  `repo2docker#6 <https://github.com/whole-tale/repo2docker/pull/6>`_,
  `repo2docker_wholetale#47 <https://github.com/whole-tale/repo2docker_wholetale/pull/47>`_.


Bugfixes
^^^^^^^^
- Improved notifications handling --
  `ngx-dashboard#291 <https://github.com/whole-tale/ngx-dashboard/pull/291>`_.
- Fixed file manager showing content not matching the selected tab --
  `ngx-dashboard#265 <https://github.com/whole-tale/ngx-dashboard/pull/265>`_.
- FUSE DMS now properly handles empty files --
  `girderfs#35 <https://github.com/whole-tale/girderfs/pull/35>`_.
- Autocreate parent directories during item/file upload --
  `virtual_resources#20 <https://github.com/whole-tale/virtual_resources/pull/20>`_.
- Pull docker image before executing a recorded run -- 
  `gwvolman#173 <https://github.com/whole-tale/gwvolman/pull/173>`_.
- Improve error handling in Analyze in WT --
  `ngx-dashboard#279 <https://github.com/whole-tale/ngx-dashboard/pull/279>`_.
- Respect repo2docker version on Tale import --
  `girder_wholetale#549 <https://github.com/whole-tale/girder_wholetale/pull/549>`_.
- Improve Dataverse DOI resolution --
  `girder_wholetale#546 <https://github.com/whole-tale/girder_wholetale/pull/546>`_.
- Fix for Dataverse DOI missing ORCID info --
  `girder_wholetale#541 <https://github.com/whole-tale/girder_wholetale/pull/541>`_.
- Improve import by using direct file access rather than WebDAV --
  `girder_wholetale#545 <https://github.com/whole-tale/girder_wholetale/pull/545>`_.
- Properly mount environment definition in the exported ``run-local.sh`` script --
  `girder_wholetale#540 <https://github.com/whole-tale/girder_wholetale/pull/540>`_.
- Fix login via OAuth2 providers other than Globus --
  `girder_wholetale#537 <https://github.com/whole-tale/girder_wholetale/pull/537>`_.
- Allow unauthenticated read access to docker registry from tasks --
  `gwvolman#183 <https://github.com/whole-tale/gwvolman/pull/183>`_.
- Improve error logging in Recorded Runs --
  `gwvolman#184 <https://github.com/whole-tale/gwvolman/pull/184>`_.
- Remove the use of deprecated method from ``packaging`` --
  `gwvolman#187 <https://github.com/whole-tale/gwvolman/pull/187>`_.
- Minor UI fixes --
  `ngx-dashboard#300 <https://github.com/whole-tale/ngx-dashboard/pull/300>`_,
  `ngx-dashboard#302 <https://github.com/whole-tale/ngx-dashboard/pull/302>`_.
- Fix the expiration period for Recorded Run related tokens --
  `girder_wholetale#561 <https://github.com/whole-tale/girder_wholetale/pull/561>`_,
  `wt_versioning#49 <https://github.com/whole-tale/wt_versioning/pull/49>`_.
- Fix server error while trying to access non-existing virtual folder --
  `virtual_resources#21 <https://github.com/whole-tale/virtual_resources/pull/21>`_.
- Improve detection of Instance readiness --
  `girder_wholetale#563 <https://github.com/whole-tale/girder_wholetale/pull/563>`_.
- Prevent re-registration of external data files --
  `girder_wholetale#556 <https://github.com/whole-tale/girder_wholetale/pull/556>`_.
- Fix issue with building image for Recorded Runs --
  `gwvolman#188 <https://github.com/whole-tale/gwvolman/pull/188>`_
- Prevent a situation where manifest doesn't have image tag --
  `girder_wholetale#558 <https://github.com/whole-tale/girder_wholetale/pull/558>`_.
- Don't try to update a notification that doesn't exist --
  `girder_wholetale#560 <https://github.com/whole-tale/girder_wholetale/pull/560>`_.
- Prevent an unauthenticated user from accidentally accessing the Interact tab --
  `ngx-dashboard#301 <https://github.com/whole-tale/ngx-dashboard/pull/301>`_.


v1.1
----

New Features
^^^^^^^^^^^^
- Recorded runs (lite) using ReproZip and Docker stats --
  `girderfs#29 <https://github.com/whole-tale/girderfs/pull/29>`_, 
  `girderfs#27 <https://github.com/whole-tale/girderfs/pull/27>`_,
  `gwvolman#151 <https://github.com/whole-tale/gwvolman/pull/151>`_,
  `gwvolman#155 <https://github.com/whole-tale/gwvolman/pull/155>`_,
  `gwvolman#156 <https://github.com/whole-tale/gwvolman/pull/156>`_,
  `gwvolman#161 <https://github.com/whole-tale/gwvolman/pull/161>`_,
  `gwvolman#164 <https://github.com/whole-tale/gwvolman/pull/164>`_,
  `gwvolman#171 <https://github.com/whole-tale/gwvolman/pull/171>`_,
  `wt_versioning#27 <https://github.com/whole-tale/wt_versioning/pull/27>`_,
  `wt_versioning#29 <https://github.com/whole-tale/wt_versioning/pull/29>`_,
  `wt_versioning#30 <https://github.com/whole-tale/wt_versioning/pull/30>`_,
  `wt_versioning#31 <https://github.com/whole-tale/wt_versioning/pull/31>`_,
  `wt_versioning#34 <https://github.com/whole-tale/wt_versioning/pull/34>`_,
  `wt_versioning#35 <https://github.com/whole-tale/wt_versioning/pull/35>`_,
  `wt_versioning#38 <https://github.com/whole-tale/wt_versioning/pull/38>`_,
  `wt_versioning#39 <https://github.com/whole-tale/wt_versioning/pull/39>`_,
  `wt_versioning#41 <https://github.com/whole-tale/wt_versioning/pull/41>`_,
  `ngx-dashboard#243 <https://github.com/whole-tale/ngx-dashboard/pull/243>`_.
- Support for installing custom STATA packages via `install.do` --
  `gwvolman#154 <https://github.com/whole-tale/gwvolman/pull/154>`_,
  `repo2docker_wholetale#26 <https://github.com/whole-tale/repo2docker_wholetale/pull/26>`_.
- Improved image build performance/caching --
  `gwvolman#158 <https://github.com/whole-tale/gwvolman/pull/158>`_,
  `gwvolman#160 <https://github.com/whole-tale/gwvolman/pull/160>`_,
  `repo2docker_wholetale#21 <https://github.com/whole-tale/repo2docker_wholetale/pull/21>`_.
- Updated XPRA-based envs for Stata and Matlab --
  `repo2docker_wholetale#22 <https://github.com/whole-tale/repo2docker_wholetale/pull/22>`_,
  `repo2docker_wholetale#24 <https://github.com/whole-tale/repo2docker_wholetale/pull/24>`_,
  `repo2docker_wholetale#26 <https://github.com/whole-tale/repo2docker_wholetale/pull/26>`_,
  `repo2docker_wholetale#29 <https://github.com/whole-tale/repo2docker_wholetale/pull/29>`_,
  `repo2docker_wholetale#33 <https://github.com/whole-tale/repo2docker_wholetale/pull/33>`_,
  `repo2docker_wholetale#37 <https://github.com/whole-tale/repo2docker_wholetale/pull/37>`_,
  `repo2docker_wholetale#40 <https://github.com/whole-tale/repo2docker_wholetale/pull/40>`_.
- Remote iframe support for RStudio/Jupyter --
  `repo2docker_wholetale#38 <https://github.com/whole-tale/repo2docker_wholetale/pull/38>`_.
- DERIVA integration --
  `girder_wholetale#510 <https://github.com/whole-tale/girder_wholetale/pull/510>`_,
  `girder_wholetale#519 <https://github.com/whole-tale/girder_wholetale/pull/500>`_,
  `girder_wt_data_manager#51 <https://github.com/whole-tale/girder_wt_data_manager/pull/51>`_,
  `wt_home_dirs#33 <https://github.com/whole-tale/wt_home_dirs/pull/33>`_.
- Add ability to register raw data from zip/bdbag --
  `girder_wholetale#497 <https://github.com/whole-tale/girder_wholetale/pull/497>`_,
  `girder_wholetale#517 <https://github.com/whole-tale/girder_wholetale/pull/517>`_.
- API changes for CORE2
   - Add ability to relinquish ownership --
     `girder_wholetale#504 <https://github.com/whole-tale/girder_wholetale/pull/504>`_,
     `girder_wholetale#506 <https://github.com/whole-tale/girder_wholetale/pull/506>`_,
     `girder_wholetale#508 <https://github.com/whole-tale/girder_wholetale/pull/508>`_.
   - Remote iframe support for RStudio/Jupyter (configuration change).
   - Better handling for auth originating from an external domain --
     `girder_wholetale#511 <https://github.com/whole-tale/girder_wholetale/pull/511>`_,
     `girder_wholetale#512 <https://github.com/whole-tale/girder_wholetale/pull/512>`_.
- Add ability to import non-tale datasets from Zenodo --
  `girder_wholetale#501 <https://github.com/whole-tale/girder_wholetale/pull/501>`_,
  `girder_wholetale#516 <https://github.com/whole-tale/girder_wholetale/pull/516>`_.
- DataONE publishing improvements --
  `gwvolman#167 <https://github.com/whole-tale/gwvolman/pull/167>`_,
  `gwvolman#168 <https://github.com/whole-tale/gwvolman/pull/168>`_,
  `gwvolman#169 <https://github.com/whole-tale/gwvolman/pull/169>`_.
- Better support for storing SSH credentials in Home --
  `girderfs#30 <https://github.com/whole-tale/girderfs/pull/30>`_.
- Support for accessing private external data with user credentials --
  `girder_wt_data_manager#47 <https://github.com/whole-tale/girder_wt_data_manager/pull/47>`_,
  `girder_wholetale#465 <https://github.com/whole-tale/girder_wholetale/pull/465>`_,
  `girder_wholetale#531 <https://github.com/whole-tale/girder_wholetale/pull/531>`_,
  `girder_wholetale#528 <https://github.com/whole-tale/girder_wholetale/pull/528>`_.
- Automatic checksum validation of external data --
  `girder_wt_data_manager#54 <https://github.com/whole-tale/girder_wt_data_manager/pull/54>`_,
  `girder_wt_data_manager#53 <https://github.com/whole-tale/girder_wt_data_manager/pull/53>`_,
  `girder_wholetale#524 <https://github.com/whole-tale/girder_wholetale/pull/524>`_.
- Ability to preview Tales for specific versions --
  `wt_versioning#24 <https://github.com/whole-tale/wt_versioning/pull/24>`_,
  `wt_versioning#37 <https://github.com/whole-tale/wt_versioning/pull/37>`_,
  `ngx-dashboard#218 <https://github.com/whole-tale/ngx-dashboard/pull/218>`_.
- Allow to specify a subset of dataset during import via path --
  `girder_wholetale#520 <https://github.com/whole-tale/girder_wholetale/pull/520>`_.
- New version of WT vocabulary has been published --
  `girder_wholetale#533 <https://github.com/whole-tale/girder_wholetale/pull/533>`_.

Bugfixes
^^^^^^^^
- UI fixes:
   - Properly space files in file browser for Chrome >= 91.x -- `ngx-dashboard#206 <https://github.com/whole-tale/ngx-dashboard/pull/206>`_
   - Interact tab autoupdates when container starts -- `ngx-dashboard#217 <https://github.com/whole-tale/ngx-dashboard/pull/217>`_
   - Display instances created from shared Tales in the running Tales panel -- `ngx-dashboard#228 <https://github.com/whole-tale/ngx-dashboard/pull/228>`_
   - Fix encoding in AinWT parameters -- `ngx-dashboard#252 <https://github.com/whole-tale/ngx-dashboard/pull/252>`_, `ngx-dashboard#263 <https://github.com/whole-tale/ngx-dashboard/pull/263>`_
   - Minor improvements -- `ngx-dashboard#242 <https://github.com/whole-tale/ngx-dashboard/pull/242>`_, `ngx-dashboard#257 <https://github.com/whole-tale/ngx-dashboard/pull/257>`_, `ngx-dashboard#262 <https://github.com/whole-tale/ngx-dashboard/pull/262>`_, `ngx-dashboard#264 <https://github.com/whole-tale/ngx-dashboard/pull/264>`_
- Properly preserve computation environment during import/export -- `girder_wholetale#515 <https://github.com/whole-tale/girder_wholetale/pull/515>`_
- Better error reporting for WT FUSE -- `girderfs#31 <https://github.com/whole-tale/girderfs/pull/31>`_
- Refactor of WT FUSE -- `girderfs#26 <https://github.com/whole-tale/girderfs/pull/26>`_
- DMSFS thread safety improvements -- `girderfs#33 <https://github.com/whole-tale/girderfs/pull/33>`_
- Fix "exact name" search for virtual resource -- `virtual_resources#17 <https://github.com/whole-tale/virtual_resources/pull/17>`_
- Raise exception during rename if folder/item with the same name exists -- `virtual_resource#19 <https://github.com/whole-tale/virtual_resources/pull/19>`_
- Avoid hardcoding docker volumes mount point -- `gwvolman#163 <https://github.com/whole-tale/gwvolman/pull/163>`_
- Prevent publishing the same Tale twice -- `gwvolman#170 <https://github.com/whole-tale/gwvolman/pull/170>`_
- WT DMS now uses requests -- `girder_wt_data_manager#49 <https://github.com/whole-tale/girder_wt_data_manager/pull/49>`_
- Handle gzipped transfers in DMS -- `girder_wt_data_manager#52 <https://github.com/whole-tale/girder_wt_data_manager/pull/52>`_
- Correctly handle external data in exported bags -- `girder_wholetale#518 <https://github.com/whole-tale/girder_wholetale/pull/518>`_, `girder_wholetale#525 <https://github.com/whole-tale/girder_wholetale/pull/525>`_
- Fix cleaning Tale data upon removal -- `wt_versioning#28 <https://github.com/whole-tale/wt_versioning/pull/28>`_, `wt_versioning#33 <https://github.com/whole-tale/wt_versioning/pull/33>`_, `wt_versioning#36 <https://github.com/whole-tale/wt_versioning/pull/36>`_, `wt_home_dirs#34 <https://github.com/whole-tale/wt_home_dirs/pull/34>`_, `girder_wholetale#499 <https://github.com/whole-tale/girder_wholetale/pull/499>`_
- Provider specific fixes:
   - Dataverse
      - Port to requests and minor fixes -- `girder_wholetale#500 <https://github.com/whole-tale/girder_wholetale/pull/500>`_
      - Utilize more metedata for creating Tales during import -- `girder_wholetale#464 <https://github.com/whole-tale/girder_wholetale/pull/464>`_
   - DataONE
      - Use proper headers for access data -- `girder_wholetale#522 <https://github.com/whole-tale/girder_wholetale/pull/522>`_
      - Fix integration for AinWT -- `girder_wholetale#532 <https://github.com/whole-tale/girder_wholetale/pull/532>`_
   - Globus
      - Don't assume type of unique id dataset uses -- `girder_wholetale#526 <https://github.com/whole-tale/girder_wholetale/pull/526>`_
- Fix build issues in R/Rocker images --
  `repo2docker_wholetale#27 <https://github.com/whole-tale/repo2docker_wholetale/pull/27>`_,
  `repo2docker_wholetale#32 <https://github.com/whole-tale/repo2docker_wholetale/pull/32>`_,
  `repo2docker_wholetale#39 <https://github.com/whole-tale/repo2docker_wholetale/pull/39>`_

v0.9
----
Features:

- Support for storing and using third party API keys from Zenodo, Dataverse, and DataONE
- Support for registering data from Zenodo
- Added support for publishing and importing Tales to and from Zenodo

v0.8
----
Features:

- A re-designed main page for the dashboard
- A new, unified, notification system
- Support for Dataverse hierarchy
- Added ability to change compute environments

v0.6
----
Features:

- Restructured Dashboard "Run" view
- Tale workspace support
- Ability to add/remove data to a running Tale (note: removed Data panel from
  Run and Compose views)
- Change to registered data model (note: now limits operations on external
  datasets)
- Analyze in WT support for DataONE
  
Bugfixes:

- Handle failures of Dataverse installation list
- Fixed issue when registering data from Globus (MDF)
- Detection/correction of internal-state desync ("blue screen")
- Fix for Running git clone in home 

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
