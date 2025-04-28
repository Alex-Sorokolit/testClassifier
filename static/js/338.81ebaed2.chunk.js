"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[338],{1238:(e,o,r)=>{r.d(o,{A:()=>n});const n={formWrapper:"RegistrationForm_formWrapper__9O7CZ",form:"RegistrationForm_form__c8X43",inputWrapper:"RegistrationForm_inputWrapper__GNlbh",label:"RegistrationForm_label__zrkEU",input:"RegistrationForm_input__EgGQR",submitBtn:"RegistrationForm_submitBtn__12JmY",loginBtn:"RegistrationForm_loginBtn__WMC6w"}},1338:(e,o,r)=>{r.r(o),r.d(o,{default:()=>g});var n=r(5043),i=r(898),a=r(3216),l=r(8313),t=r(9621),s=r(3892),d=r(899),m=r(1180),c=r(5408),p=r(1238),h=r(2717),x=r(579);const b=()=>{const{onCompleteRegistration:e,setToken:o}=(0,n.useContext)(l.I),{userId:r}=(0,a.g)(),i=(0,a.zy)(),b=d.Ik().shape({lastName:d.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),company:d.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),jobRole:d.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),phone:d.Yj().matches(/^\d+$/,"Invalid phone number").min(10,"Too short phone number").max(15,"Too long phone number").required("Required")});(0,n.useEffect)((()=>{const e=new URLSearchParams(i.search).get("token");console.log("tokenParam: ",e),e&&(o(e),t.Sh.set(e))}),[i,o]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(s.l1,{initialValues:{lastName:"",company:"",jobRole:"",phone:""},validationSchema:b,onSubmit:(o,n)=>{const{resetForm:i}=n,a={userId:r,...o};e(a),i()},children:e=>(0,x.jsxs)(h.q,{children:[(0,x.jsx)("h2",{children:"Complete registration"}),(0,x.jsxs)(h.oi,{children:[(0,x.jsx)("label",{htmlFor:"lastName",className:p.A.label,children:"Last Name"}),(0,x.jsx)(h.pd,{name:"lastName",type:"text",id:"lastName",bordercolor:(0,m.n3)(e.errors.lastName,e.values.lastName,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Kw,{name:"lastName",render:e=>(0,x.jsx)(h.ng,{children:e})})]}),(0,x.jsxs)(h.oi,{children:[(0,x.jsx)("label",{htmlFor:"company",className:p.A.label,children:"Company"}),(0,x.jsx)(h.pd,{name:"company",type:"text",id:"company",bordercolor:(0,m.n3)(e.errors.company,e.values.company,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Kw,{name:"company",render:e=>(0,x.jsx)(h.ng,{children:e})})]}),(0,x.jsxs)(h.oi,{children:[(0,x.jsx)("label",{htmlFor:"jobRole",className:p.A.label,children:"Job Role"}),(0,x.jsx)(h.pd,{name:"jobRole",type:"text",id:"jobRole",bordercolor:(0,m.n3)(e.errors.jobRole,e.values.jobRole,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Kw,{name:"jobRole",render:e=>(0,x.jsx)(h.ng,{children:e})})]}),(0,x.jsxs)(h.oi,{children:[(0,x.jsx)("label",{htmlFor:"phone",className:p.A.label,children:"Phone"}),(0,x.jsx)(h.pd,{name:"phone",type:"phone",id:"phone",bordercolor:(0,m.n3)(e.errors.phone,e.values.phone,"rgb(0, 0, 0)")}),(0,x.jsx)(s.Kw,{name:"phone",render:e=>(0,x.jsx)(h.ng,{children:e})})]}),(0,x.jsx)(h.sm,{children:(0,x.jsx)(c.$n,{type:"submit",children:"Send"})})]})})})},g=()=>(0,x.jsx)(i.A,{children:(0,x.jsx)(b,{})})},2717:(e,o,r)=>{r.d(o,{ah:()=>d,ng:()=>m,oi:()=>t,pd:()=>s,q:()=>l,sm:()=>c});var n=r(197),i=r(5475),a=r(3892);const l=(0,n.Ay)(a.lV)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,t=n.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,s=(0,n.Ay)(a.D0)`
  background-color: ${e=>e.theme.colors.backgroundWhite};
  border: ${e=>e.theme.borders.bold};
  border-color: ${e=>{let{bordercolor:o}=e;return o}};
  border-radius: ${e=>e.theme.radii.normal};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  /* padding: 12px 12px 12px 40px; */
  padding: 4px;
  color: ${e=>e.theme.colors.black};

  @media screen and (min-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }

  &:hover,
  &:focus {
    border: ${e=>e.theme.borders.bold};
    /* background-color: ${e=>e.theme.colors.backgroundWhite}; */
    border-color: ${e=>{let{bordercolor:o}=e;return o}};
  }
`,d=(0,n.Ay)(i.k2)`
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }
`,m=n.Ay.div`
  color: ${e=>e.theme.colors.invalid};
  position: absolute;
  right: 0;
`,c=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 20px;
  @media screen and (min-width: 480px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`}}]);
//# sourceMappingURL=338.81ebaed2.chunk.js.map