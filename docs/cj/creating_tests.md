---
sidebar_position: 1
---
# Test creation
Start creating tests by clicking the `New` button in the `Test cases` tab and filling in the testcase information.

## Basic fields
| Field    | Value |
| -------- | ------- |
| Test name | any string    |
| Web URL to be tested | initial URL to open as a first step |
| Instructions | what should testcase do and verify |

### Best practices for instructions
- imagine guiding an experienced tester who just joined your team and doesn't know your product very well
- avoid ambiguities like 'verify the content'
- be explicit on what should happen, but also what should NOT happen
  - e.g. `do NOT click the SUBMIT button at the end`. 

## Other fields

| Field    | Value |
| -------- | ------- |
| Attach Module | Module to execute before the test steps - see ???Modules|
| Test suites | add this testcase to test suites    |
| Shared parameters | use shared parameters defined in Settings tab |
| Local parameters | local parameters, only for this testcase | 

For shared and local parameters, use e.g. `@username` to refer to them in testcase instructions.

Click `Create & Run` to save and generate the testcase.

If you just want to save and trigger generation later - there's the `Create Only` option in the drop-down.