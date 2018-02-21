# Notes from 2018-02 All Hands Meeting Discussion

On 2018-02-21, during our 2018 All Hands Meeting at Notre Dame, we discussed publishing Tales for 2-3 hours.
Bryce Mecum took hand-written notes while he presented the contents of ./README.rst_ and then created this document to save those notes for the rest of the team.

- Victoria asked a clarifying question about whether we're talking about the frozen tale or simply exporting tales.
  - TODO: Make this more clear up top
- TODO: Remove mention of OAI/ORE from Requirements section and move into implementation details
- TODO: Add requirement that published Tales have metadata to the Requirements section
- We discussed how much moderation we do on the quality of tales, and their metadata and provenance. The general concensus of the room was that we would do little in this area and put the burden of publishing quality tales on the repositories storing the Tales.
- TODO: Victoria mentioned TOP guidelines for journals. Bryce: Look into this.
- TODO: Add to Requirements that published Tales can be linked tightly with published journal articles
  - TODO: Describe how this would work in subsequent sections
- The question of whether the user can delete a Tale, even if published. We discussed this and where I think we got on this is that Tales that are not published in external repositories can't be expected to stick around and, since Tales can be round-tripped back into the WT environment, Tales present in WT don't really need to be persistent.
- Victoria made a great comment about allowing the user to select/de-select which files they save. She suggested there may be existing [HCI] research on this topic and that we could potentially use our system to do such research
- TODO: In UI mockups and in implementation, support including entire folders in what's saved
- TODO: Describe how we might make use of package management conventions such as pip's requirements.txt
- TODO: Design out how multiple published versions of a Tale would be linked togther
  - Bryce: This requires details both in Girder and in DataONE
- We talked about needing to standardize the serialization of Tales, whatever that means
  TODO (for Bryce): Look into Popper
- We talked about what we show in the Tale Publication View and decided to implement it in three phases:
  - Phase 1: Show just the Workspace
  - Phase 2: 1 + Home dir
  - PHase 3: Show automatically calculated diffs
- TODO: Make it clear what gets the DOI (which URL/URI) in the design doc
- TODO: Make it clear who mints the DOIs
- TODO: Investigate BrownDog (we promised this in proposal) for automatic minimal metadata creation
- TODO: Diagram out publishing in a more abstract fashion, abstracting out the provide-specific details
