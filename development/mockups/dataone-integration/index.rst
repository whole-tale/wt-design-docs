WholeTale & DataONE Integration
===============================

.. toctree::
   :maxdepth: 1
   :caption: Contents:

   data_registration
   publishing_tales
   importing_tales
   tale_serialization
   
Background
----------
DataONE integrates into Whole Tale in three areas.
  1. Registering Data
      Whole Tale supports registering datasets from DataONE
      Involves communicating with DataONE to locate data packages
      Requires backend support to mimic nested package structures
  2. Publishing Tales
      Whole Tale supports publishing Tales to DataONE
      Involves taking a set of girder files and creating a DataONE compliant package
      Involves authenticating a user with DataONE from Whole Tale
  3. Importing Tales
      Whole Tale supports importing tales from DataONE.
      This involves a UI addition to DataONE's UI package landing page
      This also involves adding support in Whole Tale for recognising Tales 

The level of integration varies in each area-ranging from user authentication
to simple buttons.


Data Registration
-----------------
The user should be allowed to search for a data package in a number of formats, 
such as the doi and package landing page. The SOLR DataONE endpoint is used to
locate the dataset using the user supplied information.

Once the package is found, data registration can begin. To register files from
DataONE into Whole Tale, the DataONE object's `resolve` address is stored in a
Girder `linkFile`. When the object is accessed in Whole Tale, the object is retrieved
from the `resolve` address.

To read more on data registration, view the documentation page on `Data Registration`_

Publishing Tales
----------------
In order to publish a tale to DataONE, certain constraints had to be addressed to
create a full `package structure`_. In summary, a metadata file for each object
in Whole Tale is created. An `EML`_ document describing the package, and a 
metadata document describing the package (relating the objects together).

Because the Tales can be imported, additional metadata may be required. A 
metadata file, `tale.yaml` holds metadata related to Whole Tale.

One additional task for publishing is authenticating a user in DataONE while
remaining in Whole Tale. This is going to be accomplished in a two part fashion:
   1. Authenticate the user with DataONE using OAuth 2.0 flow
   2. Add a Globus certificate to the DataONE certificate chain

To read more on Tale publishing, view the documentation page on `Tale Publishing`_



Importing Tales
---------------


To read more on Tale importing, view the documentation page on `Tale Importing`_







.. _package structure: https://releases.dataone.org/online/api-documentation-v2.0/design/DataPackage.html
.. _EML:https://en.wikipedia.org/wiki/Ecological_Metadata_Language
.. _Data Registration:
.. _Tale Publishing:
.. _Tale Importing:


