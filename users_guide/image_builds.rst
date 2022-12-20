.. _image-builds:

Image Building and Caching
==========================

Whole Tale uses an extension to Project Jupyter's :ref:`repo2docker
<customizing>` to build container images based on a set of configuration files
found in the tale workspace. Beginning with version 1.1, container images are
built only using the repo2docker configuration files and any extra files
specified using the ``extra_build_files`` :ref:`advanced settings
<advanced-settings>` option.

The image tag is created as a combination of checksums from:

#. repo2docker configuration files
#. tale image object configuration
#. Dockerfile created by r2d using files from above

With this, any tales that have a common environment configuration and images
built using the same version of repo2docker will share a container image. 
This improves build performance and caching efficiency on the platform. 
