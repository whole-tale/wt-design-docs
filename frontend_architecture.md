Frontend Architecture
=====================

This document is an outline of the content of `Matt's architecture
slides <https://docs.google.com/presentation/d/1a7a-jEPTTIx2Hka8fTn6DWcF_VRYrwgMYRp8pN5CllY/edit>`_,
with additional information for clarity.

The fundamental user interaction we want to support is interacting with a
"frontend" (which can be a Jupyter kernel, a shell command, whatever) either
through a web browser or some other mediated connection.  Code runs inside the
"execution environment" of the frontend and has access to a set of filesystems,
where datasets reside.

Individuals should be able to independently choose *both* the frontend and the
data that is provided.  These are two categorical axes along which we can view
an "instance" of a frontend, and we can move it along either.

In conjunction with this, to make things useful for researchers, we want to
choose technologies that maximize the ability of the researcher to customize
the environment, access objects from the environment, and minimize the
difficulty in constructing precisely the data analysis they seek.

Storage Classes
---------------

There are three types of "storage" that we need to be able to support, each
supporting a different use case.

Involatile
^^^^^^^^^^

"Involatile" storage is for quasi-published datasets in the Whole Tale.  While
WT will also support exporting datasets to external repositories, we anticipate
at least some will be "published" within WT itself.  This will include datasets
that are created, uploaded or curated.

We anticipate that because this data will require automated replication,
mirroring, detailed access controls and should be accessible to federation, we
will utilize iRODS for this.  Access inside frontends will be via
filesystem-like access to the iRODS store (either through FUSE or Parrot).

If handles, DOIs or identifiers are issued, it will be for data that resides in
this area.  For data that has not been issued identifiers, or that does not
need detailed replication, Girder is the present solution we are exploring.
Girder also has tasks for extracting metadata, rendering datasts, and creating
collections, which may obviate the need for some uses of iRODS.

Working
^^^^^^^

"Working" data storage is for artifacts created or used during the course of
analysis (such as images, notebooks, extracted files, and user preferences such
as ``.rc`` files).  This data will have high-turnover, but will likely be
small in size.

We anticipate that this will be provided by Nextcloud (a fork of ownCloud)
which provides desktop and mobile access as well as access through a web
interface.  The filesystem is mountable via WebDAV.

One potential downside to WebDAV as a filesystem backend is that it can be
slow for partial IO or repeated IO requests.  We are presently attempting to
determine if the IO speed is unacceptably slow, or if it can be improved.

This will be a "home" directory, customized on a per-researcher basis.

Virtual
^^^^^^^

"Virtual" filesystems are filesystems that do not exist in a strict fashion,
but instead are created as a combination of local or remote resources that are
not naturally "file-like."  These will be mediated by FUSE and constructed
filesystems.  A few examples:

 * DOI-based filesystem, where the `DataCite content
   resolver <https://www.datacite.org/content.html>`_ can identify supplemental
   files and expose those as files.
 * HTTPfs, where remote HTTP-accessible resources are exposed
 * OAI-ORE, where OAI-accessible resources are exposed

These virtual filesystems are all envisioned as being read-only.  The main
advantage they present is that they can manage (and potentially cache) access
to resources that would otherwise need to be duplicated locally.

Frontend
--------

The frontend is the component that the researcher will indirectly
interact with.  For now, we will assume that this is the union of two
components: the container (at present, this is Docker) and the volumes that are
passed into it.  These frontends can if they choose expose ports, but they can
also consist exclusively of autonomous scripts that modify the working
environment or return results indirectly.

Filesystems
^^^^^^^^^^^

The filesystem here is a union of the three types of storage, presented as a
set of consistent directories.  We are not yet certain if this will be one or
several independent mount points.

 * `/home/user` will be the Nextcloud "working" directory.  This will be
   automatically synced.
 * Some other directory, likely `/data/`, will be a mount of the involatile
   storage, and specifically the items that have been selected from that
   involatile storage.  This can be thought of as a "collection" in Girder.
 * The virtual filesystems will also likely be under `/data/` and its
   subdirectories.

At present, we are exploring using a combination of FUSE and
`PyFilesystem <http://docs.pyfilesystem.org/en/latest/>`_ to construct these
filesystems outside the container, then provide them as volumes inside the
container.

A second consideration here is how to represent the metadata; when constructing
collections or virtual filesystems, they will be identified using standard
aggregation formats (such as OAI).  These can then be exposed in the
filesystem; one might imagine such a directory structure as:

.. code-block:: bash

    /data/collection.json
    /data/dataset1/...
    /data/dataset1.json
    /data/dataset2/...
    /data/dataset2.json
    /data/dataset3/...
    /data/dataset3.json

A possibility for writing metadata would be to allow these to be read-write.
It's not clear if we want to enable that.

Execution Environment
^^^^^^^^^^^^^^^^^^^^^

The execution environment is a container that runs one or multiple executables.
This could be a jupyter kernel/server, a script or executable, or even a VNC
server.  There is not a requirement that these be accessed via web interfaces,
although that is likely the easiest method.

The long-term plans for WT include making these remixable and mashable,
although we hope to minimize the amount of manual dockerfile manipulation that
researchers have to do.

Coordination and Dashboard
--------------------------

All of these operations are to be coordinated by some combination of the
Dashboard and the indexing system (which right now is Girder).  That will
include frontend selection and launching.
