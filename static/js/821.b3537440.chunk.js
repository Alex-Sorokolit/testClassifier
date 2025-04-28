"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[821],{491:(e,t,r)=>{r.d(t,{A:()=>m});var s=r(5043),n=r(197);const i=n.Ay.form`
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  margin-bottom: ${e=>e.theme.space[2]}px;
  @media screen and (min-width: 680px) {
    width: 40%;
  }
`,a=n.Ay.label`
  width: 100%;
`,o=n.Ay.input`
  font-size: ${e=>e.theme.fontSizes.m};
  width: 100%;
  padding: 9px;
  box-sizing: border-box;
  border-top: ${e=>e.theme.borders.bold};
  border-bottom: ${e=>e.theme.borders.bold};
  border-left: ${e=>e.theme.borders.none};
  border-right: ${e=>e.theme.borders.none};
  text-decoration: none;
  &:focus {
    border-top: ${e=>e.theme.borders.bold};
    border-bottom: ${e=>e.theme.borders.bold};
    border-left: ${e=>e.theme.borders.none};
    border-right: ${e=>e.theme.borders.none};
  }
`;var l=r(5408),d=r(5394),c=r(423),u=r(1036),h=r(6077),b=r(579);const m=e=>{let{submit:t,isLoading:r,back:n,isSubmiting:m}=e;const[x,y]=(0,s.useState)(""),f=e=>{e.preventDefault(),x.trim().length<1?u.oR.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442 \u0432 \u043f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443"):t(x.trim())};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(i,{onSubmit:f,children:[(0,b.jsx)(l.oq,{icon:c.lV$,type:"button",onClick:()=>{y(""),n()}}),(0,b.jsx)(a,{children:(0,b.jsx)(o,{name:"search",type:"text",onChange:e=>{const t=e.currentTarget.value.toLowerCase();y(t)},value:x})}),(0,b.jsx)(l.vd,{icon:d.zfp,type:"submit",onClick:f,disabled:m})]}),r&&(0,b.jsx)(h.A,{color:"#125b56",width:"100%"})]})}},4821:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var s=r(5043),n=r(3001),i=r(9621),a=r(1036),o=r(6077),l=r(197);const d=l.Ay.div`
  /* outline: 2px solid red; */
  margin-left: -${e=>e.theme.space[3]}px;
`;var c=r(7105),u=r(579);const h=e=>{let{byId:t}=e;const[r,l]=(0,s.useState)([]),[h,b]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=new AbortController;return async function(){try{b(!0);const t=await(0,i.G)(2,e.signal);l(t.data)}catch{a.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443")}finally{b(!1)}}(),()=>{l([]),e.abort()}}),[l]),(0,u.jsx)(u.Fragment,{children:h?(0,u.jsx)(o.A,{color:"#125b56",width:"100%"}):(0,u.jsxs)(d,{children:[(0,u.jsx)(n.A,{items:r,style:{padding:0},byId:t}),(0,u.jsx)(c.A,{})]})})};var b=r(898),m=r(491),x=r(7202),y=r(6196),f=r(7931);const p=l.Ay.div`
  max-height: 85vh;
`,g=l.Ay.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,j=()=>{const[e,t]=(0,s.useState)([]),[r,o]=(0,s.useState)([]),[l,d]=(0,s.useState)(null),[c,j]=(0,s.useState)(null),[v,A]=(0,s.useState)(""),[w,S]=(0,s.useState)(!1),[$,C]=(0,s.useState)([]),[I,k]=(0,s.useState)("materials");(0,s.useEffect)((()=>{o((()=>l?e.filter((e=>e.Unit===l)):e))}),[c,e,l]);const q=e=>{k("oneMaterial");const t=new AbortController;return async function(e){try{const r=await(0,i.eF)(e,t.signal);C([r.data])}catch{a.oR.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b")}}(e),()=>{t.abort()}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(b.A,{children:(0,u.jsxs)(g,{children:[(0,u.jsx)(m.A,{submit:e=>{k("search");if((0,f.qh)(e)){async function r(e){S(!0),t([]);try{const r=await(0,i.PH)(e);r&&(t(r.data),j((0,f.qI)(r.data)))}catch{a.oR.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{S(!1)}}A(e),r(e)}else{async function s(e){S(!0),t([]);try{const r=await(0,i.KU)(e);r&&(t(r.data),j((0,f.qI)(r.data)))}catch{a.oR.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{S(!1)}}s(e)}},isLoading:w,back:()=>{t([]),o([]),d(null),k("materials")},isSubmiting:w}),(0,u.jsx)("div",{style:{minWidth:"20%"},children:(null===e||void 0===e?void 0:e.length)>0&&(0,u.jsx)(y.A,{onSelect:e=>{d(e.value)},options:c})})]})}),(0,u.jsx)(b.A,{children:(0,u.jsxs)(p,{children:["materials"===I&&(0,u.jsx)(h,{byId:q}),"oneMaterial"===I&&(0,u.jsx)(n.A,{items:$,byId:q}),"search"===I&&(0,u.jsx)(x.A,{results:r,query:v,variant:"material",byId:q})]})})]})}},7202:(e,t,r)=>{r.d(t,{A:()=>a});r(5043);var s=r(3001),n=r(9444),i=r(579);const a=e=>{let{results:t,query:r,variant:a,byId:o}=e;return"material"===a?(0,i.jsx)("div",{children:t.length>0&&(0,i.jsx)(s.A,{items:t,query:r,byId:o})}):"service"===a?(0,i.jsx)("div",{children:t.length>0&&(0,i.jsx)(n.A,{items:t,query:r,byId:o})}):void 0}}}]);
//# sourceMappingURL=821.b3537440.chunk.js.map