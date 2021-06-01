
.. _customizing: 

Customizing the Environment
===========================

Whole Tale requires you to declare any software dependencies in a set
of simple text files that are used to build a Docker image that is 
used to run your code.

The text file formats are based on formats supported by 
`repo2docker <https://repo2docker.readthedocs.io/>`_ and, where possible, 
follow package installation conventions of each language
(e.g., requirements.txt for Python, DESCRIPTION for R). In other cases,
simple formats are defined (e.g., apt.txt, toolboxes.txt).

Seel also:

* `Configuration Files <https://repo2docker.readthedocs.io/en/latest/config_files.html>`_ (repo2docker)


Base environment
----------------
The base environment is always an Ubuntu "Long Term Support" (LTS) version, often
the latest release. 

The :code:`apt.txt` file contains a list of packages that can be installed via :code:`apt-get`.
Entries may have an optional version (e.g., for use with  :code:`apt-get install <package name>=<version>`)

For example:

.. code:: bash
   
   libblas-dev=3.7.1-4ubuntu1
   liblapack-dev=3.7.1-4ubuntu1


See also:

* `Install packages with apt-get <https://repo2docker.readthedocs.io/en/latest/config_files.html#apt-txt-install-packages-with-apt-get>`_ (repo2docker)


MATLAB
------
MATLAB support is part of the Whole Tale repo2docker extension and not available in all
repo2docker configurations. 

MATLAB toolboxes must be declared in a :code:`toolboxes.txt` file. Each line contains a valid
MATLAB product for the selected version.

For a complete list of available packages for each supported version, see https://github.com/whole-tale/matlab-install/blob/main/products/.

For example the following :code:`toolboxes.txt` wold install the Financial and
Statistics and Machine Learning toolboxes.

.. code:: bash

   product.Financial_Toolbox
   product.Statistics_and_Machine_Learning_Toolbox

See also:

* `MATLAB example <https://github.com/whole-tale/matlab-example>`_


R/RStudio
---------
R packages may be specified in a :code:`DESCRIPTION` file or `install.R`. 

For `install.R`, each line is an `install.packages()` statement for a given package:

.. code:: bash

   install.packages("ggplot2")
   install.packages("reshape2")
   install.packages("lmtest")


To configure a specific version, we recommend configuring an MRAN date using the :code:`runtime.txt`
file:

.. code:: bash
 
   r-2020-10-20


This file contains the MRAN date containing the versions of packages specified in :code:`install.R`.

Alternatively, you ca use the :code:`install_version` function in place of `install.packages` in 
your :code:`install.R` file. 

.. code:: bash

   require(devtools)
   install_version("ggplot2", version = "0.9.1")


For more information see:

* `RStudio example <https://github.com/whole-tale/rstudio-example>`_
* `Install an R/RStudio environment <https://repo2docker.readthedocs.io/en/latest/config_files.html#install-r-install-an-r-rstudio-environment>`_ (repo2docker)
* `Install an R package <https://repo2docker.readthedocs.io/en/latest/config_files.html#description-install-an-r-package>`_ (repo2docker)
* `Specifying runtimes <https://repo2docker.readthedocs.io/en/latest/config_files.html#runtime-txt-specifying-runtimes>`_ (repo2docker)

Python
------

Python packages can be specified using :code:`requirements.txt`, :code:`Pipfile`/:code:`Pipfile.lock`, or 
Conda :code:`environment.yaml`.

Example :code:`requirements.txt`: 

.. code:: bash

   bokeh==1.4.0
   pandas==1.2.4
   xlrda==2.0.1


See also:

* `Mapping Estimated Water Usage  <http://doi.org/10.5281/zenodo.4829933>`_ (Example tale)
* `requirements.txt: Install a Python environment<https://repo2docker.readthedocs.io/en/latest/config_files.html#requirements-txt-install-a-python-environment>`_ (repo2docker)
* `Pipfile and/or Pipfile.lock: Install a Python environment <https://repo2docker.readthedocs.io/en/latest/config_files.html#pipfile-and-or-pipfile-lock-install-a-python-environment>`_ (repo2docker)
* `environment.yml: Install a Conda enviroment <https://repo2docker.readthedocs.io/en/latest/config_files.html#environment-yml-install-a-conda-environment>`_ (repo2docker)


Other
-----

Non-standard packages can be installed (or arbitrary commands run) using a :code:`postBuild` script. 
The :code:`start` script can be used to run arbitrary code before th user session starts.

See also:

* `postBuild: Run code after installing the environment  <https://repo2docker.readthedocs.io/en/latest/config_files.html#postbuild-run-code-after-installing-the-environment>`_ (repo2docker)
* `start: Run code before the user session starts <https://repo2docker.readthedocs.io/en/latest/config_files.html#start-run-code-before-the-user-sessions-starts`_ (repo2docker)


