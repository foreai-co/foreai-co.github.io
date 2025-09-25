# Settings

In the settings tab, you can view and manage general project settings, like:
- organization name,
- team members,
- shared parameters.

## Organization

View / copy the service API key and modify organization name.

## Team

Add / remove team members.

## Project

Modify project name.

## Shared Params

Shared params can be used to make shared or secret values available in the test. Common examples:
- usernames / passwords,
- credit card / payment details.

All shared params are treated as secrets:
- value is masked in the Settings UI and the code,
- you can only copy or update the value.

By default, testcase does not have access to the shared parameters - you need to add them in the `Test Parameters` section.

For a sample login testcase, with `@login` and `@password` defined as Shared Params, the testcase instruction can be simply `login`, as the parameter names and values are passed as context.

If you want to use the parameter value explicitly in the testcase instructions, use `@param_name`, like:

```
Login and search for @product_name.
```

### Overriding parameters

It's possible to override the parameter values from the CJ UI and using [CJ GitHub Actions](https://github.com/marketplace/actions/critical-journey).

In the testcase UI, open the dropdown in the `Run` button and choose `Override run parameters`. Add the desired Key-Value pairs, like:

| Key | Value |
| ----- | ---------- |
| product_name | new_name |


For [CJ GitHub Actions](https://github.com/marketplace/actions/critical-journey), set `params_override` in the YAML file - see [example running a test suite](https://github.com/marketplace/actions/critical-journey#example-usage-for-running-a-test-suite):

```
params_override: '{ "product_name" : "new_name", "login" : "another_user" }'
```
