.. _publishing:

Publishing Tales
================

When your Tale is ready to be preserved and shared, you can publish it to external repositories. When you publish your Tale, it receives a DOI that can be cited by others.

Publishers
----------

Zenodo
^^^^^^
Zenodo is a general purpose data repository that's run by CERN. Zenodo allows
for objects up to 50gb and can mint DOIs. Zenodo also offers the ability to version 
data submissions, which is supported in Whole Tale's system.

.. note::
   Before publishing to production servers, it's recommended to first publish to
   the Zenodo sandbox repository.

DataONE
^^^^^^^
DataONE is a network of data centers and organizations that share their information 
across a network of nodes, where data is replicated and described with rich metadata.
Publishing your tale into the DataONE network will allow you to archive your work, 
collect usage statistics, and make it easy to share with other scientists.


Publishing Your Tale
--------------------

To publish your Tale, select "Publish Tale" from the dropdown menu on the Run page.

     .. figure:: images/publish/start_publish.gif
          :align: center

          Publishing is accessed through the Tale Run page


Once the publishing dialog is opened, select which data repository you want to store your Tale in.

     .. figure:: images/publish/run_publish.gif
          :align: center

          Publishing to the Development node

If you haven't connected any third-party accounts the list will be empty. For instructions how to connect your account, visit
the settings page.

Viewing Publishing Information
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
After you've published your tale, you can always view the published location under the metadata tab on the Run page.

Updating Published Tales
^^^^^^^^^^^^^^^^^^^^^^^^

In the case that the published tale needs to be published again, with the intent of overwriting the previous publication, 
it can be updated by re-publishing to the same repository. This feature is _only_ available to tales under the user's ownership. 

If a tale was used for related, subsequent work and _shouldn't_ update the previous tale, a new tale should be created by 
first copying the tale. When the copied tale is published, it will be a completely new record.


Whole Tale Generated Files
--------------------------

manifest.json
^^^^^^^^^^^^^
This is a metadata document that describes the Tale, which was inspired from the `Research Object Lite`_ specification. The 
important information contained in this file includes any external data that was used, locations of data files, and author attributes.

environment.json
^^^^^^^^^^^^^^^^
The environment file contains information about the Tale's compute environment which includes memory limits and docker information.

LICENSE
^^^^^^^
The LICENSE file describes the Tale's license. To change the license, navigate to the metadata editor in the Run page.
  
README.md
^^^^^^^^^
The README file gives instructions for running your Tale locally without Whole Tale.

.. _Research Object Lite : https://researchobject.github.io/ro-lite/0.1.0/
