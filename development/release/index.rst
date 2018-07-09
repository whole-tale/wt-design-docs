.. _releasing:

Release Process
===============

Release process includes the following:

* Create release milestones in Github for the following repositories

  - `dashboard <https://github.com/whole-tale/dashboard>`_
  - `girder_wt_data_manager <https://github.com/whole-tale/girder_wt_data_manager>`_
  - `girder_wholetale <https://github.com/whole-tale/girder_wholetale>`_
  - `girderfs <https://github.com/whole-tale/girderfs>`_
  - `gwvolman <https://github.com/whole-tale/gwvolman>`_
  - `terraform_deployment <https://github.com/whole-tale/terraform_deployment>`_
  - `wt-design-docs <https://github.com/whole-tale/wt-design-docs>`_
  - `wt_home_dirs <https://github.com/whole-tale/wt_home_dirs>`_
  - `wt_sils <https://github.com/whole-tale/wt_sils>`_

* Team identifies target features for release, creates issues, and assigns milestones to associated issues
* Features are implemented, tested, and documentation updated either on ``master`` or a designated feature branch
* Changes are merged to ``stable`` branch
* Stable branch is updated with any version changes, if applicable
* Release candidate is created by tagging the ``stable`` branch (v1.0-rc1)
* Release candidate is tested
* Release notes are created and added to documentation
* Final release is created by tagging the ``stable`` branch  (v1.0)
* Install release to production instance
* Announce release to community


Detailed release process
------------------------

For all repos, merge or cherry-pick commits from ``master`` to ``stable``, bump versions, and create release tag. 

Special cases:

* wt_sils, girder_wt_data_manager, wt_home_dirs

  - Bump version in plugin.json (master/stable)

* girder_wholetale

  - Bump version in plugin.yml (master/stable)

* gwvolman

  - Bump version in setup.py (master/stable)

* girder

  - Clone repo with submodules
  - In stable branch, checkout version tag for each plugin, commit  

* wt-design-docs:

  - Update release notes

Wait for autobuilds of Docker images, then deploy to staging.
