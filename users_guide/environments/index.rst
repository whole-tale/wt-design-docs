
.. _environments: 

Computational Environments
==========================

Your tale's computational environment is a Docker image that is automatically
built  based on the combination of the selected interactive environment and 
any specified software dependencies.  The interactive environment is selected 
during tale creation and can be changed on the **Metadata** page. Whole Tale 
currenty supports a number of popular interactive environments including 
JupyterLab, RStudio, MATLAB, and STATA.

You can customize these environments by adding your own packages based on 
`repo2docker <https://repo2docker.readthedocs.io/>`_ compatible configuration files.
Read more about :ref:`customizing the environment <customizing>`.

What is Docker?
~~~~~~~~~~~~~~~

Docker is a popular virtualization ("container") platform that has been widely
adopted for the packaging, distribution, and deployment of software -- 
including research software. Whole Tale creates Docker images on your behalf
that capture the operating system and software versions used to execute your
computational workflow. These images are stored in our :ref:`container image
regsitry <registry>`.


.. toctree::
   :maxdepth: 1
   :caption: Learn more:

   repo2docker
   jupyter
   rstudio
   matlab
   stata
