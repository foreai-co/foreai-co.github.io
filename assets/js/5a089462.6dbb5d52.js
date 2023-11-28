"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[638],{3674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(5893),o=n(1151);const a={sidebar_position:2},s=void 0,r={id:"tools/MAG",title:"MAG",description:"What is a MAG?",source:"@site/docs/tools/MAG.md",sourceDirName:"tools",slug:"/tools/MAG",permalink:"/docs/tools/MAG",draft:!1,unlisted:!1,editUrl:"https://github.com/foreai-co/docs/tools/MAG.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"RAGBox",permalink:"/docs/tools/RAGBox"}},l={},c=[{value:"What is a MAG?",id:"what-is-a-mag",level:2},{value:"Main features of MAGs",id:"main-features-of-mags",level:2},{value:"What can MAGs do that RAGs can\u2019t?",id:"what-can-mags-do-that-rags-cant",level:2},{value:"New capabilities",id:"new-capabilities",level:3},{value:"Quality",id:"quality",level:3},{value:"Efficiency",id:"efficiency",level:3}];function d(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"what-is-a-mag",children:"What is a MAG?"}),"\n",(0,i.jsxs)(t.p,{children:["Memory Augmented Generation refers to an architecture that allows grounding LLMs on proprietary corpora. It does so by augmenting the attention layers of the Transformer model to allow access to external key-value read-write store. This enables the model to memorize content by \u201creading\u201d it, and later retrieve it during inference (Question Answering Tasks). The MAG distinguishes itself from the RAG ",(0,i.jsx)(t.a,{href:"https://google.com",children:"[Retrieval Augmented Generation]"})," which is commonly used today to ground LLMs on corpora in the following ways:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The indexing (\u201cfine-tuning\u201d on the proprietary corpus) stage consists of reading the corpus through the LLM and memorizing the internal state of the LLM in an external store."}),"\n",(0,i.jsx)(t.li,{children:"During inference, the architecture does not require a separate retrieval step to build the context for the generative part. This is often a problem because retrieval is limited to a few document chunks, and irrelevant chunks can easily derail the synthesis of a good answer."}),"\n",(0,i.jsx)(t.li,{children:"Knowledge is stored on a finer grained, concept level, not on a document chunk level as in the RAG."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"main-features-of-mags",children:"Main features of MAGs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Indexing and retrieval from within LLM\u2019s attention layers"}),"\n",(0,i.jsx)(t.li,{children:"Knowledge is stored and retrieved on a per concept / key-value level, not on a document chunk level"}),"\n",(0,i.jsx)(t.li,{children:"Indexing and retrieval is done using embedding created by the LLM itself (no shift in representation space)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"what-can-mags-do-that-rags-cant",children:"What can MAGs do that RAGs can\u2019t?"}),"\n",(0,i.jsx)(t.h3,{id:"new-capabilities",children:"New capabilities"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Token-level attribution via source annotation of stored key-value pairs (will require some sort of aggregation / consolidation, if present in multiple docs)"}),"\n",(0,i.jsx)(t.li,{children:"Track over time: Since we have access to the full corpus, it should be possible to find a concept and follow it as it morphs over time into new things (with new names etc), and not lose it while doing inference. Example: A project that changes names over time will not be retrieved by all its names by classic retrieval."}),"\n",(0,i.jsx)(t.li,{children:"Simple reasoning with access to intermediate knowledge: Similar to the above, as the model infers next tokens, the context it needs for continuing the task may evolve and is not trivally retrieved before starting the inference. Access to the full memory will facilitate this and make it unnecessary to issue a follow up query. Essentially by-passing the multi-turn problem solving of LangChain."}),"\n",(0,i.jsx)(t.li,{children:"Concept analysis: Having access to KVs should allow us to extract a \u201cknowledge graph\u201d from the structure exposed by the relations of all the key-values. Should be able to isolate concepts etc, and potentially influence inference or create insights\u2026"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"quality",children:"Quality"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"No separate retrieval step. RAGs require retrieval of the perfect set of documents that can provide the optimal context for answering the question. Ranking of docs according to their usefulness to this task is hard, also, since queries are OOD wrt the doc-chunks, it may well be that a specific piece of information, necessary for a good answer is not retrieved and thus the answer can not be optimal."}),"\n",(0,i.jsxs)(t.li,{children:["Some examples of the work required to get RAGs to work well",":LlamaIndex"," Talk (AI Conference)"]}),"\n",(0,i.jsx)(t.li,{children:"Generation has access to the full context: Should be able to synthesize information across a very large context. Can build on \u2018ambient\u2019 knowledge that is not explicitly mentioned, but ubiquitous in the input data. This should allow significantly better quality than solving ranking and then generation separately with a small context length in RAGs"}),"\n",(0,i.jsx)(t.li,{children:"Single system optimization:  Generally, it\u2019s easier to optimize a single EndToEnd system, than to optimize two independent components (retrieval and generation)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"efficiency",children:"Efficiency"}),"\n",(0,i.jsx)(t.p,{children:"Large context without quadratic memory and compute. Even when context sizes grow on existing proprietary models, the RAG approach will require them to rebuild all token embeddings during inference from scratch needing the quadratic sequence length. The MAG can memorize these tokens during indexing and then access them in linear time and memory during inference."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);