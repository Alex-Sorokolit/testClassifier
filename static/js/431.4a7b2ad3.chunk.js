"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[431],{7431:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var s=r(5043),i=r(3216),n=r(7931),d=r(1036),o=r(898),c=r(6077),l=r(197),h=r(5475);const a=(0,l.Ay)(h.k2)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${e=>e.theme.space[2]}px;
  margin-bottom: 15px;

  min-width: 100px;
  /* margin: ${e=>e.theme.space[2]}px; */
  padding-top: ${e=>e.theme.space[2]}px;
  padding-bottom: ${e=>e.theme.space[2]}px;
  padding-left: ${e=>e.theme.space[3]}px;
  padding-right: ${e=>e.theme.space[3]}px;

  border: ${e=>e.theme.borders.bold};
  border-radius: ${e=>e.theme.radii.normal};

  background-color: ${e=>e.disabled?e.theme.colors.muted:e.theme.colors.backgroundWhite};
  font-size: ${e=>e.theme.fontSizes.m};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    cursor: pointer;
    color: ${e=>e.theme.colors.white};
    border-color: ${e=>e.theme.colors.black};
    background-color: ${e=>e.theme.colors.hover};
  }
`,x=l.Ay.table`
  border-collapse: collapse;

  & caption {
    text-align: left;
  }

  & th,
  & td {
    padding: 2px 10px;
    border: 1px solid #2a2a2a;
  }

  & tr:hover {
    /* background-color: ${e=>e.theme.colors.white}; */
    /* box-shadow: ${e=>e.theme.shadows.shadow}; */
  }
`,j=l.Ay.tr`
  background-color: bisque;
`,p=l.Ay.tr`
  background-color: ${e=>e.theme.colors.backgroundMain};
`,m=l.Ay.tr`
  background-color: ${e=>e.theme.colors.backgroundMain};
`,u=l.Ay.td`
  white-space: nowrap;
  /* width: 100px; */
`;l.Ay.ul`
  margin-left: ${e=>e.theme.space[4]}px;

  /* border-left: 2px solid; */
`,l.Ay.li`
  /* margin-bottom: ${e=>e.theme.space[1]}px; */
  &:hover,
  &:focus {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-bottom: ${e=>e.theme.space[1]}px;
  }
`,l.Ay.div`
  display: flex;
  justify-content: space-between;
`;var b=r(423),g=r(5394),f=r(3156),$=r(6833),y=r(579);const A=()=>{const{id:e}=(0,i.g)(),[t,r]=(0,s.useState)(null),[l,h]=(0,s.useState)(!1),A=(0,i.zy)();return(0,s.useEffect)((()=>{const t=new AbortController;return async function(e){try{h(!0);const s=await(0,n.G6)(e,t.signal);r(s.data)}catch(s){d.oR.error("\u041d\u0435 \u0432\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u043f\u0440\u043e\u0435\u043a\u0442")}finally{h(!1)}}(e),()=>{r(null),t.abort()}}),[e]),(0,y.jsxs)(o.A,{children:[l&&(0,y.jsx)(c.A,{color:"#125b56",width:"100%"}),t&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(a,{to:A.state.from,children:[(0,y.jsx)(b.yCO,{}),"\u0414\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432"]}),(0,y.jsx)("h2",{children:t.Title}),(0,y.jsx)("div",{children:(0,y.jsxs)(x,{children:[(0,y.jsx)("caption",{children:"\u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438 \u0456 \u043f\u043e\u0441\u043b\u0443\u0433\u0438 \u0434\u0430\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0443"}),(0,y.jsx)("thead",{children:(0,y.jsxs)("tr",{children:[(0,y.jsx)("th",{}),(0,y.jsx)("th",{children:"\u041a\u043e\u0434"}),(0,y.jsx)("th",{children:"\u041e\u043f\u0438\u0441"}),(0,y.jsx)("th",{children:"\u0426\u0456\u043d\u0430 \u0440\u0438\u043d\u043a\u043e\u0432\u0430"}),(0,y.jsx)("th",{children:"\u0426\u0456\u043d\u0430 \u0432 \u0434\u0430\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0456"}),(0,y.jsx)("th",{children:"\u041e\u0434\u0438\u043d\u0438\u0446\u0456"}),(0,y.jsx)("th",{children:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430"}),(0,y.jsx)("th",{children:"\u0412\u0438\u0442\u0440\u0430\u0442\u0430 \u0432 \u0434\u0430\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u0456"})]})}),(0,y.jsxs)("tbody",{children:[t.Services&&t.Services.map((e=>{var t;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(j,{children:[(0,y.jsx)("td",{children:(0,y.jsx)(g.ZLk,{})}),(0,y.jsx)(u,{children:e.Code}),(0,y.jsx)("td",{children:e.DescriptionUA}),(0,y.jsx)("td",{children:e.PriceUAH}),(0,y.jsx)("td",{children:e.PriceInProject}),(0,y.jsx)("td",{children:e.Unit}),(0,y.jsx)("td",{children:e.Consumption}),(0,y.jsx)("td",{children:e.ConsumptionInProject})]},e._id),(null===(t=e.Materials)||void 0===t?void 0:t.length)>0&&e.Materials.map((e=>(0,y.jsxs)(p,{children:[(0,y.jsx)("td",{children:(0,y.jsx)($.TxN,{})}),(0,y.jsx)("td",{children:e.Code}),(0,y.jsx)("td",{children:e.DescriptionUA}),(0,y.jsx)("td",{children:e.PriceUAH}),(0,y.jsx)("td",{children:e.PriceInProject}),(0,y.jsx)("td",{children:e.Unit}),(0,y.jsx)("td",{children:e.Consumption}),(0,y.jsx)("td",{children:e.ConsumptionInProject})]},e._id)))]})})),t.Materials&&t.Materials.map((e=>(0,y.jsxs)(m,{children:[(0,y.jsx)("td",{children:(0,y.jsx)(f.DWl,{})}),(0,y.jsx)(u,{children:e.Code}),(0,y.jsx)("td",{children:e.DescriptionUA}),(0,y.jsx)("td",{children:e.PriceUAH}),(0,y.jsx)("td",{children:e.PriceInProject}),(0,y.jsx)("td",{children:e.Unit}),(0,y.jsx)("td",{children:e.Consumption}),(0,y.jsx)("td",{children:e.ConsumptionInProject})]},e._id)))]})]})})]})]})}}}]);
//# sourceMappingURL=431.4a7b2ad3.chunk.js.map