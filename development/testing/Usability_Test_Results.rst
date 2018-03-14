Usability Test Results
===========================

As part of the effort to gain insight into the usability of the Whole Tale dashboard, members of the team developed a series of common tasks that users may perform. In addition, questions were developed for each task. After, members of the development team performed said actions and answered the questions. This document is the synthesis of the members' responses.

The usability tests can be found at

``https://hackmd.io/d-m0LsVXSh2EpzhcRJMCUA``

Task 1: Launching the LIGO Tale
-------------------------------

Broad Goal: Find a tale (a combination of environment and data), launch it, use it (briefly) to its desired end, and then terminate it.

Questions:

1. What is a tale?

    There was common agreement that a tale is a container/package that has at least someone's code and data inside.
  
2. When you ran the LIGO tale, what did it do?

    There was a bug that prevented some users from launching the tale. Users that did not experience the error was able to 	successfully launch the tale. The notebook file had to be manually opened, and then it was possible to generate the 	      output data plots

3. What was clear/unclear about this process?

		There was a lack of direction of what to do/where to go/how to run the experiment when the user entered jupyter notebook. In particular, the file structure was confusing.

Common Issues/Questions:
^^^^^^^^^^^^^^^^^^^^^^^^
1. When launching a tale, it was confusing to see both "View" and "Launch" on the tale widget.

2. After clicking "Launch", it was expected that the tale launched and opened, but instead, if the user missed the window to click the "Go to Tale" button, they had to visit the Status page where they had to interact with the UI again to view it.

3. There was a lack of understanding what to do when the tale is launched (ie why am I not seeing the tale after clicking Launch; where do I go to see the tale?)

Suggestions:
^^^^^^^^^^^^

1. Automatically open the notebook file when the user enters the tale.

2. When the user clicks 'Launch", open the tale in a new tab when it is ready.

Misc Notes:
^^^^^^^^^^^
1. The notebooks was in a data directory-why?

2. The 'view' link was expected to bring the user to a summary of the tale, not the experiment.

3. 'Data' and 'Home' directories are not native to Jupyter environments, and it may be misleading/confusing for a user that is familiar with the Jupyter environment


Task 2: Registering data from Globus
------------------------------------

Broad Goal: Register a dataset that is accessible by a URL, and then put that data into its own folder.

Questions:
^^^^^^^^^^

1. What is the difference between the home, data, and workspace folders?

  There was agreement between two respondents that raw data would appear in the data folder.

  Two respondents thought that personal data would be kept in home

  The workspace folder had the greatest amount of uncertainty: each respondent failed to clearly identify its purpose.

2. If you want to share a registered dataset, which folder would you put it in?

  Two respondents felt that the data would go into the data folder, but the workspace folder was also a considered option.

Common Issues/Questions:
^^^^^^^^^^^^^^^^^^^^^^^^
1. There was common theme about how the workspace folder should be utilized, possibly stemming from a lack of understanding of what its use was. 


Task 3: Creating a Tale
-----------------------

Broad Goal: Given a registered dataset, create a new “Tale” that utilizes it and launch that Tale.

Questions:
^^^^^^^^^^

1. Were you easily able to find the registered data set?

  One user experienced an error when attempting to access their data; two of the respondents were able to locate the data.

2. Inside the tale, were you able to identify your files of interest?

  Two of the respondents ran into a bug when launching the tale and were unable to complete the task. Another user was able to find the data in the Data folder.

Misc Notes:
^^^^^^^^^^^

1. Two respondents mentioned that the login screen may be confusing to new users.

2. One respondent was confused about the kinematic folder in the tale.

3. The data folder was read only, even though the tale was un-published which prevented the user from organizing the tale. 


Task 4: Importing Data from DataONE
-----------------------------------

Broad Goal: Register a dataset that is accessible from DataONE, and use it in a Tale.

Questions:
^^^^^^^^^^

1. Where did you find the data you registered in Whole Tale?

	The data was found in the Data folder (in the dashboard).

2. What is the difference between Catalog and My Data?

  One user thought that it was the difference between cached data and what had been registered. Two other respondents agreed that the Catalog has data that others had registered, while My Data has data specific to the user.

3. Did you find the data in your running tale in RStudio?

  Two of the users ran into a bug when launching the tale, the other ran into a bug when attempting to access /work/data.

4. What was clear/unclear about the process?

  It may be confusing for a user dealing/using dois, reference URIs, data ids, etc.
  
  There was a lack of indication of where the data was being put in the dashboard. 

Task 5: Importing Data from Globus
----------------------------------

Broad Goal: Register a dataset that is accessible from Globus, and use it in a Tale.

Questions:
^^^^^^^^^^

1. Which folder were you expecting the data to be registered in?

  There was a split between users thinking that the data would go into the workspace and data folders. During registration, a notification came up that stated the data was being copied to the workspace.

2. Did the file names and extensions in the tale match the ones in Globus?

  The filenames did not match those in Globus, and were extensionless. 

3. If there were any hurdles for plotting the data, what were they?

  The filenames not matching what was in Globus was an issue. There was also only one file that made it over from Globus.

  During registration, only a single file was registered in Whole Tale, despite there being more in the Globus package.
  
  
Task 6: Import Recipe and Build Image
-------------------------------------

Broad Goal: Register a Git Repo containing a recipe and build an WholeTale Image

Questions:
^^^^^^^^^^
1. Was the process self explanatory. How could the UI design or hints/documentation be improved to help a user walk through without seeking help?

  In general, each user had issues determining what was asked at each step, and what each step represented (for example, what is a recipe?).

  There was a consensus that error reporting can be improved when recipe/image creation fails.

2. Are the current steps an efficient method for representing the breadth of functionality you might want to achieve from WholeTale frontends?

  There was agreement that the current system may be too complicated for normal users. "The notion of "recipes" and "frontends" as an abstraction over Docker images makes it even harder to understand what I'm doing."

3. Can you think of use cases for using the second step (Create Image) without the first i.e. to provide multiple images for the same recipe?

  None of the users could think of any use cases.

3. Any other feedback about existing process? Please provide input into streamlining the process, if relevant

  The was consensus that it wasn't clear which fields were required, and that needing to specify the commit can be automated.  It was also suggested that some fields, like port and volume, may be able taken from the dockerfile. It may be a good idea to separate the more advanced fields from the bare minimum ones.
