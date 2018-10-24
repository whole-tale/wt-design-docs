.. _importing_tales:

Tale Importing
==============

Background
----------

Importing Tales is an important feature for not only our users but also for the NSF.
Implementing this feature opens our system up for new uses and is the second half to
round tripping a tale. This task can be broken in to two phases:
   
   1. Importing & Launching Data from External Packages
   
         This phase handles datasets which are not Tales. When a user launches a
         dataset in Whole Tale, we automatically register the data and create 
         the Tale after an environment is selected.
         
   2. Importing & Launching Tales from External Packages 
   
         This phase extends the previous by adding support for parsing the 
         tale.yaml file and creating the corresponding Tale.


Phase 1: Importing & Launching from External Datasets
-----------------------------------------------------


Proposed Mockup 1: Use the Compose Page


.. image:: images/compose_complex.png


The Compose page is a natural place for the user to land. Upon visiting the page,
data registration automatically begins. The files are listed under the Tale's data
and entries with loading icons are placed in the file browser. Once registration 
completes, the `Launch New Tale` button enables.


.. image:: images/compose_complex_pfd.png

Adding files to the widget is red because the file browser was never meant to 
support this kind of functionality. It is a graphical reflection of the filesystem, 
and files are added one-by-one during file registration. The proposed method would 
work if we created a record for each file (thus adding it to the filesystem, which
would appear in the UI) and fill in the bytes on a second pass-which is not realistic.
A second solution involves hacking the the file browser, which isn't reccomended.


Proposed Mockup 2: Use the Compose Page


.. image:: images/compose_minimum.png


This mockup uses the Compose page like the first, but moves the loading icons to 
the files listed under the Tale's data section. This gets around the technical hurdle 
of modifying the file browser.

.. image:: images/compose_minimum_pfd.png


Proposed Mockup 3: Create the New Tale Dialog

.. image:: images/new_tale_dialog_minimum.png


The New Tale Dialog can be modified to support data registration if the user
pastes a link in the `Input data` field. The dialog would open when the user 
lands on Whole Tale. The referring URL would be placed in the `Input data field`, 
and the user can then click `Create New Tale` which registers the data and launches 
the Tale.


.. image:: images/new_tale_dialog_minimum_pfd.png