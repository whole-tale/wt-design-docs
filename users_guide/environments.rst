.. _environments:

Environments: Containers for Computation
========================================
An **Environment** is an  operating system with a programming language and 
any packages needed to run an experiment. When creating a Tale, it is important
to pick the Environment that is right for your experiment. Whole Tale provides
a set of default environments with RStudio and Jupyter Notebook-and also allows
you to create your own.

.. _default_environments:

Default Environments
--------------------
The default Environment configurations are open source and can be found
on the `Whole Tale GitHub`_ page.

.. _jupyter:

Jupyter Notebook
^^^^^^^^^^^^^^^^
The *Jupyter Notebook* Environment runs on Ubuntu Core 14.04 which includes
CUDA_ and Theano_. It is meant to be a minimal high performance Python Environment, 
which can be extended by installing packages with::

  ! pip install --user <package>

Refer to the **Advanced** section below to learn how to find the Environment's username
and other parameters that may help 

Packages that are bundled with this Environment include

1. SciPy
2. NumPy
3. GNU Fortran
4. libOpenBlas
5. yt

For more information and technical details, visit the GitHub repositories below
  
  `The Whole Tale Jupyter Notebook Repository`_
  
  `Jupyter Minimal Notebook Repository`_


.. _jupyter_spark:

Jupyter Notebook with Spark
^^^^^^^^^^^^^^^^^^^^^^^^^^^
Whole Tale also caters to projects that utilize cluster-computing technology
with `Apache Spark`_. The *Jupyter with Spark* Environment runs on
Ubuntu 16.04.4 and comes bundled with 

1. Jupyter Notebook 5.2.x
2. Spark 2.2.0
3. Hadoop 2.7
4. Conda Python 3.x
5. Conda R 3.3.x
6. Scala 2.11.x
7. Mesos Client 1.2
8. pyarrow
9. R Packages: ggplot2 and rcurl
10. Python Packages: pyspark, pandas, matplotlib, scipy, seaborn, and scikit-learn

This Environment is based off of the all-spark-notebook, provided by Jupyter.

For more information and technical details, visit

  `The Whole Tale Jupyter Notebook Spark Repository`_
  
  `Jupyter Spark Source Repository`_
  
.. _rstudio:

RStudio
^^^^^^^

The RStudio Environment runs on Debian 8.11 and includes the following packages

1. R 3.4.1
2. tidyverse
3. dplyr
4. devtools
5. formatR
6. libcurl4
7. GNU Fortran
8. g++
9. gcc
10. Setuptools

Additional packages can be installed `the usual way`_.


OpenRefine
^^^^^^^^^^

The OpenRefine environment runs on Ubuntu and includes

1. OpenRefine 2.8
2. OpenJDK 8

.. _custom_environments:

Custom Environments
-------------------
Whole Tale provides a wizard for creating customized Environments that allows you
to specify the operating system, default packages, and programming language. To use the 
wizard, refer to the `Recipe Creation page`_.


.. _advanced:

Advanced
--------
There may be cases where you need to have more control over the Environment and
need to perform actions with the shell. Information
such as the user, mount path, and other commands that are run when the Environment
starts can be found by navigating to the Manage_ page and clicking the blue
info icon next to the Environment name.

For example, clicking the info icon for the Jupyter Notebook Environment provides the
configuration::

  {
    "command": "jupyter notebook --no-browser --port {port} --ip=0.0.0.0 --NotebookApp.token={token} --NotebookApp.base_url=/{base_path} --NotebookApp.port_retries=0",
    "environment": [
    "CSP_HOSTS=\"dashboard.stage.wholetale.org\""
    ],
    "memLimit": "2048m",
    "port": 8888,
    "targetMount": "/home/jovyan/work",
    "urlPath": "?token={token}",
    "user": "jovyan"
  }

We can see which user is used in the Environment, as well as the mount point, 
memory limit, and which port the Environment exposes. If we want to install
a python package, we would run::

  ! pip install --jovyan <package>



.. _Whole Tale Github: https://github.com/whole-tale/

.. _CUDA: https://developer.nvidia.com/cuda-zone
.. _Theano: http://deeplearning.net/software/theano/
.. Jupyter Notebook Links
.. _The Whole Tale Jupyter Notebook Repository: https://github.com/whole-tale/jupyter-yt
.. _Jupyter Minimal Notebook Repository: https://hub.docker.com/r/jupyter/minimal-notebook/

.. Jupyter Spark Links
.. _Apache Spark: https://en.wikipedia.org/wiki/Apache_Spark
.. _The Whole Tale Jupyter Notebook Spark Repository: https://github.com/whole-tale/all-spark-notebook
.. _Jupyter Spark Source Repository: https://github.com/jupyter/docker-stacks/tree/master/all-spark-notebook

.. RStudio Links
.. _ROpenSci: https://github.com/rocker-org/ropensci/
.. _Rocker Project: https://hub.docker.com/r/rocker/rstudio-stable/
.. _the usual way: http://derekogle.com/IFAR/supplements/installations/InstallPackagesRStudio.html

.. _Recipe Creation page: recipe.html
.. _Manage: manage.html