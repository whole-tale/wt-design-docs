# WT Design, Planning and Dev Documentation

## Discussion venues

- Slack (https://wholetale.slack.com/)
- Dev mailing list (wholetale-dev [at] googlegroups.com)
- Wiki here
- Markdown documents in this repository

## GitHub Organization structure

Meta repositories:
  - [whole-tale](https://github.com/whole-tale/whole-tale) - user facing repository used mostly as a general bug tracker
  - [wt-design-docs](https://github.com/whole-tale/wt-design-docs) - this repository
  - [girder_deploy](https://github.com/whole-tale/girder_deploy]) - Collection of scripts used for deploying Girder
    (obsoleted by terraform_deployment??)
  - [terraform_deployment](https://github.com/whole-tale/terraform_deployment) - Terraform deployment setup for WT
    production system.

Core services:
  - [dashboard](https://github.com/whole-tale/dashboard) - Frontend UI to Whole Tale.
  - [girder_wholetale](https://github.com/whole-tale/girder_wholetale) - Girder plugin providing basic Whole Tale 
    functionality.
  - [girder_wt_data_manager](https://github.com/whole-tale/girder_wt_data_manager) - Girder plugin for external data
    management.
  - [wt_sils](https://github.com/whole-tale/wt_sils) - Girder plugin providing Smart Image Lookup Service.
  - [gwvolman](https://github.com/whole-tale/gwvolman) - Girder Worker plugin responsible for spawning Instances and
    mounting *GirderFS* on compute nodes.

Images:

  - [xpra-base](https://github.com/whole-tale/xpra-base) - WT Image for Xpra base
  - [jupyter-yt](https://github.com/whole-tale/jupyter-yt) - Base Jupyter image with yt preinstalled
