.. _github:

Working with Git
================

Whole Tale supports three different ways of working with Git repositories.

* Using Git command-line tools from the interactive environment
* Creating a new Tale from an existing Git repository
* Connecting an existing Tale to a Git repository

In all cases, you will likely need to work with either Git command line tools
or plugins in your selected interactive environment.

Commandline 
~~~~~~~~~~~

For experienced Git users, the simplest way to connect your Tale to a Github 
repository is via the command line or client tools in your selected interactive
environment. After selecting **Run Tale** and accessing your interactive session,
open a console or terminal:

.. code-block:: bash 

   git init
   git remote add origin https://github.com/<your_org>/<your_repo>.git
   git pull origin master  # or main

This will initialize your Tale workspace as a Git repository and associate 
it with the specified remote. From here, you can synchronize any code changes
with your remote repository using standard tools.


Create or Connect to Git Repository
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For users who are unfamiliar with Git commandline tools, you can achieve the above 
by simply creating a new tale or connecting an existing tale to a public
Git repository. 

