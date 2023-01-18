
Economics 
=========

Introduction 
^^^^^^^^^^^^

According to Levenstein (2017, 2018), the field of economics has a long history
of interest in reproducibility and replicability starting in the 1980s. Early
studies (e.g., Dewald, 1986) found low replication rates in published research.
The field also has a long history of data sharing, with policies starting as
early as 2003.  By 2015, 27 journals required data sharing. Ten journals
encourage replication studies. (SOURCE)

In 2018, the American Economics Association (AEA) appointed a data editor in
part to improve access to and reproducibility of published researcher. Economics
faces additional challenges due to the use of commercial data, requiring waivers
because of both IP and confidentiality concerns. While macroeconomic research
tends to use public data disseminated by government agencies and central banks,
microeconomics research often relies on private/confidential administrative
data. Data packages used to be published as supplemental
information on via the journal web platform.  In 2019, all historical packages were migrated to 
the openICPSR platform, and future packages were preserved there as well (Vilhuber, 2020).
AEA currently has over 4000 replication packages, all of
which  contain software/code, many of which also contain released data.

Example: American Economics Association
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Kingi et al (2018) report the results of an effort to reproduce a subset of
studies published by the AEA using only the information provided by the authors
during submission.  The AEA is interested in performing after-the-fact
verification of published code and data and is exploring the adoption of
workflows similar to those used by the American Journal of Political Science
(AJPS). They have over 300 examples of validated data/code packages.

A major challenge for the AEA is the widespread use of commercial statistical
software.  Over 70% of submitted packages require Stata or Matlab. SAS is widely
used by the Census Bureau.


User Stories
^^^^^^^^^^^^
Based on the above cases, we see the following user stories.

* Ex-post validation of AEA deposits: The AEA data editor (or graduate student) should be able to perform after-the-fact validation of published data/code packages by importing them into Whole Tale.
* Stata support: An AEA researcher should be able to publish a Tale based on the Stata environment. A reviewer or user should be able to re-run the Tale in Stata.
* Matlab support: An AEA researcher should be able to publish a Tale based on the Matlab environment. A reviewer or user should be able to re-run the Tale in Matlab.
* SAS support: An AEA researcher should be able to publish a Tale based on the SAS environment. A reviewer or user should be able to re-run the Tale in SAS.
* ICPSR integration: Whole Tale should support registering data from and publishing to ICPSR.
* Private WT instance: WT platform can be deployed locally with more restrictive access.
* ICPSR/Dataverse: Dataverse holds "replication datasets" created from ICPSR data that don't link to the original data at ICPSR.  The articles may not even cite the data at ICPSR, so the original authors of the data don't get any credit.  The authors of the article should get credit for their code, but not for the data.
* Multiple applications: AEA data packages often contain a mixture of code -- R and Stata or R and Matlab, etc. that require the ability to run not just R or Stata, but both in the same image.
* Ability to choose base software version: Some Tales will require newer/older versions of R
* Metadata/classification Published packages should support domain and journal metadata formats (i.e., JEL https://www.aeaweb.org/econlit/jelCodes.php)


References
^^^^^^^^^^

AEA. (2019). Usage Data. https://github.com/AEADataEditor/econ-program-usage-data

William G. Dewald, Jerry G. Thursby, Richard G. Anderson. Replication in Empirical Economics: The Journal of Money, Credit and Banking Project The American Economic Review, Vol. 76, No. 4 (Sep., 1986), pp. 587-603. http://www.jstor.org/stable/1806061

Kingi, Hautahi; Vilhuber, Lars; Herbert, Sylverie; Stanchi, Flavio. 2018. The Reproducibility of Economics Research: A Case Study.  https://ecommons.cornell.edu/handle/1813/60838
Preprint - https://hautahi.com/static/docs/Replication_aejae.pdf

Levenstein, Margaret (2017). Presentation to the NAS Committee on Replicability and Reproducibility in Science. http://sites.nationalacademies.org/DBASSE/BBCSS/DBASSE_185106

Levenstein, Margaret (2018). Reproducibility and Replicability in Economic Science.
https://deepblue.lib.umich.edu/bitstream/handle/2027.42/143813/Reproducibility+and+Replicability+in+Economic+Science+Levenstein+NAS+presentation+February+22,+2018.pdf?sequence=

Vilhuber, Lars (2020). Migrating historical AEA supplements. https://aeadataeditor.github.io/aea-supplement-migration/programs/aea201910-migration.html (accessed 2023-01-16)
