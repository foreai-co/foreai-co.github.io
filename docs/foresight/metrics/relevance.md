---
sidebar_position: 3
---
# Relevance
### (Coming soon)
The metric answers the question: **Does the response answer the question and 
only the question?**

Depends on:
- LLM's generated response;
- User query/question.

This metric checks that the answer given by the LLM is trying to answer the 
given question precisely and does not include irrelevant information.

Example:
- **Q**: *At which temperature does oxygen boil?*
- **A1**: *Oxygen boils at -183 °C.* `[relevance score = 1.0]`
- **A2**: *Oxygen boils at -183 °C and freezes at -219 °C.* `[relevance score = 0.5]`