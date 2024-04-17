---
sidebar_position: 2
---
# Ground Truth Similarity
The metric answers the question: **Is the generated response semantically equivalent 
to the reference response?**

Depends on:
- LLM's generated response;
- A reference response to compare the generated response with.

The metric score ranges from 0 to 1 and represents the fraction of statements
present in both the reference and generated responses. See examples for more
intuition below. 

Example (multi-statement):
- **Question**: *What is the capital of France, and what is the primary language spoken there?*
- **Reference response**: *The capital of France is Paris, and the primary spoken language is French.*
- **Response 1**: *Paris is the capital of France, and the most spoken language is French.* `[similarity score = 1.0]`
- **Response 2**: *The capital of France is Paris.* `[similarity score = 0.5]` (the second statement is missing from the generated answer)
- **Response 3**: *The capital of France is Paris, and the most spoken language is English.* `[similarity score = 0.5]` (the language statement is wrong)

Example (multi-statement):
- **Question**: *What fruits does Amy like?*
- **Reference response**: *Amy likes apples and bananas.*
- **Response**: *Amy likes apples, berries and plums.* `[similarity score = 0.33]` (the generated answer contains one correct and two wrong statements)

Example:
- **Question**: *Is Python an easy programming language to learn?*
- **Reference response**: *Python is an easy programming language to learn*
- **Response 1**: *It is easy to be proficient in python*  `[similarity score = 1.0]`
- **Response 2**: *Python is widely recognized for its simplicity.* `[similarity score = 1.0]`
- **Response 3**: *Python is not an easy programming language to learn* `[similarity score = 0.0]`

Example:
- **Question**: *What cars does Alex like?*
- **Reference response**: *Alex likes blue cars.*
- **Response**: *Alex likes all cars.* `[similarity score = 0]` (the statement is similar but not equivalent to the ground truth)


# Benchmark
Below are benchmarks against popular metric choices semantic similarity between
texts.

TODO: Fix benchmarks once we have final results


| metric                 |  Fore Ranking<br>accuracy  | Fore GT<br>correlation | AE<br>correlation  | Average |
|------------------------|----------------------------|------------------------|--------------------|---------|
| BLEURT                 |                      0.361 |                  0.298 |              0.298 |   0.319 |
| BEM                    |                      0.595 |                  0.613 |          **0.861** |   0.689 |
| Ragas                  |                      0.516 |                  0.642 |              0.728 |   0.629 |
| Ragas<br>*best effort* |                      0.712 |                  0.712 |              0.712 |   0.712 |
| ForeAI                 |                      0.712 |                  0.712 |              0.812 |   0.712 |


## Metrics
BLEURT
BEM
This is a Bert based model finetuned on the [Answer Equivalence (AE) dataset](https://github.com/google-research-datasets/answer-equivalence-dataset)
(that we also benchmark against - see the AE column in the benchmark table). 
Ragas answer correctness
Ragas appears to be the most popular open source platform for evaluating RAGs.


## Datasets
Finding public datasets matching our definition of Ground Truth similarity was 
a challenge. **TODO**


# References
You can find more about the AE dataset and original paper in their [github repo](https://github.com/google-research-datasets/answer-equivalence-dataset).
