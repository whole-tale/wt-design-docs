WholeTale & DataONE Integration
===============================

Busy Person Summary
-------------------

 - We want to provide an easy way from within `search.dataone.org <https://search.dataone.org>`_ to register datasets into WholeTale that is more advanced than the current system implemented in the Dashboard
 - This can be done by placing "Add to WholeTale" buttons on DataONE dataset landing pages and/or by providing a "Shopping Cart"-like interface for users to create a collection of datasets to register with WholeTale
 - Until DataONE and WholeTale auth are integrated, the easiest way to do this is by redirecting the user from a dataset landing page on `DataONE Search <https://search.dataone.org>`_ to the WholeTale Dashboard with the dataset(s) to be registered into Wholetale passed in with URL query parameters
 - This will require changes in the WholeTale **Dashboard** to recognize the redirect request and query parameters will need to be preserved as the user goes from DataONE -> Globus Auth -> WholeTale Dashboard

Background
----------

WholeTale is all about analyzing data so making data available to a running WholeTale front-end should be easy for the user.
There are currently two approaches to get data into WholeTale:

1. From within a running front-end (e.g. RStudio Server), by retrieving data over the Internet with code running in the front-end
2. Register a dataset before launching the front-end (better)

While approach (1) works and fits well within the reproducibility goals of WholeTale, (2) is arguably more formal and, unlike (1), can make use of the WholeTale backend infrastructure to make the registered dataset available to the running front-end which is more efficient.

To register data from DataONE into WholeTale, we have implemented a simplified DataONE registration interface that requires the user to specify a DataONE identifer which is just about the most difficult way we can come up with for a user to register DataONE data with WholeTale:

.. image:: images/wt-add-data.png
    :alt: WholeTale's Add Data feature

This interface works for internal testing and development but would be relatively obscure to a real user.
Because DataONE already has a feature-rich `search tool <https://search.dataone.org>`_ (DataONE Search), it makes a lot of sense to also allow registration of data from within DataONE Search.

DataONE Search is a client-side JavaScript web application that uses an MVC pattern and is implemented with Backbone.js.
There are two views where it makes sense to add WholeTale & DataONE integration:

 1. The **Catalog**
 2. Each dataset's **Landing Page**

While searching the **Catalog**, a list of datasets matching the user's set of filters is shown:

.. image:: images/dataone_search.png
    :alt: DataONE Search

and when a user clicks on one of those datasets, a **Landing Page** is shown:

.. image:: images/dataone_landing_page.png
    :alt: DataONE Landing Page

Proposal
--------

I propose DataONE Search provides a way for users to register DataONE data into WholeTale in both the **Catalog** and **Landing Page** views.

To get data into WholeTale, WholeTale only needs to know the identifier because WholeTale already supports the DataONE API.
A simple button "Add to WholeTale" on each **Landing Page** would be sufficient.
However, if a user wants to mix and match a number of datasets which may be contained across numerous, different searches or search pages, they need a way to flag individual datasets for inclusion in their created Tale.
Therefore, some sort of "Shopping Cart"-like interface seems reasonable where a user can prepare a list of datasets they want to add to their Tale and, after a number of datasets have been added to this list, they can add part of or the entire list to a new Tale.

I propose we integrate DataONE and WholeTale in a two-phase manner.

  - **First phase:** Just add simple buttons to both views for adding single datasets
  - **Second phase:** Implement a shopping cart of sorts for adding multiple datasets

Mock-ups
--------

Landing Page Integration
^^^^^^^^^^^^^^^^^^^^^^^^

With the buttons, I want to get the look and feel right, especially:

 - Verbage "Run", "Analyze", etc
 - Give enough explanation to the user as to what it is they're about to do (i.e. what is WholeTale?)

.. image:: images/dataone_landing_page_mockup.png
    :alt: shopping cart

Catalog View Integration (Shopping cart metaphor)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: images/shopping-cart.png
    :alt: shopping cart

Implementation details
----------------------

How this is implemented makes a huge difference in terms of the difficulty of implementation.
The current API already already has a method for registering a dataset, ``POST /dataset/register``, which requires a payload like:

.. code-block::json
  {
      "dataId": "urn:uuid:42969280-e11c-41a9-92dc-33964bf785c8",
      "doi": "10.5063/F1Z899CZ",
      "name": "Data from a dynamically downscaled projection of past and future microclimates covering North America from 1980-1999 and 2080-2099",
      "repository": "DataONE",
      "size": 178679
  }

A button could, for example, trigger an async request to this endpoint with an appropriate payload and the specified dataset would then be registered in WholeTale.
I think this is (or should be) an authenticated route and, at present, DataONE authentication knows nothing about WholeTale authentication (*Note: this may change*).
Therefore, this existing route would is not workable for now.

A way around this is to simply redirect the user over to WholeTale to a view on the **Dashboard** uses prepopulated query parameters to tell WholeTale which dataset(s) to register, e.g.,

``https://search.dataone.org/#view/doi:10.18739/A2JB90 -> https://dashboard.wholetale.org/register/dataone/?dataset=doi%3A10.18739%2FA2JB90``

**Upsides:**

  - No need (*for now*) to integrate DataONE and WholeTale authentication
  - User automatically appears in WholeTale, ready to start using the Dashboard

**Downsides:**

  - Various clients have limitations on the length or URLs so the user would only be able to register a finite number of datasets at a time
  - Requires Globus Auth and WholeTale Dashboard to preserve URL query parameters

User flow
---------

What happens when the user clicks the "Launch in WholeTale" button on DataONE?
There is a choice to be made here about the experience we give a user.
Choices range from:

  - Land the user on the Dashboard home page
  - Launch the user directly into their Frontend, completely bypassing the Dashboard

I think neither of these two extremes are what we want.
I propose we land the user on the Tale Creation page with the dataset they came from registered and already added to their Tale.

.. image:: images/user-flow_extended.png
    :alt: user flow, extended

For a first pass, this will suffice to provide an easy-to-use way to get DataONE data into WholeTale.
At a later date, we can discuss as a group if we want to streamline this process in order to get the user into their running Frontend (if we even want that).
