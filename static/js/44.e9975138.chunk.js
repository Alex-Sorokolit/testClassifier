"use strict";(self.webpackChunkclassifier=self.webpackChunkclassifier||[]).push([[44],{1238:(e,r,o)=>{o.d(r,{A:()=>a});const a={formWrapper:"RegistrationForm_formWrapper__9O7CZ",form:"RegistrationForm_form__c8X43",inputWrapper:"RegistrationForm_inputWrapper__GNlbh",label:"RegistrationForm_label__zrkEU",input:"RegistrationForm_input__EgGQR",submitBtn:"RegistrationForm_submitBtn__12JmY",loginBtn:"RegistrationForm_loginBtn__WMC6w"}},2717:(e,r,o)=>{o.d(r,{ah:()=>t,ng:()=>m,oi:()=>i,pd:()=>d,q:()=>l,sm:()=>c});var a=o(197),n=o(5475),s=o(3892);const l=(0,a.Ay)(s.lV)`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`,i=a.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`,d=(0,a.Ay)(s.D0)`
  background-color: ${e=>e.theme.colors.backgroundWhite};
  border: ${e=>e.theme.borders.bold};
  border-color: ${e=>{let{bordercolor:r}=e;return r}};
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
    border-color: ${e=>{let{bordercolor:r}=e;return r}};
  }
`,t=(0,a.Ay)(n.k2)`
  &:hover,
  &:focus {
    color: ${e=>e.theme.colors.hover};
  }
`,m=a.Ay.div`
  color: ${e=>e.theme.colors.invalid};
  position: absolute;
  right: 0;
`,c=a.Ay.div`
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
`},5044:(e,r,o)=>{o.r(r),o.d(r,{default:()=>x});var a=o(5043),n=o(898),s=o(8313),l=o(3892),i=o(899),d=o(1180),t=o(5408),m=o(1238),c=o(2717),p=o(579);const h=()=>{const{onRegister:e}=(0,a.useContext)(s.I),r=i.Ik().shape({name:i.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:i.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),company:i.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),jobRole:i.Yj().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:i.Yj().email("Invalid email").required("Required"),phone:i.Yj().matches(/^\d+$/,"Invalid phone number").min(10,"Too short phone number").max(15,"Too long phone number").required("Required"),password:i.Yj().min(6,"Your password is short").max(16,"Your password is to long").matches(/[1-9]/,"Your password is little secure. Add a number!").matches(/[a-z\u0430-\u044fA-Z\u0410-\u042f\u0456\u0457\u0407\u0406\u0454\u0404]/,"Your password is little secure. Add a letter!").matches(/^[a-z\u0430-\u044fA-Z\u0410-\u042f\u0456\u0457\u0407\u0406\u0404\u04541-9]/,"Enter a valid Password*").required("Enter a Password*")});return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(l.l1,{initialValues:{name:"",email:"",password:""},validationSchema:r,onSubmit:(r,o)=>{const{resetForm:a}=o;e(r),a()},children:e=>(0,p.jsxs)(c.q,{children:[(0,p.jsx)("h2",{children:"Registration"}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"name",className:m.A.label,children:"Name"}),(0,p.jsx)(c.pd,{name:"name",type:"text",id:"name",autoFocus:!0,bordercolor:(0,d.n3)(e.errors.name,e.values.name,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"name",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"lastName",className:m.A.label,children:"Last Name"}),(0,p.jsx)(c.pd,{name:"lastName",type:"text",id:"lastName",bordercolor:(0,d.n3)(e.errors.lastName,e.values.lastName,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"lastName",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"company",className:m.A.label,children:"Company"}),(0,p.jsx)(c.pd,{name:"company",type:"text",id:"company",bordercolor:(0,d.n3)(e.errors.company,e.values.company,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"company",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"jobRole",className:m.A.label,children:"Job Role"}),(0,p.jsx)(c.pd,{name:"jobRole",type:"text",id:"jobRole",bordercolor:(0,d.n3)(e.errors.jobRole,e.values.jobRole,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"jobRole",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"phone",className:m.A.label,children:"Phone"}),(0,p.jsx)(c.pd,{name:"phone",type:"phone",id:"phone",bordercolor:(0,d.n3)(e.errors.phone,e.values.phone,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"phone",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"email",className:m.A.label,children:"Email"}),(0,p.jsx)(c.pd,{name:"email",type:"email",id:"email",bordercolor:(0,d.n3)(e.errors.email,e.values.email,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"email",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.oi,{children:[(0,p.jsx)("label",{htmlFor:"password",className:m.A.label,children:"Password"}),(0,p.jsx)(c.pd,{name:"password",type:"password",id:"password",bordercolor:(0,d.n3)(e.errors.password,e.values.password,"rgb(0, 0, 0)")}),(0,p.jsx)(l.Kw,{name:"password",render:e=>(0,p.jsx)(c.ng,{children:e})})]}),(0,p.jsxs)(c.sm,{children:[(0,p.jsx)(t.$n,{type:"submit",children:"Send"}),(0,p.jsx)(c.ah,{to:"/login",children:"LogIn"})]})]})})})},x=()=>(0,p.jsx)(n.A,{children:(0,p.jsx)(h,{})})}}]);
//# sourceMappingURL=44.e9975138.chunk.js.map