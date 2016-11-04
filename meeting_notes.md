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
