Creating Frontends
==================

This document describes basic requirements for creating a usable Frontend (also
known as Whole Tale Image).

Description
-----------

Software environment used in research plays a vital role in Whole Tale and needs
to be preserved in the same fashion as other research artifacts. Currently
Whole Tale utilizes Docker containers for that purpose. Our system is designed
to allow users to create and publish Docker images, which can be subsequently
used as building blocks for Tales. 

Due to constraints related to reproducibility we do not permit uploading raw
Docker images. Instead we require users to provide a GitHub repository, that
contains everything that is necessary to build a Docker image, which at a bare
minimum is a Dockerfile. A reference to a *GitHub url* and a *commit id* is kept
in our database as a *Recipe* object.

Image composition guidelines
----------------------------

Docker images in WT are built from *Recipe* objects, which contain necessary
information to create a local copy of an environment, where ``docker build``
command can be executed. There is a minimum set of requirements that the
resulting Image has to fulfil:

* define a single port that is going to be used to access a running container
  via http(s) (e.g. ``EXPOSE 8888``)
* define a command that is executed upon container initialization (``COMMAND
  ["/bin/app.exe"]``)
* define a user that will own container session (``USER jovyan``)
* define a single volume that will be used as a mount point for Whole Tale FS
  (``VOLUME ["/home/jovyan/work"]``)

Optionally:

* ``FROM`` target should be referenced via a digest rather than a tag (currently
  not enforced).

Aforementioned properties can be defined by the Dockerfile, but may be
overwritten through WT's *Image* object, e.g.::

    "config": {
      "command": "/init",
      "port": 8787,
      "targetMount": "/home/rstudio/work",
      "urlPath": "",
      "user": "rstudio"
    }

Notes
^^^^^

* ``config.command`` and ``config.urlPath`` properties supports templating.
  Currently ``config.port`` and a randomly generated can be passed via
  ``{port}}`` and ``{{token}}`` respectively. (see Example below)
* config options passed to Docker during a Tale initialization are currently
  evaluated in a following order (first on the list takes precedence):
  * *Tale* object's ``config`` property
  * *Image* object's ``config`` property
  * Docker image defaults
  * `gwvolman <https://github.com/whole-tale/gwvolman>`_ defaults

Example Frontends
^^^^^^^^^^^^^^^^^

A basic Jupyter image that WT uses is defined `here
<https://github.com/whole-tale/jupyter-yt/>`_. Relevant part of the *Image* object::

    "config": {
      "command": "jupyter notebook --no-browser --port {port} --ip=0.0.0.0 --NotebookApp.token={token} --NotebookApp.base_url=/{base_path} --NotebookApp.port_retries=0",
      "memLimit": "2048m",
      "port": 8888,
      "targetMount": "/home/jovyan/work",
      "urlPath": "?token={token}",
      "user": "jovyan"
    }

For a full list of properties supported by ``config`` parameter please refer to
`plugin code
<https://github.com/whole-tale/girder_wholetale/blob/master/server/schema/misc.py#L54>`_.
