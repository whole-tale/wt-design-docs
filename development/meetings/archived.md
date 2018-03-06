# Dev meeting notes

## 2016-10-28

 * Ian: dashboard was updated to incorporate remarks from previous meetings, work on integrating with Girder's models
   has begun.
 * Kacper: will revisit autodeployment of dashboard and provide link to other developers when it's up and running
 * Ian: Dashboard requires API endpoint for querying/ingesting data information based on DOI/URL
 * Bertram: we should keep track of what happens during dev meetings
 * Niall: keep meeting notes on GitHub

## 2016-11-04

Attendees: Mihael H, Kacper K, Bertram L, Mike P, Ian T, Matt T, Kandace T

Discussion:

 * Dashboard: available at https://dashboard.wholetale.org/ , new versions will autodeploy with each commit to whole-tale/dashboard repo
 * Globus data Ingestion: there's no need for direct ingestion inside jupyter notebook (Mihael: that would require it to
   become globus endpoint), we operate under assumption that the user will ingest data into the drive, before launching a frontend
   environment.
 * Mike: There's an on going effort @ NERSC related to integrating globus auth and jupyter (Matt: it was also presented
   by F. Perez at SciGateways'16)
 * NextCloud deployment/integration: Testing instance is already working at https://owncloud-dev.wholetale.org/ , it's
   going to be integrated with dashboard via WebDAV
 * iRODS: will be discussed next week when Siva gets back from vacation
 * DataONE: server-side dataset ingestion is already up and running, needs integrating with dashboard.

Action items:

 * Create ``stable`` branch on ``whole-tale/dashboard``. It's going be autodeployed at
   https://dashboard.wholetale.org/ Development will happen on ``master`` with autodeployment at
   https://dashboard-dev.wholetale.org/  (Kacper + Ian)
 * Investigate WebDAV integration with NextCloud for dashboard (Ian)

## 2016-11-11

Attendees: Adam B, Matt J, Kacper K, Bertram L, Jaroslaw N, Ian T, Matt T

Discussion:
 * Introduction of Adam Brinckman -- new member of dev team
 * Dashboard: we talked about Girder models and particular endpoints that are going to be used for creating a drive browser

Action items:
 * Ping TACC devs about iRODS status
 * Create Girder endpoint for storing custom user data (last visited page etc)

## 2016-11-18

Attendees: Mihael H, Kacper K, Ian T, Matt T, Jamie W

Discussion:
 * we need precise definition/glossary of terms used throughout the project, so that when we say e.g. 'frontend'
   everybody thinks about the same concept
 * for dashboard we need:
   - a more detailed description of "pages" that adequately represent we are trying to do
   - names for those pages and detail within those pages for concepts we are trying to represent
 * Matt: dashboard should have a "workspace" feel
 * Mihael: will work on integrating Globus with Girder (as an assetstore)
