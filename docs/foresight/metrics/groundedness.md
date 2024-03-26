---
sidebar_position: 1
---
# Groundedness
The metric answers the question: **Is the response based on the context and 
nothing else?**

Depends on:
- LLM's generated response;
- Context used for generating the answer.

This metric estimates the fraction of facts in the generated response that can 
be found in the provided context.

Example:
- **Context**: *The front door code has been changed from 1234 to 7945 due to 
security reasons.*
- **Q**: *What is the current front door code?*
- **A1**: *7945.* `[groundedness score = 0.9]`
- **A2**: *0000.* `[groundedness score = 0.0]`
- **A3**: *1234.* `[groundedness score = 0.04]`
