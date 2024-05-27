---
sidebar_position: 2
---
# Reference Fact Recall
The metric answers the question: **How many facts from the reference answer does
the candidate answer mention?**

Depends on:
- A user query;
- An LLM's generated response to be evaluated;
- A reference response to compare the generated response with.

This metric checks that the answer given by the LLM is mentioning all the facts
listed in the reference answer. Additional information is not penalised.

Example:
- **Question**: *Give me a checklist to prepare for my hiking trip to the mountains.*
- **Reference response**: *You should bring your a water bottle, hiking shoes and sunscreen.* 
- **Candidate answer 1**: *Here is a list of items to bring: 1) hiking shoes; 2) a water bottle.* `[reference fact recall score = 0.67]`
- **Candidate answer 2**: *Here is a list of items to bring: 1) backpack with food; 2) hiking shoes; 3) a water bottle.*`[reference fact recall score = 0.67]`
- **Candidate answer 3**: *Here is a list of items to bring: 1) backpack with food; 2) hiking shoes; 3) a water bottle; 4) sunscreen.*`[reference fact recall score = 1.0]`