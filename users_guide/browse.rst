.. _browse:

Exploring Existing Tales
========================

The **Tale Dashboard** page is the main landing page for Whole Tale. It allows you
to :ref:`create <compose>` new tales or :ref:`run <run>` existing tales. 

From this page you can:

* :ref:`Browse and search for tales <browse-tales>` that you have created
  or that have been shared with you or publicly.
* Create a new tale
* :ref:`View <view-tale>`, :ref:`run
  <launch-tale>` and :ref:`stop <stop-tale>` tales.
* :ref:`Delete <delete-tale>` tales that you own or have edit acces to


.. figure:: images/browse/browse_overview.png
     :align: center

     Whole Tale's main landing page

.. _browse-tales:


The Tale Dashboard has four sections:

* **My Tales**: Tales you have created
* **Shared with Me**: Tales shared with you by other users
* **Public Tales**: Tales shared publicly by users of the system
* **Currenty running**: Displays if you have any interactive sessions running

My Tales
--------
The **My Tales** tab displays all tales that you have created or copied. You have 
edit permission on these tales and can delete them or share them with other users.

Shared with Me
--------------
The **Shared with Me** tab displays all tales that have been shared with you by
other users. These may be read-only or editable. If a tale is shared with you read-only,
when you attempt to run it a copy will be made and appear under My Tales with the
"COPY" indicator.

Public Tales
------------
The **Public Tales** tab displays all tales that have been shared publicly by
users of the system. These are all read-only. If you attempt to run a public tale,
a copy will be made and appear under My Tales with the "COPY" indicator.

Currently Running Tales
-----------------------
If you have clicked the **Run Tale** button for any tales, the **Currently Running**
panel will display. You may have 2 interactive environments running at the same time. 

Tale Operations
---------------

.. _view-tale:

View Tale 
~~~~~~~~~
Hover over the tale card and select **View** to access a tale. You can 
view or edit  metadata, files, and run the interactive environment created
by the author.

.. _launch-tale:

Run Tale
~~~~~~~~
Clicking the **Run Tale** button on a tale that you own will start the associated
interactive environment. On tales shared publicly or with read-only permissions,
a copy will first be created. 

Stop Tale
~~~~~~~~~
Clicking the **Stop Tale** button will stop the interactive environment.

.. _delete-tale:

Delete Tale
~~~~~~~~~~~
To delete a tale, click the "X" button on the tale card. You will be prompted to confirm
before the tale is deleted. 

.. important::
   **Stop** will end your interactive session, shutting down the associated
   container image. **Delete** will completely remove your tale from the system.

