.. _tale_structure:

Tale Structure
==============

This section describes the structure of a tale. Tales consist of the following
elements:

- Environment
- Workspace
- External data
- Versions and Runs
- Metadata

Environment
-----------
A tale environment consists of:

- The selected interactive environment (e.g., RStudio, JupyerLab, MATLAB,
  STATA). These relate to a repo2docker buildpack and default command used to
  start the interactive environment.
- repo2docker configuration files specifying software dependencies
- The container image built from the above stored in the :ref:`container
  registry <registry>`.


Workspace
---------

The tale workspace is the primary folder containing your code, data,
documentation -- anything required to reproduce your computational workflow. 

External data
-------------

A read-only folder containing externally referenced data that has been
registered with Whole Tale. 


Versions and Runs
-----------------

The **Saved Versions** (versions) and **Recorded Runs** (runs) folders provide
read-only access to versions and recorded runs.


Metadata 
--------

Tale metadata contains additional information about your tale including title,
authors, description, keywords, license, and citations/references.
