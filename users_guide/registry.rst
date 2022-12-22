.. _registry:

Container Image Registry
========================

.. note::
   
   This is a non-archival registry. We are currently working on a way to 
   support depositing images for archival storage.

Containerization is central to the Whole Tale strategy for improving the
long-term runnability and reproduciblity of published tales. Prior to v1.2, the
container registry was used only as an internal cache. As of v1.2, we are
making images associated with tales available publicly via 
``images.wholetale.org``.

To access the image associated with your tale, inspect the ``run-local.sh``
after :ref:`export <export_run>`.
