.. _releasing:

Release Process
================

Release process includes the following:
* Create release milestones in Github for the following repositories
 - `dashboard <https://github.com/whole-tale/dashboard>`_
 - `terraform_deployment <https://github.com/whole-tale/terraform_deployment>`_
 - `wt-design-docs <https://github.com/whole-tale/wt-design-docs>`_
 - `wt_home_dirs <https://github.com/whole-tale/wt_home_dirs>`_
 - `girder_wholetale <https://github.com/whole-tale/girder_wholetale>`_
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
