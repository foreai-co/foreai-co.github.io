---
sidebar_position: 2
---

## What is a MAG?
Memory Augmented Generation refers to an architecture that allows grounding LLMs on proprietary corpora. It does so by augmenting the attention layers of the Transformer model to allow access to external key-value read-write store. This enables the model to memorize content by “reading” it, and later retrieve it during inference (Question Answering Tasks). The MAG distinguishes itself from the RAG [[Retrieval Augmented Generation]](https://google.com) which is commonly used today to ground LLMs on corpora in the following ways:
- The indexing (“fine-tuning” on the proprietary corpus) stage consists of reading the corpus through the LLM and memorizing the internal state of the LLM in an external store.
- During inference, the architecture does not require a separate retrieval step to build the context for the generative part. This is often a problem because retrieval is limited to a few document chunks, and irrelevant chunks can easily derail the synthesis of a good answer.
- Knowledge is stored on a finer grained, concept level, not on a document chunk level as in the RAG.


## Main features of MAGs
- Indexing and retrieval from within LLM’s attention layers
- Knowledge is stored and retrieved on a per concept / key-value level, not on a document chunk level
- Indexing and retrieval is done using embedding created by the LLM itself (no shift in representation space)

## What can MAGs do that RAGs can’t?
### New capabilities
- Token-level attribution via source annotation of stored key-value pairs (will require some sort of aggregation / consolidation, if present in multiple docs)
- Track over time: Since we have access to the full corpus, it should be possible to find a concept and follow it as it morphs over time into new things (with new names etc), and not lose it while doing inference. Example: A project that changes names over time will not be retrieved by all its names by classic retrieval.
- Simple reasoning with access to intermediate knowledge: Similar to the above, as the model infers next tokens, the context it needs for continuing the task may evolve and is not trivally retrieved before starting the inference. Access to the full memory will facilitate this and make it unnecessary to issue a follow up query. Essentially by-passing the multi-turn problem solving of LangChain.
- Concept analysis: Having access to KVs should allow us to extract a “knowledge graph” from the structure exposed by the relations of all the key-values. Should be able to isolate concepts etc, and potentially influence inference or create insights…

### Quality
- No separate retrieval step. RAGs require retrieval of the perfect set of documents that can provide the optimal context for answering the question. Ranking of docs according to their usefulness to this task is hard, also, since queries are OOD wrt the doc-chunks, it may well be that a specific piece of information, necessary for a good answer is not retrieved and thus the answer can not be optimal.
- Some examples of the work required to get RAGs to work well:LlamaIndex Talk (AI Conference)
- Generation has access to the full context: Should be able to synthesize information across a very large context. Can build on ‘ambient’ knowledge that is not explicitly mentioned, but ubiquitous in the input data. This should allow significantly better quality than solving ranking and then generation separately with a small context length in RAGs
- Single system optimization:  Generally, it’s easier to optimize a single EndToEnd system, than to optimize two independent components (retrieval and generation).

### Efficiency
Large context without quadratic memory and compute. Even when context sizes grow on existing proprietary models, the RAG approach will require them to rebuild all token embeddings during inference from scratch needing the quadratic sequence length. The MAG can memorize these tokens during indexing and then access them in linear time and memory during inference.