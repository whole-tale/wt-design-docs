
.. _developer-guide:

Developer Guide
===============

Whole Tale is an open-source software project. External contributions are
encouraged.  Please feel free to ask questions or suggest changes to the 
this Developer Guide.


Issue management
----------------

The core team uses Github for issue management. General issues or where the
specific component is unknown are filed in
<https://github.com/whole-tale/whole-tale/issues.

During weekly development calls, issues are prioritized, clarified, and assigned
to release milestones.

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

Every PR must include either a unit test or manual test scenario. PRs will not be
be merged unless tests run successfully.

Manual test cases will be added to the `test plan template
<https://github.com/whole-tale/wt-design-docs/tree/master/ISSUE_TEMPLATE>`_.

For the Whole Tale API, we leverage Girder's `automated testing framework
<https://girder.readthedocs.io/en/stable/plugin-development.html#automated-testing-for-plugins>`_.

Tests are run via CircleCI.  Tests will fail with < 82% coverage.

Repositories and components
---------------------------

The project has the following repositories:

  - `whole-tale <https://github.com/whole-tale/whole-tale>`_ - Top-level repository for working groups and general issue tracker
  - `wt-design-docs <https://github.com/whole-tale/wt-design-docs>`_ - Source for `wholetale.readthedocs.io <http://wholetale.readthedocs.io>`_ (this repository)
  - `deploy-dev <https://github.com/whole-tale/deploy-dev>`_ - Scripts to deploy a local development environment
  - `terraform_deployment <https://github.com/whole-tale/terraform_deployment>`_ - Terraform process to deploy full-scale system

Core services:
  - `ngx-dashboard <https://github.com/whole-tale/ngx-dashboard>`_ - Whole Tale dashboard
  - `girder_wholetale <https://github.com/whole-tale/girder_wholetale>`_ - Girder plugin providing basic Whole Tale functionality.
  - `gwvolman <https://github.com/whole-tale/gwvolman>`_ - Girder Worker plugin responsible for spawning Instances and mounting *GirderFS* on compute nodes
  - `girderfs <https://github.com/whole-tale/girderfs>`_ - FUSE filesystem for
    mounting Girder resources.
  - `girder_wt_data_manager <https://github.com/whole-tale/girder_wt_data_manager>`_ - 
    Girder plugin for external data management.
  - `virtual_resources <https://github.com/whole-tale/virtual_resources>`_ -
    Girder plugin for file-system backed resources.
  - `wt_home_dir <https://github.com/whole-tale/wt_home_dir>`_ - Girder plugin
    for WebDav support
  - `wt_versioning <https://github.com/whole-tale/wt_versioning>`_ - Girder
    plugin for versions and recorded run

Setting up for local development
--------------------------------

The entire WT platform stack can be deployed locally or on a VM using 
the `development deployment process <https://github.com/whole-tale/deploy-dev>`_.

The WT platform stack can be deployed on an Open-Stack cluster using the
`Terraform deployment process <https://github.com/whole-tale/terraform_deployment>`_.

Integrating with the 'Analyze in Whole Tale' feature
----------------------------------------------------

To utilize Whole Tale's ability to create a Tale based on data on your repository, follow the steps outline below.
The general idea behind this feature is that the backend endpoint for this feature will never change, but the user interface may.
To get around this, third parties should send their users to the `/integration` endpoint, which then re-directs them
to the appropriate frontend URL.

1. Clone the girder_wholetale repository
2. Create a folder in `server/lib` with the name of your service as the folder name
3. Add an `integration.py` file in the folder
4. Copy and paste the contents of the DataONE or Dataverse `integration.py` into yours
5. Change the content in `autoDescribeRoute` to match your service, including any query parameters
6. Change the name of the `__DataImport` method to match the name of your service
7. Modify any of the query parameters in the method if you've changed them
8. Navigate to `server/rest/integration.py`
9. Import your method in your `integration.py` (see how it's done for current integrators
10. Add `self.route('GET', ('YOUR_SERVICE_NAME',), YOUR_METHOD_NAME)` to the `__init__`
