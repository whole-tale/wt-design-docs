.. _r2d:

Extending repo2docker
=====================

Whole Tale uses a custom extension to the Binder project's repo2docker component
to build images. This means that any Binder-compatible repository can also 
be run in Whole Tale.


.. note::
   `repo2docker <https://repo2docker.readthedocs.io/>`_ is a software package 
   that can be used to build custom Docker images based on some simple text file 
   conventions.

Differences from Binder
~~~~~~~~~~~~~~~~~~~~~~~

The Whole Tale repo2docker extends Binder adding the following capabilities:

* Support for MATLAB and STATA environments
* Support for `Rocker Project <https://www.rocker-project.org/>`_ RStudio environments

Custom Buildpacks
~~~~~~~~~~~~~~~~~

* The MATLAB buildpack introduces `toolboxes.txt`

