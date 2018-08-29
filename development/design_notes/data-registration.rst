=================
Data Registration
=================

This document describes the requirements and outlines the architecture for data registration.

DataONE
=======
There are a number of different DataONE networks that act in isolation. For example, thePproduction DataONE Network has no knowledge of the information on the DataONE Development Network. Mixing data from each network opens the possibility for a number of different issues (package collisions, doi collisions, etc). In addition, a published Tale cannot reference an out of network object. For these reasons, data registration is restricted to the DataONE Development Network (https://dev.nceas.ucsb.edu/) on the Whole Tale Development Deployment. Additionally, the end goal is for the Production Whole Tale Deployment to restrict registering data from production DataONE. Until the Publishing feature is complete, the Whole Tale Production *and* Whole Tale Development Deployments are restricted to registering from the DataONE Development Network.

Backend Architecture
--------------------

The endpooint that is used to register a dataset is ``/dataset/importData``. Internally, 
it is checked whether the resourc belongs to DataONE. If it is, ``register_DataONE_resource``
is called.

The first piece of information that is extracted from DataONE is the list of 
all the files in the package. This is done with a call to ``dataone_register.get_documents``.

From the query,

.. code:: python

  result = query(q='resourceMap:"{}"'.format(esc(package_pid)), fields=["identifier", "formatType", "title", "size", "formatId", "fileName", "documents"])
 
we can see that we're asking for information about each document, described by ``fields``.

We filter these documents based on three types:
   
   1. METADATA

   Some documents may be metadata documents, and we'd like to identify those. This is done by calling 
   ``dataone_register.extract_metadata_docs``. The docs from the call to  ``dataone_register.get_documents`` 
   are iterated over, and checked if its ``'formatType' == 'METADATA'``.

   2. DATA

   Once the metadata documents are filtered, we filter out the DATA objects. This is done with 
   ``dataone_register.extract_data_docs`` in a similar fashion to METADATA. We check each document's ``formatType`` for ``DATA``

   3. RESOURCE

   ``dataone_register.extract_resource_docs`` is used to filter any resource documents.

Creating Girder Objects
~~~~~~~~~~~~~~~~~~~~~~~
The primary metadata document that describes the package is used to name the Girder folder that holds the items.
There are cases where multiple primary metadata documents exist, and is checked with
``dataone_register.check_multiple_metadata``. The filenames for each Girder item are taken from the filtered ``DATA`` objects.
These objects also include the identifier, download URL, mime type, and size which are recorded into the Girder item object.


