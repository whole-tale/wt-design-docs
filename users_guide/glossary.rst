.. glossary:

Glossary
=========

We adopt the following terminology: 

Transparency
     The reporting of materials and methods that provides enough information for others to independently assess and/or reproduce findings (adapted from \cite{antin_faseb_2016}).

Reproducibility
    Obtaining consistent results using the same input data, computational steps, methods, code, and conditions of analysis \cite{national_academies_of_sciences_engineering_and_medicine_reproducibility_2019}. Synonymous with \emph{computational reproducibility} and  \emph{repeatability}. % in the modeling sciences.

Replicability: 
    Obtaining consistent results across studies aimed at answering the same scientific question, each of which has obtained its own data \cite{national_academies_of_sciences_engineering_and_medicine_reproducibility_2019}. In modeling sciences, replication ``\emph{comprises reimplementation of an existing model and the replication of results}'' \cite{thiele_replicating_2015}.

Reusability:
    The use of existing software or software knowledge to construct new software. 

(Computational) Artifacts
     Code, data, methods, documentation, and relevant details of the compute environment required to ensure model transparency, reproducibility, and reusability, along with input data and output data products associated with recorded runs of the model and analyses of those runs.

(Computational) Provenance:
     Derivation history of a computational workflow product, represented, e.g.,  as a directed acyclic graph of processing steps (e.g., program executions) and data artifacts (e.g., files).

Recorded Run:
     A WT feature: a version of artifacts are captured during execution in a containerized environment, without author involvement.  Technical details about the \emph{provenance} of results is recorded.

Tale:
     A standards-based reproduction package created by the WT  platform described in \cite{chard_application_2019} or the proposed WT+TRIMS toolkit. Tales are transparent, executable \emph{research objects} that contain the code, data, documentation,  computational workflow, and associated image required to assess or reproduce results.
\end{description}
