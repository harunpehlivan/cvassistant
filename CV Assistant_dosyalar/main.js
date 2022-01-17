(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),i=a.n(r),c=a(9),s=a.n(c),l=a(30),o=a(19),d=a(57),j=a(58),x=a(65),h=a(64),b=a(42),u=a(12),p=a(120),m=a(123),O=a(125),f=a(126),E=a(127),y=a(63),g=a(149),v=a(130),D=a(128),N=a(129),w=a(131),C=a(132),I=a(133),F=a(134),P=a(135),T=Object(p.a)((function(e){return{root:{flexGrow:1},gitButton:{marginRight:e.spacing(2)},menuIcon:{fontSize:"1.6em"},gitIcon:{fontSize:"1.3em"},scaleEfect:{transition:"all 0.2s ease-in-out","&:hover":{transform:"scale(1.1)"}},title:{flexGrow:1}}})),S=Object(u.g)((function(e){var t=e.history,a=i.a.useState(null),r=Object(b.a)(a,2),c=r[0],s=r[1],l=T(),o=function(e){null!==e&&t.push(e),s(null)};return Object(n.jsx)("div",{className:l.root,children:Object(n.jsx)(m.a,{position:"static",children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(f.a,{variant:"h5",className:l.title,children:"CV Assistant"}),Object(n.jsx)(E.a,{className:"".concat(l.gitButton," ").concat(l.scaleEfect),edge:"start",color:"inherit","aria-label":"menu",target:"_blank",href:"https://github.com/harunpehlivan",children:Object(n.jsx)(D.a,{className:l.gitIcon})}),Object(n.jsx)(E.a,{className:l.scaleEfect,edge:"start",color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(n.jsx)(N.a,{className:l.menuIcon})}),Object(n.jsxs)(y.a,{id:"simple-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){return o(null)},children:[Object(n.jsxs)(g.a,{onClick:function(){return o("/")},children:[Object(n.jsx)(v.a,{children:Object(n.jsx)(w.a,{})}),Object(n.jsx)(f.a,{children:"Introduction"})]}),Object(n.jsxs)(g.a,{onClick:function(){return o("/personal")},children:[Object(n.jsx)(v.a,{children:Object(n.jsx)(C.a,{})}),Object(n.jsx)(f.a,{children:"Personal"})]}),Object(n.jsxs)(g.a,{onClick:function(){return o("/education")},children:[Object(n.jsx)(v.a,{children:Object(n.jsx)(I.a,{})}),Object(n.jsx)(f.a,{children:"Education"})]}),Object(n.jsxs)(g.a,{onClick:function(){return o("/experience")},children:[Object(n.jsx)(v.a,{children:Object(n.jsx)(F.a,{})}),Object(n.jsx)(f.a,{children:"Experience"})]}),Object(n.jsxs)(g.a,{onClick:function(){return o("/confirm")},children:[Object(n.jsx)(v.a,{children:Object(n.jsx)(P.a,{})}),Object(n.jsx)(f.a,{children:"Confirm"})]})]})]})})})})),k=a(136),W=a(137),B=a(138),z=a(13),A=(a(91),Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginTop:"30px"},centering:{width:"100%",align:"centre"},customFont:{fontSize:20}}}))),G=function(){var e=A();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsxs)(k.a,{container:!0,spacing:3,direction:"column",alignItems:"center",style:{minHeight:"50vh",margin:0,width:"100%"},children:[Object(n.jsx)(k.a,{item:!0,xs:6,className:e.title,children:Object(n.jsx)(f.a,{variant:"h4",children:"Introduction"})}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",paragraph:!0,className:e.customFont,children:"Welcome to the CV Assistant, created by Sasoun Torossian based off the Odin project curriculum. This assistant is made using React and Material UI, with some additional libraries included to streamline the experience."}),Object(n.jsx)(f.a,{variant:"body1",paragraph:!0,className:e.customFont,children:"Please go through the assistant and fill out all the necessary details."}),Object(n.jsx)(f.a,{variant:"body1",className:e.customFont,children:"You can go back or forward at any time using the below arrow keys, or the menu button in the top right. Your progress will be saved when jumping between pages, and you will be able to see an overview of your progress on the final confirmation page."})]}),Object(n.jsx)(k.a,{item:!0,xs:6,className:e.centering,children:Object(n.jsx)(z.b,{to:"/personal",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(B.a,{}),fullWidth:!0,children:"Next Page"})})})]})})},H=a(147),R=a(139),L=Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginTop:"30px"},centering:{width:"100%",align:"centre"},textField:{width:"100%"},fullWidth:{width:"100%"}}})),V=function(e){var t=e.values,a=e.handleChange,r=L();return Object(n.jsx)("div",{className:r.root,children:Object(n.jsxs)(k.a,{container:!0,spacing:3,direction:"column",alignItems:"center",style:{minHeight:"50vh",margin:0,width:"100%"},children:[Object(n.jsx)(k.a,{item:!0,xs:6,className:r.title,children:Object(n.jsx)(f.a,{variant:"h4",children:"Personal Details"})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:r.centering,children:Object(n.jsxs)("form",{autoComplete:"off",onChange:a,children:[Object(n.jsx)(H.a,{className:r.fullWidth,type:"text",label:"Name",value:t.personal.name,onBlur:a,inputProps:{"data-field-type":"name",autocomplete:"new-password",form:{autocomplete:"off"}},error:!!t.personal.nameError&&t.personal.nameError.length>1,helperText:t.personal.nameError}),Object(n.jsx)(H.a,{className:r.fullWidth,type:"email",label:"Email",value:t.personal.email,onBlur:a,inputProps:{"data-field-type":"email",autocomplete:"new-password",form:{autocomplete:"off"}},error:!!t.personal.emailError&&t.personal.emailError.length>1,helperText:t.personal.emailError}),Object(n.jsx)(H.a,{className:r.fullWidth,type:"text",label:"Phone",value:t.personal.phone,onBlur:a,inputProps:{"data-field-type":"phone",autocomplete:"new-password",form:{autocomplete:"off"}},error:!!t.personal.phoneError&&t.personal.phoneError.length>1,helperText:t.personal.phoneError})]})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:r.centering,children:Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-between",spacing:2,children:[Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",startIcon:Object(n.jsx)(R.a,{}),children:"Prev Page"})})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/education",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",endIcon:Object(n.jsx)(B.a,{}),children:"Next Page"})})})]})})]})})},M=a(140),Y=a(141),q=a(142),J=a(143),Z=Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginTop:"30px"},rootCard:{marginTop:10,marginBottom:10},centering:{width:"100%",align:"centre"},textField:{width:"90%"}}})),U=function(e){var t=e.values,a=e.handleChange,r=e.addEdu,i=e.removeEdu,c=Z();return Object(n.jsx)("div",{className:c.root,children:Object(n.jsxs)(k.a,{container:!0,direction:"column",alignItems:"center",spacing:2,style:{minHeight:"50vh",margin:0,width:"100%"},children:[Object(n.jsx)(k.a,{item:!0,xs:6,className:c.title,children:Object(n.jsx)(f.a,{variant:"h4",children:"Education Details"})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:c.centering,children:Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",onChange:a,children:t.education.map((function(e,t){return Object(n.jsx)(M.a,{className:c.rootCard,raised:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",align:"center",justify:"center",style:{minHeight:"30vh"},children:[Object(n.jsx)(k.a,{item:!0,xs:11,children:Object(n.jsx)(f.a,{variant:"h5",children:"Education ".concat(t+1)})}),Object(n.jsx)(k.a,{item:!0,xs:1,children:Object(n.jsx)(E.a,{edge:"start",color:"secondary",onClick:function(e){return function(e,t){e.preventDefault(),i(t)}(e,t)},children:Object(n.jsx)(q.a,{})})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"text",label:"School ".concat(t+1),value:e.school,onBlur:a,inputProps:{"data-id":t,"data-field-type":"school"},error:!!e.schoolError&&e.schoolError.length>1,helperText:e.schoolError})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"text",label:"Course ".concat(t+1),value:e.course,onBlur:a,inputProps:{"data-id":t,"data-field-type":"course"},error:!!e.courseError&&e.courseError.length>1,helperText:e.courseError})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"date",label:"Start Date ".concat(t+1),value:e.startDateEdu,onBlur:a,inputProps:{"data-id":t,"data-field-type":"startDateEdu"},InputLabelProps:{shrink:!0},error:!!e.startDateEduError&&e.startDateEduError.length>1,helperText:e.startDateEduError})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"date",label:"End Date ".concat(t+1),value:e.endDateEdu,onBlur:a,inputProps:{"data-id":t,"data-field-type":"endDateEdu"},InputLabelProps:{shrink:!0},error:!!e.endDateEduError&&e.endDateEduError.length>1,helperText:e.endDateEduError})})]})})},t)}))})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:c.centering,children:Object(n.jsx)(W.a,{fullWidth:!0,onClick:function(e){e.preventDefault(),r(e)},variant:"contained",color:"primary",endIcon:Object(n.jsx)(J.a,{}),children:"Add new education"})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:c.centering,children:Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-between",spacing:2,children:[Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/personal",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",startIcon:Object(n.jsx)(R.a,{}),children:"Prev Page"})})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/experience",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",endIcon:Object(n.jsx)(B.a,{}),children:"Next Page"})})})]})})]})})},$=Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginTop:"30px"},rootCard:{marginTop:10,marginBottom:10},centering:{width:"100%",align:"centre"},textField:{width:"90%"},textFieldMultiline:{width:"95%"}}})),_=function(e){var t=e.values,a=e.handleChange,r=e.addExp,i=e.removeExp,c=$();return Object(n.jsx)("div",{className:c.root,children:Object(n.jsxs)(k.a,{container:!0,direction:"column",alignItems:"center",spacing:2,style:{minHeight:"50vh",margin:0,width:"100%"},children:[Object(n.jsx)(k.a,{item:!0,xs:6,className:c.title,children:Object(n.jsx)(f.a,{variant:"h4",children:"Experience Details"})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:c.centering,children:Object(n.jsx)("form",{noValidate:!0,autoComplete:"off",onChange:a,children:t.experience.map((function(e,t){return Object(n.jsx)(M.a,{className:c.rootCard,raised:!0,children:Object(n.jsx)(Y.a,{children:Object(n.jsxs)(k.a,{container:!0,spacing:2,alignItems:"center",align:"center",style:{minHeight:"30vh"},children:[Object(n.jsx)(k.a,{item:!0,xs:11,children:Object(n.jsx)(f.a,{variant:"h5",align:"center",children:"Experience ".concat(t+1)})}),Object(n.jsx)(k.a,{item:!0,xs:1,children:Object(n.jsx)(E.a,{edge:"start",color:"secondary",onClick:function(e){return function(e,t){e.preventDefault(),i(t)}(e,t)},children:Object(n.jsx)(q.a,{})})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"text",label:"Company ".concat(t+1),value:e.company,onBlur:a,inputProps:{"data-id":t,"data-field-type":"company"},error:!!e.companyError&&e.companyError.length>1,helperText:e.companyError})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"text",label:"Role ".concat(t+1),value:e.role,onBlur:a,inputProps:{"data-id":t,"data-field-type":"role"},error:!!e.roleError&&e.roleError.length>1,helperText:e.roleError})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"date",label:"Start Date ".concat(t+1),value:e.startDateExp,onBlur:a,inputProps:{"data-id":t,"data-field-type":"startDateExp"},InputLabelProps:{shrink:!0},error:!!e.startDateExpError&&e.startDateExpError.length>1,helperText:e.startDateExpError})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(H.a,{className:c.textField,type:"date",label:"End Date ".concat(t+1),value:e.endDateExp,onBlur:a,inputProps:{"data-id":t,"data-field-type":"endDateExp"},InputLabelProps:{shrink:!0},error:!!e.endDateExpError&&e.endDateExpError.length>1,helperText:e.endDateExpError})}),Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(H.a,{className:c.textFieldMultiline,type:"text",label:"Details of job ".concat(t+1),value:e.details,onBlur:a,inputProps:{"data-id":t,"data-field-type":"details"},multiline:!0,margin:"none",rows:5,error:!!e.detailsError&&e.detailsError.length>1,helperText:e.detailsError})})]})})},t)}))})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:c.centering,children:Object(n.jsx)(W.a,{fullWidth:!0,onClick:function(e){e.preventDefault(),r()},variant:"contained",color:"primary",endIcon:Object(n.jsx)(J.a,{}),children:"Add new experience"})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:c.centering,children:Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-between",spacing:2,children:[Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/education",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",startIcon:Object(n.jsx)(R.a,{}),children:"Prev Page"})})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/confirm",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",endIcon:Object(n.jsx)(B.a,{}),children:"Next Page"})})})]})})]})})},K=a(144),Q=a(145),X=Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginTop:"30px"},centering:{width:"100%",align:"centre"},textField:{width:"100%"},fullWidth:{width:"100%"},boldField:{fontSize:19,fontWeight:600},normal:{fontSize:19},error:{fontSize:19,color:"red"}}})),ee=function(e){var t=e.values,a=X(),r=function(e){return e||"Required"},i=function(e){return e?a.normal:a.error};return Object(n.jsx)("div",{className:a.root,children:Object(n.jsxs)(k.a,{container:!0,spacing:2,direction:"column",alignItems:"center",style:{margin:0,width:"100%"},children:[Object(n.jsx)(k.a,{item:!0,xs:6,className:a.title,children:Object(n.jsx)(f.a,{variant:"h4",children:"Confirm Details"})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:a.centering,children:Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-between",align:"left",spacing:3,children:[Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"flex-start",spacing:1,children:[Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(f.a,{variant:"h5",children:"Personal"})}),Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(K.a,{variant:"fullWidth"})}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Name: "}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(t.personal.name),children:r(t.personal.name)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Email: "}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(t.personal.email),children:r(t.personal.email)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Phone: "}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(t.personal.phone),children:r(t.personal.phone)})]})]})}),Object(n.jsx)(k.a,{item:!0,xs:12,children:t.education.map((function(e,t){return Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"flex-start",spacing:1,children:[Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(f.a,{variant:"h5",children:"Education ".concat(t+1)})}),Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(K.a,{variant:"fullWidth"})}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"School ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.school),children:r(e.school)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Course ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.course),children:r(e.course)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Start Date ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.startDateEdu),children:r(e.startDateEdu)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"End Date ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.endDateEdu),children:r(e.endDateEdu)})]})]},t)}))}),Object(n.jsx)(k.a,{item:!0,xs:12,children:t.experience.map((function(e,t){return Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"flex-start",spacing:1,children:[Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(f.a,{variant:"h5",children:"Experience ".concat(t+1)})}),Object(n.jsx)(k.a,{item:!0,xs:12,children:Object(n.jsx)(K.a,{variant:"fullWidth"})}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Company ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.company),children:r(e.company)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Role ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.role),children:r(e.role)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Start Date ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.startDateExp),children:r(e.startDateExp)})]}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"End Date ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:i(e.endDateExp),children:r(e.endDateExp)})]}),Object(n.jsxs)(k.a,{item:!0,xs:12,children:[Object(n.jsx)(f.a,{variant:"body1",display:"inline",className:a.boldField,children:"Details ".concat(t+1,": ")}),Object(n.jsx)(f.a,{variant:"body1",paragraph:!0,display:(c=e.details,c?"initial":"inline"),className:i(e.details),children:r(e.details)})]})]},t);var c}))})]})}),Object(n.jsx)(k.a,{item:!0,xs:6,className:a.centering,children:Object(n.jsxs)(k.a,{container:!0,direction:"row",justify:"space-between",spacing:2,children:[Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/experience",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",startIcon:Object(n.jsx)(R.a,{}),children:"Prev Page"})})}),Object(n.jsx)(k.a,{item:!0,xs:6,children:Object(n.jsx)(z.b,{to:"/success",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{fullWidth:!0,variant:"contained",color:"primary",disabled:function(){var e=!1;return Object.keys(t).forEach((function(a){if(Array.isArray(t[a]))0===t[a].length&&(e=!0),t[a].forEach((function(t){for(var a=0,n=Object.entries(t);a<n.length;a++){var r=Object(b.a)(n[a],2),i=r[0],c=r[1];(["school","course","startDateEdu","endDateEdu"].includes(i)||["company","role","startDateExp","endDateExp","details"].includes(i))&&(c||(e=!0))}}));else for(var n=0,r=Object.entries(t[a]);n<r.length;n++){var i=Object(b.a)(r[n],2),c=i[0],s=i[1];["name","email","phone"].includes(c)&&(s||(e=!0))}})),e}(),endIcon:Object(n.jsx)(Q.a,{}),children:"Finish"})})})]})})]})})},te=a(146),ae=Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginTop:"30px"},centering:{width:"100%",align:"centre"},customFont:{fontSize:20}}})),ne=function(){var e=ae();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsxs)(k.a,{container:!0,spacing:3,direction:"column",alignItems:"center",style:{minHeight:"50vh",margin:0,width:"100%"},children:[Object(n.jsx)(k.a,{item:!0,xs:6,className:e.title,children:Object(n.jsx)(f.a,{variant:"h4",children:"Success"})}),Object(n.jsxs)(k.a,{item:!0,xs:6,children:[Object(n.jsx)(f.a,{variant:"body1",paragraph:!0,className:e.customFont,children:"You have completed the cv assistant. We hope you had an excellent experience."}),Object(n.jsx)(f.a,{variant:"body1",className:e.customFont,children:"Please use the below button to go back to the start. You can redo the entire assistant again if you so choose."})]}),Object(n.jsx)(k.a,{item:!0,xs:6,className:e.centering,children:Object(n.jsx)(z.b,{to:"/CV-Application",style:{textDecoration:"none"},children:Object(n.jsx)(W.a,{variant:"contained",color:"primary",endIcon:Object(n.jsx)(te.a,{}),fullWidth:!0,children:"Go Back To Introduction"})})})]})})},re=a(62),ie=function(e){var t=e.values,a=e.handleChange,r=e.addEducation,i=e.removeEducation,c=e.addExperience,s=e.removeExperience,l=Object(u.f)();return Object(n.jsxs)(re.a,{location:l,children:[Object(n.jsx)(u.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(G,Object(o.a)(Object(o.a)({},e),{},{handleChange:a}))}}),Object(n.jsx)(u.a,{path:"/personal",render:function(e){return Object(n.jsx)(V,Object(o.a)(Object(o.a)({},e),{},{values:t,handleChange:a}))}}),Object(n.jsx)(u.a,{path:"/education",render:function(e){return Object(n.jsx)(U,Object(o.a)(Object(o.a)({},e),{},{values:t,handleChange:a,addEdu:r,removeEdu:i}))}}),Object(n.jsx)(u.a,{path:"/experience",render:function(e){return Object(n.jsx)(_,Object(o.a)(Object(o.a)({},e),{},{values:t,handleChange:a,addExp:c,removeExp:s}))}}),Object(n.jsx)(u.a,{path:"/confirm",render:function(e){return Object(n.jsx)(ee,Object(o.a)(Object(o.a)({},e),{},{values:t}))}}),Object(n.jsx)(u.a,{exact:!0,path:"/success",component:ne})]})},ce=(a(89),function(e){Object(x.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).isEmptyInput=function(e){return""===e?"Required":" "},n.isInvalidEmail=function(e){return""===e?"Required":n.validEmail(e)?" ":"Invalid"},n.validEmail=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},n.handleChange=function(e){var t=e.target.dataset.fieldType,a=e.target.dataset.id,r=e.target.value;if(["name","email","phone"].includes(t)){var i=Object(o.a)({},n.state.personal);i[t]=r,i[t+"Error"]="email"===t?n.isInvalidEmail(r):n.isEmptyInput(r),n.setState({personal:i})}else if(["school","course","startDateEdu","endDateEdu"].includes(t)){var c=Object(l.a)(n.state.education);c[a][t]=r,c[a][t+"Error"]=n.isEmptyInput(r),n.setState({education:c})}else if(["company","role","startDateExp","endDateExp","details"].includes(t)){var s=Object(l.a)(n.state.experience);s[a][t]=r,s[a][t+"Error"]=n.isEmptyInput(r),n.setState({experience:s})}},n.addEducation=function(){n.setState({education:[].concat(Object(l.a)(n.state.education),[{school:"",course:"",startDateEdu:"",endDateEdu:"",schoolError:" ",courseError:" ",startDateEduError:" ",endDateEduError:" "}])})},n.removeEducation=function(e){var t=Object(l.a)(n.state.education);t.splice(e,1),n.setState({education:t})},n.addExperience=function(){n.setState({experience:[].concat(Object(l.a)(n.state.experience),[{company:"",role:"",startDateExp:"",endDateExp:"",details:"",companyError:" ",roleError:" ",startDateExpError:" ",endDateExpError:" ",detailsError:" "}])})},n.removeExperience=function(e){var t=Object(l.a)(n.state.experience);t.splice(e,1),n.setState({experience:t})},n.state={personal:{name:"",email:"",phone:"",nameError:" ",emailError:" ",phoneError:" "},education:[{school:"",course:"",startDateEdu:"",endDateEdu:"",schoolError:" ",courseError:" ",startDateEduError:" ",endDateEduError:" "}],experience:[{company:"",role:"",startDateExp:"",endDateExp:"",details:"",companyError:" ",roleError:" ",startDateExpError:" ",endDateExpError:" ",detailsError:" "}]},n}return Object(j.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(z.a,{children:[Object(n.jsx)(S,{}),Object(n.jsx)(ie,{values:this.state,handleChange:this.handleChange,addEducation:this.addEducation,removeEducation:this.removeEducation,addExperience:this.addExperience,removeExperience:this.removeExperience})]})}}]),a}(r.Component));s.a.render(Object(n.jsx)(ce,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.e2b23881.chunk.js.map