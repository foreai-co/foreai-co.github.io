---
sidebar_position: 2
---
# Ground Truth Similarity
The metric answers the question: **Is the generated response factually equivalent 
to the reference response?**

Depends on:
- A user query;
- An LLM's generated response to be evaluated;
- A reference response to compare the generated response with.

The metric score (range from 0 to 1) represents the ratio of the facts that are present in both the reference and the generated response (facts, the reference and generated responses agree on), divided by the maximum number of facts in any of the responses. See examples below for more intuition.

Example (multi-statement):
- **Question**: *What is the capital of France, and what is the primary language spoken there?*
- **Reference response**: *The capital of France is Paris, and the primary spoken language is French.*
- **Response 1**: *Paris is the capital of France, and the most spoken language is French.* `[similarity score = 1.0]`
- **Response 2**: *The capital of France is Paris.* `[similarity score = 0.5]` (the second statement is missing from the generated response)
- **Response 3**: *The capital of France is Paris, and the most spoken language is English.* `[similarity score = 0.5]` (language statement mismatch)

Example (multi-statement):
- **Question**: *What fruits does Amy like?*
- **Reference response**: *Amy likes apples and bananas.*
- **Response**: *Amy likes apples, berries and plums.* `[similarity score = 0.33]` (one matched fact and two mismatched ones)

Example:
- **Question**: *What is the age of Archie White, the oldest new graduate in Britain as of July 16, 2021?*
- **Reference response**: *96 years old.*
- **Response 1**: *Archie White's age is 96.*  `[similarity score = 1.0]`
- **Response 2**: *He is 96.* `[similarity score = 1.0]`
- **Response 3**: *He is more than 95 years old.* `[similarity score = 0.0]` (while true, it's not semantically equivalent to the reference response)

Example:
- **Question**: *What cars does Alex like?*
- **Reference response**: *Alex likes blue cars.*
- **Response**: *Alex likes all cars.* `[similarity score = 0.0]` (the statement is similar but not equivalent to the reference response)

