"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{1310:(e,t,n)=>{n.d(t,{Z:()=>p});n(7294);var s=n(6010),a=n(5281),i=n(2802),l=n(8596),o=n(9960),r=n(5999),c=n(4996),d=n(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(o.Z,{"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(o.Z,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){const e=(0,i.s1)(),t=(0,l.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(a.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,r.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(b,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},5154:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var s=n(7294),a=n(1944),i=n(902),l=n(5893);const o=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,l.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(6010),m=n(7524),h=n(49);function v(){const{metadata:e}=c();return(0,l.jsx)(h.Z,{previous:e.previous,next:e.next})}var b=n(3120),x=n(4364),p=n(5281),f=n(5999);function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,l.jsx)(f.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){let{lastUpdatedBy:t}=e;return(0,l.jsx)(f.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:t})},children:" by {user}"})}function L(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,l.jsxs)("span",{className:p.k.common.lastUpdated,children:[(0,l.jsx)(f.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,l.jsx)(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,l.jsx)(j,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var C=n(4881),N=n(1526);const Z={lastUpdated:"lastUpdated_vwxv"};function k(e){return(0,l.jsx)("div",{className:(0,u.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(N.Z,{...e})})})}function _(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,l.jsxs)("div",{className:(0,u.Z)(p.k.docs.docFooterEditMetaRow,"row"),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(C.Z,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",Z.lastUpdated),children:(n||s)&&(0,l.jsx)(L,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function T(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:i}=e,o=i.length>0,r=!!(t||n||a);return o||r?(0,l.jsxs)("footer",{className:(0,u.Z)(p.k.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,l.jsx)(k,{tags:i}),r&&(0,l.jsx)(_,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var U=n(6043),H=n(3743);const y={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function w(e){let{collapsed:t,...n}=e;return(0,l.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",y.tocCollapsibleButton,!t&&y.tocCollapsibleButtonExpanded,n.className),children:(0,l.jsx)(f.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const A={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function M(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,U.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(A.tocCollapsible,!i&&A.tocCollapsibleExpanded,n),children:[(0,l.jsx)(w,{collapsed:i,onClick:o}),(0,l.jsx)(U.z,{lazy:!0,className:A.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(H.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const I={tocMobile:"tocMobile_ITEo"};function B(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(M,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(p.k.docs.docTocMobile,I.tocMobile)})}var E=n(9407);function O(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(E.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var S=n(2503),V=n(2196);function P(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(p.k.docs.docMarkdown,"markdown"),children:[n&&(0,l.jsx)("header",{children:(0,l.jsx)(S.Z,{as:"h1",children:n})}),(0,l.jsx)(V.Z,{children:t})]})}var D=n(1310),R=n(2212);const F={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function z(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,l.jsx)(B,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,l.jsx)(O,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&F.docItemCol),children:[s&&(0,l.jsx)(R.Z,{}),(0,l.jsx)(b.Z,{}),(0,l.jsxs)("div",{className:F.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(D.Z,{}),(0,l.jsx)(x.Z,{}),n.mobile,(0,l.jsx)(P,{children:t}),(0,l.jsx)(T,{})]}),(0,l.jsx)(v,{})]})]}),n.desktop&&(0,l.jsx)("div",{className:"col col--3",children:n.desktop})]})}function q(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.FG,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(z,{children:(0,l.jsx)(n,{})})]})})}},49:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var s=n(5999),a=n(2244),i=n(5893);function l(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.Z,{...t,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(a.Z,{...n,subLabel:(0,i.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(6010),a=n(5999),i=n(5281),l=n(4477),o=n(5893);function r(e){let{className:t}=e;const n=(0,l.E)();return n.badge?(0,o.jsx)("span",{className:(0,s.Z)(t,i.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,o.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var s=n(6010),a=n(2263),i=n(9960),l=n(5999),o=n(143),r=n(5281),c=n(373),d=n(4477),u=n(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function v(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.Z,{to:n,onClick:s,children:(0,u.jsx)(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,a.Z)(),{pluginId:l}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,c.J)(l),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,o.Jo)(l),x=m??(p=b).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,s.Z)(t,r.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(v,{versionLabel:b.label,to:x.path,onClick:()=>d(b.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},9407:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(6010),a=n(3743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(5893);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,s.Z)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(a.Z,{...n,linkClassName:o,linkActiveClassName:r})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>b});var s=n(7294),a=n(6668);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>o(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var u=n(9960),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const b=(0,a.L)(),x=c??b.tableOfContents.minHeadingLevel,p=u??b.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:p});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:p}}),[o,r,x,p])),(0,m.jsx)(v,{toc:f,className:n,linkClassName:o,...h})}},2212:(e,t,n)=>{n.d(t,{Z:()=>h});n(7294);var s=n(6010),a=n(5999),i=n(5742),l=n(5893);function o(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),u=n(9047);function m(e){let{className:t}=e;return(0,l.jsx)(u.Z,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);