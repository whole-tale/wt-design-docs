System Architecture
===================

The following diagram illustrates the current `Whole Tale deployment <https://github.com/whole-tale/terraform_deployment>`_ in Docker Swarm via Terraform.

The basics:

  * Terraform is used to provision an N-node cluster in OpenStack and initialize Docker Swarm
  * Core Whole Tale services are deployed via Swarm

.. image:: https://docs.google.com/drawings/d/e/2PACX-1vQHAQEmaeaiUz-X_qCQ8CUmLXI8bUoB2EDDb_gYKi9X2_9my4nc-zZwZzjB_s-zySF-k_q9fWHAvA6g/pub?w=1440&h=1080 
    :alt: WholeTale Terraform Diagram

(Source: `Whole Tale Google Drive <https://docs.google.com/drawings/d/13oqRpgFyXtoKIAxxIBlvrYOB2ULfCCM0PU3DvVk_gqU/edit>`_)
