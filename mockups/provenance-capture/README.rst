Provenance Capture
==================

How will the WT user, in combination with the WT Dashboard, capture Tale Provenance and how will we display that to scientists?

Project deliverables
--------------------

- Include provenance in Tales
- Build Python package for authoring PROV

Include provenance in Tales
---------------------------

Possible sources of provenance include

- Super high-level PROV:

::

  Tale :used Dataset
  Tale :generated Dataset

This is as an alternative to the type of Execution-oriented PROV information we usually try to store with PROV/PROVONE. I think this has a lot of value. If the archived Tale uses a DataONE dataset, we would likely not archive that data because it's already archived. We'd either include it in the package via the ORE or somehow link to it with PROV statements.


Questions:

  - Can we create this in PROVONE or do we need another way of doing it?

Pros:

  - Easier for the Tale creator to author ("Which Dataset did you use?)
  - Easier for the Tale user to understand ("Which Dataset did this use?)

Cons:

  - Doesn't solve the problem of a person reading through a Tale and wanting to know how all the files connect without reading the source code

- The WT recipe itself is sort of a prospective provenance trace

  This might not even be possible with just the information in the Recipe. To make a useful PROV trace, we'd probably need to have an Execution which needs at least one Entity (either used or generated) and the Recipe alone doesn't really have this information right now.

  Pros:

  - We already have the Recipe, so this doesn't require the user to do anything extra

  Cons:

  - This is a super minimal amount of PROV and maybe not even possible given how little PROV-relevant information is in the Recipe

- The running container could be inspected capture some minimal provenance (like files written out to disk)

  Pros: 
  
  - Automated

  Cons:
  - Probably not useful due to low-level nature

- We could encourage/assist/mandate the user use some of the provenance tools already available in Jupyter/RStudio

  This could be as simple as making sure to include PROV packages in the Docker image the Frontend is based against automatically.

  Pros:

  - Easy to do

  Cons:

  - May be too confusing/hard to make user author their PROV in a scripted/cell environment. Something graphical might be way easier.

- The user could manually write out provenance information in their frontend and we could automatically capture it. This would have to be via convention which is always trickier for new users to pick up.
- We could somehow re-use the MetacatUI PROV editor

  For example, the Dashboard could send the user over to an Edit screen in a hosted copy of MetacatUI with minimal information already filled in and be asked to Edit (optional) and then Save again.

  Pros:

  - Not reinventing the wheel
  - Integrates well with one of the possible solutions for Tale Saving
  - We get great PROV information from the user

  Cons:

  - Might be hard to integrate (but I think it's not)

- We could build a new PROV Editor into the Dashboard so the user's flow would look like...

::

  ... -> Frontend -> Archive Tale [ Author Metadata -> Describe PROV ] -> Done

  Pros:

  - Tightly integrated

  Cons:

  - Requires creating a new PROV Editor (and one that may only benefit WT)

Build Python package for authoring PROV
---------------------------------------

Problem: If a user is in a Jupyter Python environment, they have no easy way to author PROV information, either via a trace or retrospective assertion.

Questions:

- Does it implement the RunManager API?
- Is this just recordr-in-Python?

Other notes
-----------

TODO: Integrate these above ^

- Could use recordr in RStudio and capture that PROV
- TODO: Check out https://github.com/gems-uff/noworkflow
- Lots of intrest in notebook environments, and capturing prov in Jupyter
  - Esp w/ YesWorkflow
- TODO: See NoWorkflow too
- TODO: See tickets from prov-a-thon
