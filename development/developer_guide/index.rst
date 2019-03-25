
.. _developer-guide:

Developer Guide
===============

Whole Tale is an NSF-funded collaboration but also structured as an open source project.
External contributions are encouraged.  Whether you are part of the core team 
or a new contributor, we're very happy to have your help with the project. 
Please feel free to ask questions or suggest changes to the this Developer Guide.

Repositories and components
---------------------------

The project has the following repositories:

  - `whole-tale <https://github.com/whole-tale/whole-tale>`_ - Top-level repository for working groups and general issue tracker
  - `wt-design-docs <https://github.com/whole-tale/wt-design-docs>`_ - Source for `wholetale.readthedocs.io <http://wholetale.readthedocs.io>`_ (this repository)
  - `deploy-dev <https://github.com/whole-tale/deploy-dev>`_ - Scripts to deploy a local development environment
  - `terraform_deployment <https://github.com/whole-tale/terraform_deployment>`_ - Terraform process to deploy full-scale system

Core services:
  - `dashboard <https://github.com/whole-tale/dashboard>`_ - Whole Tale dashboard
  - `girder_wholetale <https://github.com/whole-tale/girder_wholetale>`_ - Girder plugin providing basic Whole Tale functionality.
  - `girder_wt_data_manager <https://github.com/whole-tale/girder_wt_data_manager>`_ - Girder plugin for external data management.
  - `wt_sils <https://github.com/whole-tale/wt_sils>`_ - Girder plugin providing Smart Image Lookup Service.
  - `gwvolman <https://github.com/whole-tale/gwvolman>`_ - Girder Worker plugin responsible for spawning Instances and mounting *GirderFS* on compute nodes

Images:
  - `xpra-base <https://github.com/whole-tale/xpra-base>`_ - WT Image for Xpra base
  - `jupyter-yt <https://github.com/whole-tale/jupyter-yt>`_ - Base Jupyter image with yt preinstalled
  - `rstudio-base <https://github.com/whole-tale/rstudio-base>`_ - Base RStudio image

Setting up for local development
--------------------------------

The entire WT platform stack can be deployed locally or on a VM using 
the `development deployment process <https://github.com/whole-tale/deploy-dev>`_.

It is also possible to deploy a multi-node installation on OpenStack using the
`Terraform deployment process <https://github.com/whole-tale/terraform_deployment>`_.

Issue management
----------------

The core team uses `ZenHub <https://app.zenhub.com/workspace/o/whole-tale/dashboard>`_
for issue management across the collaboration. 


Defining "done"
---------------

What does it mean for an issue or task to be "done"?

* Code complete
* Unit tests complete and passing
* Manual tests defined and passing
* Documentation updated
* PR reviewed and merged

Code management
---------------

Best practices:
* Never commit code to `master`. Always use a fork or feature branch and create a Pull Request for your work.
* Name your branch for the purpose of the change. For example `feat-add-foo`.
* Always include clear commit messages
* Organize each commit to represent one logical set of changes.  For example, separate out code formatting as one commit and functional changes as another.
* Reference individual issues in commits
* Prefer rebasing over merging from master
* Learn to use rebase to squash commits -- organize commits for ease of review.
* Never merge your own PR if not approved by at least one person. If reviews aren't happening in a timely matter, escalate them to the team.
* Merging a PR means that the work has been tested, reviewed, and documented.

Testing
------------
Every PR should come with either a unit test or a manual test scenario.  PRs cannot be merged unless tests run successfully.
Note that Girder plugins fail if < 82% coverage.

