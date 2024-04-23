---
sidebar_position: 1
---
# Groundedness
The metric answers the question: **Is the response based on the context and 
nothing else?**. It measures whether the response is consistent with and can be
implied from the context ("are entailed"). It doesn't need to be semantcially
equivalent to the context.

Depends on:
- LLM's generated response;
- Context used for generating the answer.

This metric score is between 0 and 1 and estimates the fraction of facts in the
candidate response that are grounded in the provided context (are entailed by
the context).

Example:
- **Context**: *The front door code has been changed from 1234 to 7945 due to 
security reasons.*
- **Question**: *What is the current front door code?*
- **Response 1**: *7945.* `[groundedness score = 1.0]`
- **Response 2**: *0000.* `[groundedness score = 0.0]`
- **Response 3**: *1234.* `[groundedness score = 0.0]`
- **Response 4**: *The code has been changed due to security reasons.* `[groundedness score = 1.0]` (100% grounded, even if not answering the question)

Example:
- **Context**: *Albert Einstein, (14 March 1879 - 18 April 1955) was a German-born theoretical physicist. In 1905, sometimes described as his annus mirabilis (miracle year), Einstein published four groundbreaking papers.*
- **Question**: *How old did Einstein get and at what age did he publish four groundbreaking papers?*
- **Response 1**: *He was 76 years old when he died and he published the four groundbreaking papers in the year he turned 26.* `[groundedness score = 1.0]`
- **Response 2**: *He was 50 years old when he died and he published the four groundbreaking papers in the year he turned 26.* `[groundedness score = 0.5]` (Age is wrong, publish fact is correct)
- **Response 3**: *He was more than 60 years old when he died and he published four groundbreaking papers in his twenties.* `[groundedness score = 1.0]` (Entailed in context.)
