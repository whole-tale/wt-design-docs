.. _overview:

Why Whole Tale?
===============

Whole Tale is developing open-source tools and infrastructure intended to simply
the process of creating, publishing, and verifying computational research
artifacts in conformance with community standards
(:cite:t:`chard_implementing_2019`). 

Research communities across the sciences are increasingly concerned with the
replication of computationally-obtained results and reuse of research software
to both increase trust in and the scientific impact of published research.
Transparent, reproducible, and reusable research artifacts are seen as essential
to sustaining and further accelerating scientific discovery. However, ensuring
the transparency and reproducibility of results or reusability of software
presents many challenges, both technological and social. Many communities are
turning to peer-review processes as a means to encourage and enforce new practices
and standards (:cite:t:`Willis_Stodden_2020`).

For more information, see the report of the National Academies of
Sciences, Engineering and Medicine on `Reproducibility and Replicability in 
Science <https://doi.org/10.17226/25303>`_.

What is a "Tale"?
-----------------

Whole Tale defines a model for computational reproducibility that
captures the input, output, data, code, execution environment, provenance
and other metadata about the results of computational research. We refer
to this model as a **tale** -- a composite research object that includes
the environment, configuration, metadata, code, and data objects required
to fully reproduce computational results (:cite:t:`chard_application_2019`).
Technically speaking, a tale's computational environment is defined by a
Docker image specification that can be published to an external archive -- 
along with your code and data -- and re-run either in Whole Tale or even 
on your laptop.


What can Whole Tale do?
-----------------------

Having :ref:`created <compose>` a tale, a researcher can :ref:`share <sharing>` 
it with others, :ref:`publish <publishing>` it to a research repository 
(such as Zenodo or Dataverse), associate a persistent identifier, and link it 
to publications. Other researchers or reviewers can instantiate the published 
version of the Tale and execute it in the same state as at the time it was when
published. Tales may also contain intellectual property metadata with licensing 
information enabling re-use, reproducibility, giving credit, as well as for 
broad access.

Who uses Whole Tale?
--------------------

Whole Tale is intended for researchers, editors, curators, and reviewers
of published computational research. 
