.. _compose:

Creating New Tales
===================

Tales contain the inputs, outputs, data, code, execution environment, provenance
and other related metadata about the results of computational research. A tale
is typically associated with a single publication and contains all information 
necessary to reproduce reported results.

Tales can be created as follows:

* :ref:`New Tale <create-new>`: Create a new empty tale
* :ref:`Github repository <create-git>`: Create a tale based on an existing Github
  repository
* :ref:`From data repository <create-import>`: Create a tale based on an existing 
  dataset stored in a research repository (such as Dataverse, Zenodo or DataONE)

Note: You can create as many tales on the system as you'd like, but you can only have
2 interactive environments running concurrently.

.. figure:: images/compose/create_overview.png
     :align: center

     Creating a new Tale

Environments
------------
When creating a new tale, you must select the default interactive environment that
will be used. Supported environments include :ref:`JupyterLab <jupyter>`, 
:ref:`RStudio <rstudio>`, :ref:`MATLAB <matlab>`, :ref:`STATA <stata>`, 
and :ref:`OpenRefine <openrefine>`. For more information including how to customize
installed packages, see the :ref:`Environments <environments>` section.


.. _create-new:

Creating an Empty Tale
----------------------
To create an empty Tale, click the **Create New Tale** button and select the 
**Create New Tale** option. The **Create New Tale** dialog will appear allowing
you to enter a title and select the interactive environment. Select the 
**Create New Tale** button and you will be taken to the your new tale where you 
can upload files, register external data, edit metadata, share with other users,
or start an interactive environment. For more information see the 
:ref:`Accessing and Modifying Tales <run>` section.

.. figure:: images/compose/create_menu.png
     :align: center

     Create New Tale menu

.. figure:: images/compose/create_new_tale.png
     :align: center

     Dialog for creating a new Tale




.. _environment-section:


.. _create-git:

Creating Tales from Git Repositories
------------------------------------
Tales can also be created from existing public Git repositories. To create a new 
Tale that contains a Git repository, select the **Create New Talex** dropdown menu 
then **Create Tale from Git Repository**.

.. figure:: images/compose/create_new_git_tale.png
     :align: center

     Dialog for creating a new Tale from a Git repository

Enter the URL of a public repository, title for your tale, and select the desired
interactive environment. Select the **Create New Tale** button to create the tale
and import contents from the specified Git repository. For more information 
about using Git in Whole Tale, see :ref:`Working with Git <github>`.

.. _create-import:

Creating Tales from Third Party Data Centers
--------------------------------------------
Tales can also be created from third-party research data repositories. Currently
supported repositories include DataONE, Dataverse, and Zenodo. 

Dataverse
^^^^^^^^^
Select Dataverse nodes have added support for creating Tales from dataset landing pages.

To create a Tale with a data file from a data package hosted by Dataverse, locate the file listing in the data package. The ``Whole Tale`` 
link under the Explore tab will launch Whole Tale in a new window, where you can further tailor the environment.

.. figure:: images/compose/dataverse_landing_integration.png
     :align: center

     A Dataverse package whose node supports Whole Tale integration.
     
When the Tale properties satisfy your needs, data registration and Tale launching will begin after clicking ``Create New Tale and Launch``. Once 
the Tale is ready to launch, you'll be automatically re-directed to it.


DataONE
^^^^^^^
DataONE allows users to launch Tales with entire datasets. To create a Tale from a DataONE dataset, visit your dataset on the 
DataONE `demo server`_ and look for the ``Analyze`` dropdown menu in the citation and downloads bar. 

.. figure:: images/compose/dataone_landing_integration.png
     :align: center

     A DataONE package that supports Whole Tale integration.

After selecting one of the listed environments, you'll be transferred to Whole Tale where you can further tailor your Tale. You may also 
select a different environment than the one that was chosen in DataONE. One customizations have been made, click the ``Create New Tale and Launch`` button to
register the data and create the Tale. 


Choosing Between Read only and Read/Write
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you're creating a Tale that has external data, the data is placed in a read only folder to prevent accidental manipulation. In the case 
that you need to modify the data, select the "Read/Write" option before creating the Tale.

.. _importing-section:
.. _documentation: environments.html
.. _run page: run.html
.. _demo server: https://search-dev.test.dataone.org/data
