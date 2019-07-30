.. publishing:

Publish: Preserve and Share your Work
=====================================

When your Tale is ready to be preserved and shared, you can publish it to external repositories. When you publish your Tale, it recieves a DOI that can be cited by others.

Publishers
----------

DataONE
^^^^^^^
DataONE is a network of data centers and organizations that share their information across a network of nodes, where data
is replicated and described with rich metadata. Publishing your Tale into the DataONE network will allow you to
archive your work, collect usage statistics, and make it easy to share with other scientists.

Signing Into DataONE
""""""""""""""""""""

Depending on which repository you decide to publish to, you may have to log into DataONE if you haven't done so already.
You'll be redirected to ORCID, and then back to Whole Tale once the login process is completed. You can use either your `ORCID ID`_
or university account with `CILogon`_ to access the DataONE system.

     
Publishing Your Tale
--------------------

To publish your running Tale, select "Publish Tale" in the Run page menu. If you haven't signed in to DataONE yet, you'll be asked to do so with your ORCID.

     .. figure:: images/publish/start_publish.gif
          :align: center

          Publishing is accessed through the Tale Run page


Once the publishing dialog is opened, select which node you want to store your Tale in. It is suggested that if this is your first time publishing a Tale, select the DataONE Development node to test the results.

     .. figure:: images/publish/run_publish.gif
          :align: center

          Publishing to the Development node



Viewing Publishing Information
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
After you've pulished your Tale, you can always view the published location under the metadata tab on the Run page.

Whole Tale Generated Files
--------------------------
In order to preserve as much information about the computation environment, we generate files that provide extra context for the Tale.
These files are included in your DataONE package. The files range from the Tale's license, metadata documents for DataONE, and metadata about the Tale.

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
The README can be used as a reference for running the Tale outside Whole Tale.

metadata.xml
^^^^^^^^^^^^
Whole Tale automatically generates the DataONE EML document which includes information about the Tale that is shown to users on the dataset landing page

.. _ORCID Id: https://orcid.org/
.. _CILogon: https://cilogon.org/
.. _Research Object Lite : https://researchobject.github.io/ro-lite/0.1.0/
