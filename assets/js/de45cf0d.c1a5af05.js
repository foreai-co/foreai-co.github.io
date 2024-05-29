"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[272],{632:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(4848),s=r(8453);const i={sidebar_position:2},c="Reference Fact Recall",o={id:"foresight/metrics/reference_fact_recall",title:"Reference Fact Recall",description:"The metric answers the question: How many facts from the reference answer does",source:"@site/docs/foresight/metrics/reference_fact_recall.md",sourceDirName:"foresight/metrics",slug:"/foresight/metrics/reference_fact_recall",permalink:"/docs/foresight/metrics/reference_fact_recall",draft:!1,unlisted:!1,editUrl:"https://github.com/foreai-co/foreai-co.github.io/docs/foresight/metrics/reference_fact_recall.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Groundedness",permalink:"/docs/foresight/metrics/groundedness"},next:{title:"Relevance",permalink:"/docs/foresight/metrics/relevance"}},a={},l=[];function d(e){const n={code:"code",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"reference-fact-recall",children:"Reference Fact Recall"}),"\n",(0,t.jsxs)(n.p,{children:["The metric answers the question: ",(0,t.jsx)(n.strong,{children:"How many facts from the reference answer does\nthe candidate answer mention?"})]}),"\n",(0,t.jsx)(n.p,{children:"Depends on:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A user query;"}),"\n",(0,t.jsx)(n.li,{children:"An LLM's generated response to be evaluated;"}),"\n",(0,t.jsx)(n.li,{children:"A reference response to compare the generated response with."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This metric checks that the answer given by the LLM is mentioning all the facts\nlisted in the reference answer. Additional information is not penalised."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Question"}),": ",(0,t.jsx)(n.em,{children:"Give me a checklist to prepare for my hiking trip to the mountains."})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reference response"}),": ",(0,t.jsx)(n.em,{children:"You should bring your a water bottle, hiking shoes and sunscreen."})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Candidate answer 1"}),": ",(0,t.jsx)(n.em,{children:"Here is a list of items to bring: 1) hiking shoes; 2) a water bottle."})," ",(0,t.jsx)(n.code,{children:"[reference fact recall score = 0.67]"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Candidate answer 2"}),": ",(0,t.jsx)(n.em,{children:"Here is a list of items to bring: 1) backpack with food; 2) hiking shoes; 3) a water bottle."}),(0,t.jsx)(n.code,{children:"[reference fact recall score = 0.67]"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Candidate answer 3"}),": ",(0,t.jsx)(n.em,{children:"Here is a list of items to bring: 1) backpack with food; 2) hiking shoes; 3) a water bottle; 4) sunscreen."}),(0,t.jsx)(n.code,{children:"[reference fact recall score = 1.0]"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var t=r(6540);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);