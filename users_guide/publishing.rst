.. publishing:

Publish: Preserve and Share your Work
=====================================
Once you finish creating your tale and are ready to reference it in a journal, you can publish it to
DataONE and receive a citable DOI. 

.. figure:: images/publish/publish-open.gif
     :align: center

DataONE
^^^^^^^
DataONE is a network of data centers and organizations that share their information across the network where it
is replicated and described with rich metadata. Publishing your Tale into the DataONE network will allow you to
archive your work, collect usage statistics, and make it easy to share with other scientists.

Signing Into DataONE
^^^^^^^^^^^^^^^^^^^^
In order to create the package, you'll first need to log into DataONE. If you haven't done so already, you'll be prompted to when publishing.
 You can use either your `ORCID ID`_ or university account with `CILogon`_.

.. figure:: images/publish/orcid-personal.png
     :align: center

     Login screen for a personal orcid account
     

Data Files
^^^^^^^^^^
The files that were used and created during the execution of your Tale. You can optionally choose to
leave files out that aren't needed to reproduce your experiment.

Environment Files
^^^^^^^^^^^^^^^^^
In order to preserve as much information about the computation environment, we generate files that provide extra context for the Tale. 
The files range from descriptions about script execution order, original file locations, virtual machine configurations, and the license.
 

tale.yaml
~~~~~~~~~
When publishing, we save important information about your tale. This information includes file paths, file execution order, and your Tale's unique ID.

repository.tar
~~~~~~~~~~~~~~
The repository tar contains the dockerfile that was used to create the virtual machine that the tale was run on. Additional files that may be present include any configuration files and deployment nots. 

LICENSE
~~~~~~~
The LICENSE file is the license that was picked from the *Licensing* section.

Licensing
^^^^^^^^^
Each published tale is assigned a license that can be selected from the publishing dialog. Different DataONE repositories may require different licensing,
and the dialog will only present licenses that are available.

.. figure:: images/publish/license-selection.png
     :align: center


.. _ORCID Id: https://orcid.org/
.. _CILogon: https://cilogon.org/
.. CC0: https://creativecommons.org/share-your-work/public-domain/cc0/
.. CC-BY 3.0: https://creativecommons.org/licenses/by/3.0/
.. CC-BY 4.0: https://creativecommons.org/licenses/by/4.0/

