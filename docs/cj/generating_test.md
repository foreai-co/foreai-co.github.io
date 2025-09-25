# Generating a test

After entering the test case you can start the test generation, which converts the instructions into code. The generated code will be used for running the test.

Test steps are generated one-by-one:
- first step is `Visit the webpage`, opening the provided Web URL
- generate next step title and description
- generate code for this step
- execute generated code. If there's an error, regenerate the code and execute.
- take a screenshot and verify if the screenshot matches the expected step outcome
- generating code for ea

# Fixing / improving the test

1. Make sure the instructions are correct - first try improving instructions and regenerate.
1. If instructions are correct, but step is not - correct the step title / description and regenerate.
1. If the step is correct, but code is doing a wrong thing (e.g. clicking on the wrong element) - give a coder hint.
1. If step verification failed, but you are happy with what the step did - override the verification result.
1. Some final steps are not necessary - mark the test as complete in one of the earlier steps. Following steps will not be executed.