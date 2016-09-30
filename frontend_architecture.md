# Frontend Architecture

This document is an outline of the content of [Matt's architecture
slides](https://docs.google.com/presentation/d/1a7a-jEPTTIx2Hka8fTn6DWcF_VRYrwgMYRp8pN5CllY/edit),
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

## Storage Classes

There are three types of "storage" that we need to be able to support, each
supporting a different use case.

### Involatile

"Involatile" storage is for quasi-published datasets in the Whole Tale.  While
WT will also support exporting datasets to external repositories, we anticipate
at least some will be "published" within WT itself.  This will include datasets
that are created, uploaded or curated.

We anticipate that because this data will require automated replication,
mirroring, detailed access controls and should be accessible to federation, we
will utilize iRODS for this.  Access inside frontends will be via
filesystem-like access to the iRODS store (either through FUSE or Parrot).

If handles, DOIs or identifiers are issued, it will be for data that resides in
this area.

### Working

"Working" data storage is for artifacts created or used during the course of
analysis (such as images, notebooks, extracted files, and user preferences such
as `.rc` files).  This data will have high-turnover, but will likely be
small in size.

We anticipate that this will be provided by Nextcloud (a fork of ownCloud)
which provides desktop and mobile access as well as access through a web
interface.  The filesystem is mountable via WebDAV.

One potential downside to WebDAV as a filesystem backend is that it can be
somewhat slow for partial IO or repeated IO requests.  Syncing operations can
be batched and are of less concern.

This will be a "home" directory, customized on a per-researcher basis.

### Virtual

"Virtual" filesystems are filesystems that do not exist in a strict fashion,
but instead are created as a combination of local or remote resources that are
not naturally "file-like."  These will be mediated by FUSE and constructed
filesystems.  A few examples:

 * DOI-based filesystem, where the [DataCite content
   resolver](https://www.datacite.org/content.html) can identify supplemental
   files and expose those as files.
 * HTTPfs, where remote HTTP-accessible resources are exposed
 * OAI-ORE, where OAI-accessible resources are exposed

These virtual filesystems are all envisioned as being read-only.  The main
advantage they present is that they can manage (and potentially cache) access
to resources that would otherwise need to be duplicated locally.

## Execution Environment

### Filesystems

### Execution Environment

## Authentication and Authorization

### Goals

### Difficulties

## Coordination and Dashboard
