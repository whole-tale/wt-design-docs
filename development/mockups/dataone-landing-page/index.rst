DataONE to WholeTale Workflow
=================================

This folder has information relevant to what the user will experience when coming
from a DataONE package into WholeTale. 

When a user wants to take a data package from DataONE, they can do so in two ways.

The first is the focus of this document; the second way is through the existing 
data registration modal dialog.

On the DataONE side, each data package will have a button that the user can click
which will bring them to WholeTale. This can be seen in the image below. The position 
of the button may change as the http://mdc.lagotto.io/ project progresses. Regardless
of button position, the workflow remains the same.

.. image:: dataone.png
    :alt: WholeTale's Landing Page
    
Once clicked, the user is brought over to WholeTale. If the user has not logged in,
they are prompted to do so. Once logged in, they are re-directed to WholeTale with
a modal dialog overlayed (see image below). 

.. image:: modal_final.png
    :alt: WholeTale's Landing Page

This modal will also be show up if the user clicks the Launch Tale button on DataONE
while already logged in.

The modal was designed as an Ember Component, which means it can easily be integrated
into other dialogs or made into a separate page.

Although the tale names are optional, when the modal pops open the user's cursor is
initially placed in the box. Below, they can select which image they would like to use to run their tale.
This content is dynamic, and lists all of the images that the user has access to.

The dataset input box is automatically filled out with the package url from DataONE. Once
the user is content with the name and image, they can click the 'Register' button.
Once clicked, the file list is populated with the contents of the data package. One
key component of this is the indicator circle in the last column. As the package is
registered, the circles turn green. Registration currently takes place on a package-by-package
basis, which results in the UI updating on every complete package. 

When registration completes, the tale is created and the user is redirected to the 
tale view page, completing the data ingestion/creation process

Extensions:

#. Let the user pick which files they would like in the package. This would require 
implementing registration file-by-file, which would allow for a more fine grained update
system.

