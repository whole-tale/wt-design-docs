.. _compose:

Creating New Tales
===========================

Tales can be created three different ways which are described in the sections below. Users are not 
restricted by the number of Tales that can be owned however, only two Tales can be run concurrently.

Environments
------------
When creating a Tale, the Environment must be chosen. This dictates which languages are available and which frontend IDE will be used. For example, the **RStudio** Environment
is bundled with RStudio while the **Jupyter Notebook** Environment is bundled
with Python and Jupyter Notebook. You'll want to pick the appropriate
Environment that supports the language that you intend to work with.

Provided Environments
^^^^^^^^^^^^^^^^^^^^^
Whole Tale provides a number of pre-build environments for convenience. For more information on the 
environments Whole Tale provides, visit the `documentation`_ page for environments.

  1. **RStudio**: Contains RStudio with R 3.4.1
  2. **Jupyter Notebook**: Contains Jupyter Notebook with Python 
  3. **JupyterLab**: The next generation user interface for Jupyter
  4. **Jupyter with Spark**: Jupyter Notebook bundled with Apache Spark
  5. **OpenRefine**: A frontend for cleaning messy data

.. _data-section:

Creating an Empty Tale
----------------------
To create an empty Tale, click the "Create New Tale" button on the Browse page to open the dropdown menu.
Select the "Create New Tale" option; the **New Tale Dialog** will appear where the new Tale can be 
customized.

.. figure:: images/compose/create_new_tale.png
     :align: center

     Dialog for creating a new Tale

.. _environment-section:


Creating Tales from Git Repositories
------------------------------------
Tales can also be created from existing Git repositories. To create a new Tale that contains a Git repository, select the
"Create New Tale" dropdown menu on the Browse page. Select the "Create Tale from Git Repository" link to open the 
modal dialog for customizing the new Tale.

.. figure:: images/compose/create_new_git_tale.png
     :align: center

     Dialog for creating a new Tale from a Git repository

A Tale that's created with a Git repository has the repository cloned into the root of the Tale's
`workspace/` folder which includes the hidden `.git/` folder. This provides users with the ability to update
the repository while performing the work in the Tale. Users can use the Tale's IDE
or the command line to interact with Git.

Creating Tales from Third Party Data Centers
--------------------------------------------
Select Data Centers have integrated their services with Whole Tale by embedding links on dataset landing pages that brings users back to
Whole Tale. This provides a streamlined workflow for users staring with published datasets that want to easily reproduce or 
build off of the data.

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



Launching the Tale
------------------
After you have finalized your tale and click `Create New Tale and Launch`, you'll be brought
to the **Run** page where it will start up, seen in the image below. From here
you can access the tale, along with an assortment of other actions that are
documented on the `run page`_.

.. figure:: images/compose/tale_launching.png
     :align: center

     A tale that is being created and configured.


.. _importing-section:


.. _documentation: environments.html
.. _run page: run.html
.. _demo server: https://search-dev.test.dataone.org/data
