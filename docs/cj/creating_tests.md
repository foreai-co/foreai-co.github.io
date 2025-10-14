---
sidebar_position: 1
---
# Test creation
Start creating tests by clicking the `Create a test` button in the `Test cases` tab and filling in the testcase information.

## Basic fields
| Field    | Value |
| -------- | ------- |
| Test name | any string    |
| Initial website URL | initial URL to open as a first step |
| Instructions | what should testcase do and verify |

### Best practices for instructions
- imagine guiding an experienced tester who just joined your team and doesn't know your product very well
- avoid ambiguities like `verify the content`
- be explicit on what should happen, but also what should NOT happen
  - e.g. `do NOT click the SUBMIT button at the end`. 

## Options

Use the big `+` button below the instructions text to add test case options.

| Option    | Value |
| -------- | ------- |
| Variables | Local variables, used only in this test case |
| Secrets | Project-wide secrets, like usernames / passwords, defined in `Secrets` |
| Modules | Module (reusable code) to execute before the test steps - see [Modules](./modules.md) |

For secrets and variables, use e.g. `@username` to refer to them in testcase instructions.

Click `Create test` to save and generate the testcase using AI models.

Use `Save as Draft` if you just want to save and trigger the test generation later.