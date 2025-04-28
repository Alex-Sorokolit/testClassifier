"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[312],{491:(e,t,r)=>{r.d(t,{A:()=>m});var s=r(5043),n=r(197);const o=n.Ay.form`
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
`,i=n.Ay.label`
  width: 100%;
`,a=n.Ay.input`
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
`;var c=r(5408),d=r(5394),l=r(423),b=r(1036),h=r(6077),u=r(579);const m=e=>{let{submit:t,isLoading:r,back:n,isSubmiting:m}=e;const[x,y]=(0,s.useState)(""),v=e=>{e.preventDefault(),x.trim().length<1?b.oR.error("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442 \u0432 \u043f\u043e\u043b\u0435 \u043f\u043e\u0448\u0443\u043a\u0443"):t(x.trim())};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o,{onSubmit:v,children:[(0,u.jsx)(c.oq,{icon:l.lV$,type:"button",onClick:()=>{y(""),n()}}),(0,u.jsx)(i,{children:(0,u.jsx)(a,{name:"search",type:"text",onChange:e=>{const t=e.currentTarget.value.toLowerCase();y(t)},value:x})}),(0,u.jsx)(c.vd,{icon:d.zfp,type:"submit",onClick:v,disabled:m})]}),r&&(0,u.jsx)(h.A,{color:"#125b56",width:"100%"})]})}},1312:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var s=r(5043),n=r(9444),o=r(9621),i=r(1036),a=r(6077),c=r(197);const d=c.Ay.div`
  /* outline: 2px solid red; */
  margin-left: -${e=>e.theme.space[3]}px;
`;var l=r(579);const b=e=>{let{byId:t}=e;const[r,c]=(0,s.useState)([]),[b,h]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=new AbortController;return async function(){try{h(!0);const t=await(0,o.be)(2,e.signal);c(t.data)}catch{i.oR.error("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a, \u0441\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443")}finally{h(!1)}}(),()=>{c([]),e.abort()}}),[c]),(0,l.jsx)(l.Fragment,{children:b?(0,l.jsx)(a.A,{color:"#125b56",width:"100%"}):(0,l.jsx)(d,{children:(0,l.jsx)(n.A,{items:r,style:{padding:0},byId:t})})})};var h=r(898),u=r(491),m=r(7931);const x=c.Ay.div`
  max-height: 85vh;
`;var y=r(7202);const v=()=>{const[e,t]=(0,s.useState)([]),[r,a]=(0,s.useState)(""),[c,d]=(0,s.useState)(!1),[v,f]=(0,s.useState)("services"),[g,p]=(0,s.useState)([]),j=e=>{console.log("service id: ",e),f("oneService");const t=new AbortController;return async function(e){try{const r=await(0,o.Y8)(e,t.signal);p([r.data])}catch{i.oR.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u0441\u0435\u0440\u0432\u0456\u0441")}}(e),()=>{t.abort()}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.A,{children:(0,l.jsx)(u.A,{submit:e=>{f("search");if((0,m.qh)(e)){async function r(e){d(!0),t([]);try{const r=await(0,o.tu)(e);r&&t(r.data)}catch{i.oR.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{d(!1)}}a(e),r(e)}else{async function s(e){d(!0),t([]);try{const r=await(0,o.Wc)(e);r&&t(r.data)}catch{i.oR.error(`\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u0439\u0442\u0438 ${e}`,{autoClose:3e3})}finally{d(!1)}}s(e)}},isLoading:c,back:()=>{t([]),f("services")},isSubmiting:c})}),(0,l.jsx)(h.A,{children:(0,l.jsxs)(x,{children:["services"===v&&(0,l.jsx)(b,{byId:j}),"oneService"===v&&(0,l.jsx)(n.A,{items:g,byId:j}),"search"===v&&(0,l.jsx)(y.A,{results:e,query:r,variant:"service",byId:j})]})})]})}},7202:(e,t,r)=>{r.d(t,{A:()=>i});r(5043);var s=r(3001),n=r(9444),o=r(579);const i=e=>{let{results:t,query:r,variant:i,byId:a}=e;return"material"===i?(0,o.jsx)("div",{children:t.length>0&&(0,o.jsx)(s.A,{items:t,query:r,byId:a})}):"service"===i?(0,o.jsx)("div",{children:t.length>0&&(0,o.jsx)(n.A,{items:t,query:r,byId:a})}):void 0}}}]);
//# sourceMappingURL=312.1322a688.chunk.js.map