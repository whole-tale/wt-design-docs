.. _publishing_tales:

Tale Publishing
===============
This document provides design notes on the publishing system within Whole Tale.

Implementation
--------------
Publishing requires interaction across the girder_wholetale, dasboard, and gwvolman services.
The user starts in the dashboard, sends a request to girder_wholetale, which in turn
spawns a publishing job.

girder_wholetale
~~~~~~~~~~~~~~~~

An endpoint, ``publish``, was added to the REST API with a sub-endpoint, ``dataone``.
When the endpoint is called, it launches a celery job (code is in gwvolman) 
to start publishing the Tale.

dashboard
~~~~~~~~~

The UI for publishing can mostly be found in the left-panel.js of the run component.
A few additional services are used, such as `dataone-auth.js <https://github.com/whole-tale/dashboard/blob/master/app/services/dataone-auth.js>`_.


DataONE JWT
***********
The DataONE JWT is needed for the backend to authenticate writes to DataONE and to 
get important information about the user, such as the ORCID. It is obtained by 
querying the DataONE CN, which is https://cn-stage-2.test.dataone.org/portal/token 
for dev and https://cn.dataone.org/portal/token for production.

The authentication code should reside in the ``dataone-auth.js`` service, and can 
be called from other components if needed. The logic for deciding whether to ask 
the production coordinating node for the token is dictated by the ENV.dev flag.

Note that the DataONE development and production CNs are under the same host, and that the
JWT is valid across those nodes.

gwvolman
~~~~~~~~

Gwvolman is responsible for holding and executing the publishing code, which can be found in
`gwvolman/lib <https://github.com/whole-tale/gwvolman/tree/master/gwvolman/lib>`_.

Startup
*******

When the publishing task is started, the girder and DataONE clients are initialized. The girder 
client is used to query Whole Tale for files and metadata. The DataONE client is 
used to create the system metadata, upload objects to DataONE, and to generate DOIs.

Uploading the License
*********************

The Tale has the license SPDX defined as a property. The Girder Client is used
to query the license endpoint for the Tale's license. Once obtained the text is 
uploaded to DataONE. This can be used as a template for uploading other external 
files to the package.

Generating EML
**************

The EML XML document is parsed by the DataONE UI and is responsible for the content under
the ``General`` section. Python's eTree is used in conjunction with helper functions 
defined in `gwvolman/lib/dataone/metadata.py <https://github.com/whole-tale/gwvolman/blob/master/gwvolman/lib/dataone/metadata.py>`_ to generate this document.

The DataONE user interface uses the EML document to render parts of the UI. Important pieces
in the EML include the dataset owners and creators and information about the files in the package (names, size, etc).


MIME Type Checking
******************
DataONE has strict rules on the file types of uploaded objects. If an unsupported 
file type is uploaded, the coordinating node won't properly index the dataset. To
account for this, the supported formats are taken from https://cn.dataone.org/cn/v2/formats.
During each file upload, the type is checked against the supported list. If the 
type isn't supported, it it defaulted to `application/octet-stream`.


md5 Hashing
***********
DataONE's system metadata requires a hash of the file being uploaded. This can be either
sha1 or md5. Girder has a hash for each file however, DataONE has no plan on supporting it.


Adding a File to a Package
*********************************

Adding a file (manifest, LICENSE, etc) can be done in a few steps.

1. Create a method, `upload_<name>_file`
2. Inside that method create the pid and metadata
3. Upload the file with the dataone client
4. Add a section for the file in the EML document ``create_eml_doc``


Troubleshooting
***************

If you see a package with an issue in the `General` section, the problem most is most 
likely in the EML document since the UI parses it into that section. Note that EML
attributes need to be in a particular order.

If you see a package with a blank `Files in this dataset` section, there was an issue with 
the resource map. This can range from referencing an out-of-network dataone object, incorrect hash,
unsupported mimetype, or mangled RDF.
