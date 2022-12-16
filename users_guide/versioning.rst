.. _versioning:

Versioning Tales
================

Whole Tale allows users to create versions of their tales. A version includes
the contents of the tale workspace, externally registered data, and metadata.
Versions can be renamed, deleted, exported and published. :ref:`Recorded runs
<recorded-runs>` are created based on versions.

Versioning Model
~~~~~~~~~~~~~~~~

Whole Tale uses a simply filesystem-based versioning model. Any versions you
create are accessible via the Whole Tale dashboard as wells as in the
``../versions`` folder in your running interactive environment.


.. _create_version:
Creating Versions
~~~~~~~~~~~~~~~~~
You can create versions of your tale using the **Save Tale Version** option on
the tale :ref:`action menu <tale_actions>` or the **Tale History** panel.  
Select the **Tale History** icon (|tale_history|) to open or close the panel:

.. |tale_history| image:: images/versioning/tale_history_icon.png


To create a new version, select **Save Tale Version**:

.. figure:: images/versioning/tale_history.png
     :align: center

     Version history


Select **Files** > **Saved Versions** to manage your versions. From this menu you
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


.. _delete_version:

Deleting Versions
~~~~~~~~~~~~~~~~~

Deleted versions are removed permanently and cannot be recovered. A version
cannot be deleted if it has an associated recorded run.

.. _rename_version:

Renaming Versions
~~~~~~~~~~~~~~~~~

When versions are renamed, they are also renamed on the filesystem.

.. _restore_version:

Restoring Versions
~~~~~~~~~~~~~~~~~~

By selecting **Restore** you will copy the contents of the selected version to your active workspace.
This includes tale metadata and registered datasets.

.. _export_version:

Exporting and Publishing Versions 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Each time you export or publish a tale, if no version exists one is created
for you. Selecting **Export Tale** or **Publish Tale** from the tale action menu
will export or publish the most recent version. To export a specific version,
select the **Export Version** option from the version menu.

As New Tale
~~~~~~~~~~~

This option allows you to create a new tale from the selected version.

