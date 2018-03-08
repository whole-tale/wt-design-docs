# Tale Serialization

## Background

What makes something a Tale, and how is it stored, transferred from one place to another, archived, and cited?
The answer to these questions impacts numerous parts of this project.

Let's start by listing the information contained in a Tale.

The core stuff is:

- The computing environment the researcher used
  - Dockerfile
- The data the researcher used
  - Files local to the WholeTale environment
  - Remote files (DataONE, Globus)
- How the researcher used that data
  - e.g., Python/R scripts/notebooks
- What the researcher did with that data
  - Any output

Additionally, we want to support additional metadata:

- Scientific metadata on the Tale and its parts (creator, license, detailed file metadata)
- Provenance metadata
- The paper(s) this Tale represents the analysis for
- Relationships to other Tales
  - New version of an existing Tale?
  - Fork of another person's Tale?

At a minimum, the serialized Tale needs to have enough information to be runnable (the user can get back into the running Frontend) in a WholeTale environment, and possibly outside of one.
