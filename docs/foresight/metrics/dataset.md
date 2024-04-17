---
sidebar_position: 4
---
# ForeAI metric benchmark dataset
Obviously ForeAI also needs to evaluate the quality of its evaluation metrics
(must go deeper :)) so we generated a small evaluation dataset for this purpose.

## Dataset generation
The ForeAI dataset was generated based on scraping news artciles on different
topics and asking GPT4 to generate question and answer pairs for each article.
We prompted GPT4 to generate three types of Q&A pairs: 1) numerics/statistics
based Q&As, 2) specific quiz-like Q&As, and 3) broad conceptual/reasoning
type of questions.

1) numerics/statistics Q&A example
- **Question**: What is the estimated daily number of Omicron cases in England as of December 2022?
- **Answer**: The estimated daily number of Omicron cases in England as of December 2022 is 200,000.

2) quiz like Q&A example
- **Question**: Who is the player who missed the Netball World Cup in South Africa in 2023 due to pregnancy?
- **Answer**: Gretel Bueta

3) broad concepts/reasoning Q&A example
- **Question**: Why does Prince Harry believe new digital laws are needed to protect children?
- **Answer**: Prince Harry believes new digital laws are needed to protect children because social media companies are using children as 'digital experiments to make money' and are causing harm to young users.

For each Q&A pair we also generated answers with different models such that we
can evaluate answer differences between different responses. We used a simple
GPT3.5 based RAG (a RAG that has indexed all articles could get  "distracted" by
somewhat related but not relevant chunks that were retrieved and provide a wrong
answer), and the Llama-2-7b-chat and t5-base models for generating alternative
answers (as expected the much smaller open source models provide responses very
 different to GPT4).

## Human Evals
For each of the generated entries we had two ForeAI Engineers manually score
each generated answer against our metrics and then reviewed all cases where
the human provided scores differ.

## What about existing public datasets?
We have reviewed a lot of the existing public datasets, and while we do include
benchmarks on some of these datasets we preferred creating our own dataset. We
did this because most of the datasets we reviewed suffer the following problems:
1) there's a lot of garbage (e.g. non coherent text)
2) poor human labels
3) q&a data is not representative of how users interact with today's LLMs

## When are you open sourcing the dataset?
Soon :) We are working on getting the approval for this.