.. _versioning:

Versioning Tales
================

Whole Tale users can create versions of their Tales via the **Tale History** panel.
Select the **Tale History** icon (|tale_history|) to open or close the panel:

.. |tale_history| image:: images/versioning/tale_history_icon.png


To create a new version, select **Save Tale Version**:

.. figure:: images/versioning/tale_history.png
     :align: center

     Version history


Select **Files > **Saved Versions** to manage your versions. From this menu you
can rename, remove, download, restore, or export your tale version.

.. figure:: images/versioning/version_menu.png
     :align: center

     Version menu

.. note::
   The **Download folder** option simply downloads any folder as a zip file. Use
   the **Export Version** option to download a complete version of your tale
   including metadata, external data, recorded runs, etc.
 
Created versions are accessible from inside your running interactive environment in the `../versions`
directory:

.. figure:: images/versioning/version_container.png
     :align: center

     Versions in the running container


Deleting Versions
~~~~~~~~~~~~~~~~~

Deleted versions are removed permanently and cannot be recovered. A version
cannot be deleted if it has an associated recorded run.

Renaming Versions
~~~~~~~~~~~~~~~~~

When versions are renamed, they are also renamed on the filesystem.

Restoring Versions
~~~~~~~~~~~~~~~~~~

By selecting **Restore** you will copy the contents of the selected version to your active workspace.
This includes tale metadata and registered datasets.

Exporting Versions 
~~~~~~~~~~~~~~~~~~~

Each time you export or publish a tale, if no version exists one is created
 for you. If versions exist, the most recent is used. The exported tale contains
a single version.

As New Tale
~~~~~~~~~~~

This option allows you to create a new tale from the selected version.


Versioning Model
~~~~~~~~~~~~~~~~

Whole Tale uses a versioning model based and hard and soft links on the local filesystem. This simple 
model allows us to expose all versions as a folder in your running interactive environment
for reference and comparison.

