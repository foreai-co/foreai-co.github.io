---
sidebar_position: 1
---
# Quick start with Python 🐍

## Quick start
1.  Install the package using `pip`:
    ```bash
    pip install fore
    ```
    Or download the repo from [GitHub](https://github.com/foreai-co/fore/) and install via `pip install .`

2.
    - Get started with the following lines:
    ```python
    from fore.foresight import Foresight

    foresight = Foresight(api_token="<YOUR_API_TOKEN>")

    foresight.log(query="What is the easiest programming language?",
                  response="Python",
                  contexts=["Python rated the easiest programming language"],
                  tag="my_awesome_experiment")
    
    # You can add more such queries using foresight.log
    # ....

    foresight.flush()
    ```

    - Or alternatively to curate your evalsets and run regular evals against them do:
    ```python
    from fore.foresight import EvalRunConfig, Foresight, InferenceOutput, MetricType

    foresight = Foresight(api_token="<YOUR_API_TOKEN>")

    evalset = foresight.create_simple_evalset(
        evalset_id="programming-languages",
        queries=["hardest programming language?", "easiest programming language?"],
        reference_answers=["Malbolge", "Python"])

    run_config = EvalRunConfig(evalset_id="programming-languages",
                            experiment_id="my-smart-llm",
                            metrics=[MetricType.GROUNDEDNESS, MetricType.REFERENCE_FACT_RECALL])


    def my_generate_fn(query: str) -> InferenceOutput:
        # Do the LLM processing with your model...
        # Here is some demo code:
        return InferenceOutput(
            generated_response="Malbolge" if "hardest" in query else "Python",
            contexts=[
                "Malbolge is the hardest language", "Python is the easiest language"
            ])

    foresight.generate_answers_and_run_eval(my_generate_fn, run_config)
    ```

    - If you have already run a one-off eval run that includes reference answers or
    contexts, you can use a single command to upload the evalset, the generated answers
    and kick off an evalrun:
    ```python
    from fore.foresight import EvalRunConfig, Foresight, InferenceOutput, MetricType
    from datetime import datetime

    foresight = Foresight(api_token="<YOUR_API_TOKEN>")

    formatted_time = datetime.utcnow().strftime('%Y%m%d-%H%M%S')

    run_config = EvalRunConfig(evalset_id=f"programming-languages-{formatted_time}",
                               experiment_id=f"my-experiment-{formatted_time}",
                               metrics=[MetricType.REFERENCE_FACT_RECALL])
        
    foresight.create_simple_evalrun(
        run_config=run_config,
        queries=["hardest programming language?", "easiest programming language?"],
        answers=[
            "The hardest programming language is Malbolge",
            "The easiest programming language is Python"
        ],
        reference_answers=["Malbolge", "Python"])
    ```