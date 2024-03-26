---
sidebar_position: 2
---
# Ground Truth Similarity
The metric answers the question: **Is the generated response semantically equivalent 
to the reference response?**

Depends on:
- LLM's generated response;
- A reference response to compare the generated response with.

Example:
- **Question**: *Is Python an easy programming language to learn?*
- **Reference response**: *Python is an easy programming language to learn*
- **Response 1**: *It is easy to be proficient in python*  `[similarity score = 0.72]`
- **Response 2**: *Python is widely recognized for its simplicity.* `[similarity score = 0.59]`
- **Response 3**: *Python is not an easy programming language to learn* `[similarity score = 0.0]`
