.. image:: http://readthedocs.org/projects/wholetale/badge/?version=latest
   :target: http://wholetale.readthedocs.io/en/latest/?badge=latest

Overview
========

Whole Tale is a scalable, web-based, multi-user platform for the creation, publication, and execution of "tales" -- shareable, reproducible, and preservable research objects that capture data, code, and the complete execution environment required for reproducibility. Whole Tale is intended to enable researchers to publish interactive environments along with research data used in published research.  A beta version of the Whole Tale reference implementation is available at https://dashboard.wholetale.org.

- If you are interested in exploring the Whole Tale service, please see the :ref:`<users-guide>`.
- If you are interested participating in user experience testing, please
  `contact us <https://wholetale.org>`_. 
- If you are a developer interested in contributing to the project, please see our :ref:`development documentation <development>`.

What is a Tale?
---------------
A "tale" is a new type of preservable research object that combines data, software,
and narrative into a single re-runnable, publishable, and verifiable package:

.. image:: images/tale_diagram.png 
     :align: center
     :scale: 70%

A Tale consists of the following:

- A software environment used to create and run your analysis (e.g., RStudio,
  Jupyter)
- A workspace folder for your code, narrative, and documentation.
- A data folder with optional references to externally published datasets.


Why Whole Tale?
---------------

The Whole Tale platform is being developed to contribute to and simplify the
adoption of practices that improve the understandability and reproducibility of
published research based on computational environments. 

Societies/Communities
^^^^^^^^^^^^^^^^^^^^^

Academic societies, associations and communities are responding to challenges in
the reproducibility of published research by adopting recommendations,
guidelines, and policies that impact publishers, editors, and researchers.

Editors
^^^^^^^

In response to the demand of academic communities to address problems of
reproducibility and reuse, journal editors are increasingly adopting guidelines
and enforcing policies for the sharing of data, code and information about the
software environment used in published research based on computational analysis.

Researchers 
^^^^^^^^^^^

Researchers are increasingly adopting practices to improve the transparency and
reproducibility of their computational research.  Some are self-motivated to
improve their own rigor and transparency while others are responding to the
demands and requirements of their academic communities and journals.  Some are
advanced tool users with sophisticated methods of packaging and distributing
scientific software, often with automated testing and verification. Others are
more concerned with the research product than learning new tools and infrastructure for sharing and transparency.

Curators and Reviewers
^^^^^^^^^^^^^^^^^^^^^^

The scholarly publication process has built-in mechanisms for anonymous peer
review. Some communities are adopting replication practices to ensure that
published research can be replicated at various levels. Anonymous reviewers and
curators of research artifacts play an important role in the quality of research
artifacts.

Repository Developers and Operators
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Developers and operators of research data repositories are faced with the
challenge of addressing the needs of their communities through support for new
types of scholarly objects, methods of access, and processes for review and
verification.


Use cases
---------
The following use cases are supported by Whole Tale v0.6:

- A user can register immutable public data from supported external resources
  including DataONE, Globus, Dataverse and some HTTP sources.
- A user can create a Tale based on popular environments including RStudio and
  Jupyter.
- A user can upload/create source code files in the Tale workspace that are used
  for analysis. Analysis code can optionally reference externally registered
  data.
- A user can share their Tale (via Public setting) and run Tales shared by
  others.
- A Dataverse or DataONE user can create a Tale based on a public dataset via
  the repository native user interface (Analyze in Whole Tale)

The following use cases are planned for future releases:

- A user can customize existing software environments using common package managers. 
- A user can publish a Tale to an external repository including DataONE and
  Dataverse network members. 
- A curator or reviewer can use Whole Tale to verify or certify published
  artifacts.
- A user can add a new environment to Whole Tale
- A user can share a Tale with another user for collaboration or anonymous
  review.
- A user can copy an existing Tale and change the code, environment, or
  externally registered data (remix).
- A user can run licensed software including Stata and Matlab
- A user can run a Tale on a remote resource based on available data (data
  locality) or specialized compute requirements.
- A user can create a Tale based on embargoed or private/authenticated data.
- A user can track Tale executions along with detailed provenance information.  
- A user can export a Tale and run locally


 


Whole Tale is an ongoing NSF-funded Data Infrastructure Building Blocks (DIBBS) project initiated in 2016 with expected completion February, 2021.

