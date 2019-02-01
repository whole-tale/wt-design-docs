
Use Case 01 - Track Executionss
===================================

Researchers can track code executions inside tales
-----------------------------------------------

Goal
----
Researchers can track code executions inside tales

.. sidebar:: Scenario
    
    "As a data analyst using R or Jupyter, I want to keep track of my data input files, data output files, and scripts so I can review and compare my runs and the data products they produced."

Summary
-------
The analyst executes a script (or program, function, etc., as appropriate for their computing environment) for which provenance information will be collected. 
The script is then executed and the input datasets, derived datasets and execution environment attributes that are to be tracked are automatically determined 
and the provenance relationships between these objects is persisted in the tale. Data products such as analysis output, graphical output, etc., that are created by an execution are cached in the tale.

Actors
------
* Investigator
* Client Software

Preconditions
-------------
* The user is working in an instrumented container like Rstudio or Jupyter
  
Triggers
--------
* Analyst invokes a script or other executable

Post Conditions
---------------
* The analyst has created one or more derived datasets.
* The tale has stored provenance information for the newly created derived datasets.
