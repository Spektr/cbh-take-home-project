# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Notice: The task have been split by items with the assumption that all developers are full stack in the team. So one person can close all acceptances.
If it's wrong assumption (what do I hope for), then the parent tasks can be divided into several other tasks.

### Ticket 1: Add Custom ID Field to Agent Table

Description:
we need to add custom id in our database (agent table)

Acceptance:
- "custom_id" column is added to the Agent table.
- it should be displayed in our UI
- need to validate this id on uniqueness for Facility

Effort Estimate:
about 4-8 hours

Implementation Details:
- create migration to db for new fied "custom_id" (db)
- update all dto and models in backend (back)
- add UI to create/edit/show new field (front)
- add validation for unique field (front, back)


### Ticket 2: Update Shift table to use a new Custom ID

Description:
for generating reports, we need to update the Shifts table to include new field

Acceptance Criteria:
- "custom_agent_id" field is added to the shifts table and linked to agent table
- change all involved API as getShiftsByFacility

Effort Estimate:
3-5 hours

Implementation Details:
- create migration to db for new field "custom_agent_id" (db)
- modify getShiftsByFacility api (back)


### Ticket 3: Update report to use Custom ID field

Description:
To generate reports connected with ids of agents, we need to update the generateReport to use a new "custom_agent_id"

Acceptance Criteria:
- generateReport can use "custom_agent_id"
- getting by internal ID shouldn't be broken
- generated PDF display custom ids instead of internal ones 

Effort Estimate: 2-4 hours

Implementation Details:
- modify generateReport function to use "custom_agent_id" field  (back)
- update PDF template to display it (back or front, depends on where PDF generation logic placed)


### Ticket 4: Update reports which will be given to Facilities
Description:
To help facilities easily identify agents in the reports, we need to add custom_id field to the report metadata.

Acceptance Criteria:
- custom_id field is added to the report metadata
- custom_id field is displayed in PDF report

Effort Estimate:
is about 2-4 hours

Implementation Details:
- need to modify the report generation code to include the custom_id field in metadata (back)
- update the report PDF template to display this field (back or front)

Overall Effort Estimate:
this feature should take around 11-21 hours of development time
