
Political Science 
=================

Introduction 
^^^^^^^^^^^^

Over the past 20 years, the political science community has increasingly pursued
transparency through encouraging or requiring authors to publish "replication
files" intended to make each step the research process as explicit as possible.
Beginning with the recommendations of King (1995) the research community and
publishers have adopted a series of guidelines (for example DA-RT, 2015)
culminating in the implementation of in-house and third-party certification
workflows by top journals (Christian et al, 2018).

The American Political Science Association's (ASPA) *A Guide to Professional
Ethics in Political Science* states that:

..
  Researchers have an ethical obligation to facilitate the evaluation of their
  evidence-based knowledge claims through data access, production transparency,
  and analytic transparency so that their work can be tested or replicated.
  (ASPA, p 9).

Top journals, including the American Journal of Political Science (AJPS) and the
American Political Science Review (APSR) require authors reporting empirical and
quantitative results to deposit data, software and code, and other information
needed to reproduce findings (ASPR, 2019). As discussed in detail below, AJPS is
the only journal to implement a third-party certification of replication
packages.

As highlighted by Dafoe (2014), the replication standard in political science is
in part motivated by a number of high-visibility controversies in the social
sciences.  He cites the example of an influential paper in economics that was
discovered three years later to have errors, arguing that the availability of
the replication file for the study would have at least accelerated the
identification of potential errors.

In January 2016, 27 political science journal editors signed the "Joint
Statement on Data Access and Research Transparency" (DA-RT, 2015) that includes
a number of requirements related to the APSA ethics guidelines for authors
centered around data citation, transparency of analytic methods (e.g., code),
and improving access to data and other research materials.


Example: American Journal of Political Science
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Christian et al (2018) describe an operationalization of the replication
standard implemented by the American Journal of Political Science (AJPS) in
collaboration with the Odum Institute for Research in the Social Sciences and
the Qualitative Data Repository (QDR). AJPS is one of the top-ranked political
science journals with an ISI ranking of 1/169 in 2017.  In 2012, AJPS adopted
guidelines for authors to deposit replication packages in Harvard's Dataverse.
According to Jacoby (2017), due to concerns about the quality of deposited
materials, AJPS implemented the third-party certification process starting in
2015.

Christian et al describe the basic workflow is as follows:

* The author submits a manuscript to AJPS for peer-review.  If accepted, the author is required to submit the replications materials to AJPS Dataverse.  
* Once the replication materials are available, the editor contacts Odum/QDR to begin the curation and verification process.  
* Data is reviewed per a data quality review framework. Statistical experts perform verification by executing the analysis code and comparing the output to tables and figures reported in the manuscript.  
* A "Verification Form" is returned to the editor including the results of the review process and any errors. The editor notifies authors to correct problems.
* Once the data review and verification process is complete, the editor issues the acceptance notification and the materials are published in Dataverse (including DOI). 
* The paper and replication package are linked via DOI.

The authors further note that only 10% of submissions pass review without the
need for revision and that, as of 2019, the process requires roughly 6 hours of
effort for a single manuscript.

In response to his presentation to the NAS Committee on Replication and
Reproducibility in the sciences, Jacoby (2017) notes that: 

* Odum archive staff handle both data curation and verification (statistical) 
* Errors are generally not serious (e.g., lack of documentation or tables that don't reproduce
  exactly).  
* Mean number of resubmissions is 1.82 
* The verification process is paid for by the Midwest Political Science Association 
* AJPS requires only the data used in analysis (i.e., not all of the data collected) 
* Anecdotally, he has had feedback that the resource is invaluable for methodology courses (See also Janz 2016)

In 2018, the Odum Institute was awarded a $500,000 grant from the Sloan
Foundation to improve and automate the verification process.

Jacoby (2017) notes that other political science journals have in-house
verification processes, typically relying on graduate students. In these cases,
it's likely that the focus is on re-runnability of the code without necessarily
comparing the reported results.  In response, an example was raised from the
field computer science where reproducibility reports are written by community
reviewers, notably Information Systems journal (Chirigati, 2016).

The AJPS provides a "Quantitative Data Verification" checklist for the
preparation of replication files that includes: 

* README file containing the names of all files with a brief description and any other important information
  regarding how to replicate the findings (i.e., the order files need to be run,
  etc.) 
* Includes a Codebook (.pdf format) with variable definitions for all variables in the analysis dataset(s) and value labels for categorical variables
* Includes clear information regarding the software version used to conduct analysis 
* Includes complete references for source datasets Includes the analysis dataset(s) in a file format readily accessible to the social science research community (i.e., text files, delimited files, Stata files, R files, SAS files, SPSS files, etc.) 
* Includes a unique case identifier variable linking each observation in the analysis dataset to the original data source 
* Includes software command file(s) for reconstructing the analysis dataset from the original data source and/or extracting and merging multiple original source datasets, including information on source dataset(s) version and access date(s)
* Includes commands needed to reproduce all tables, figures, and other analytical results presented in the article and supplementary materials 
* Includes commands/instructions for installing macros or packages 
* Includes comment statements used to explain the analysis steps and distinguish commands for tables, figures, and other outputs Includes seed values for any commands that generate random numbers (e.g., Monte Carlo simulations, bootstrap resampling, jittering points in graphical displays, etc.) 
* Includes any additional software tools needed for replication (e.g., Stata .ado files and R packages)

Examples
^^^^^^^^

Harvard's Dataverse includes hundreds of Political Science replication
packages, including those verified through the Odum/QDR workflow.

References
^^^^^^^^^^

AJPS replication policy https://ajps.org/ajps-replication-policy/

AJPS Quantitative Data Verification Checklist. 2016.
https://ajpsblogging.files.wordpress.com/2019/01/ajps-quant-data-checklist-ver-1-2.pdf

AJPS Guidelines for Preparing Replication Files,
https://ajpsblogging.files.wordpress.com/2018/05/ajps_replication-guidelines-2-1.pdf

APSA Guide to Professional Ethics, Rights and Freedoms
https://www.apsanet.org/portals/54/Files/Publications/APSAEthicsGuide2012.pdf

ASPR. (2019). Submission Guidelines.
https://www.apsanet.org/APSR-Submission-Guidelines. Accessed February 8, 2019.

Barba, Lorena A. (2018). Terminologies for Reproducibly Science.
https://arxiv.org/pdf/1802.03311.pdf

Christian et al. Operationalizing the Replication Standard: A Case Study of the
Data Curation and Verification Workflow for Scholarly Journals
https://osf.io/preprints/socarxiv/cfdba/

Core2 award https://odum.unc.edu/2018/07/alfred-p-sloan-foundation-grant/

Dafoe, 2014. Science Deserves Better.

DA-RT. (2015). Data Access and Research Transparency (DA-RT): A Joint Statement
by Political Science Journal Editors. https://doi.org/10.1177/0010414015594717

Jacoby, William. 2017. Presentation to National Academy of Sciences Committee on
Replication and Reproducibility in the sciences. https://vimeo.com/252434555

Janz, 2016. Bringing the Gold Standard into the Classroom: Replication in
University Teaching. https://doi.org/10.1111/insp.12104

Fernando Chirigati, Rebecca Capone, Rémi Rampin, Juliana Freire, Dennis Shasha.
(2016). A collaborative approach to computational reproducibility. Information
Systems, Volume 59, 2016, https://doi.org/10.1016/j.is.2016.03.002.

TOP guidelines (https://cos.io/our-services/top-guidelines/)
