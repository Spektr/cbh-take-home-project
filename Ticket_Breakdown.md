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

Ticket 1: Add Custom ID Field to Agent Table

Description:
we need to add custom id in our database (agent table)

Acceptance:
- "custom_id" column is added to the Agent table. (db)
- it should be displayed in our UI (front)
- need to validate this id on uniqueness for Facility (front,back,db)

Effort Estimate: about 4-8 hours

Implementation Details:
- create migration to db for new fied "custom_id"
- update all dto and models in backend
- add UI to create/edit/show new field
- add validation on front for unique field


Ticket 2: Update Shift table

Description:
for generating reports, we need to update the Shifts table to include new field

Acceptance Criteria:
- "custom_agent_id" field is added to the shifts table and linked to agent table
- change all involved API as getShiftsByFacility
- 
Effort Estimate: 3-5 hours

Implementation Details:

- create migration to db for new fied "custom_agent_id"
- modify getShiftsByFacility api
