(this.webpackJsonptest_task=this.webpackJsonptest_task||[]).push([[0],{10:function(e,a,t){e.exports={header:"Layout_header__3XEvf",logo:"Layout_logo__1RgOa",elem:"Layout_elem__1ahBW",link:"Layout_link__2BqL6",main:"Layout_main__3fQfw",footer:"Layout_footer__8C9LR",footer__text:"Layout_footer__text__3aXq8"}},12:function(e,a,t){e.exports={previewPage:"PreviewPage_previewPage__1-oAu",block:"PreviewPage_block__SEA5s",header:"PreviewPage_header__2FaDX",text:"PreviewPage_text__2I8jV",lists:"PreviewPage_lists__3MteY",item:"PreviewPage_item__1BKYG"}},28:function(e,a,t){e.exports={formPage:"formPage_formPage__1jZgj"}},33:function(e,a,t){},4:function(e,a,t){e.exports={form:"PersonalForm_form__NLR_z",header:"PersonalForm_header__cFF3z",header_wrapper:"PersonalForm_header_wrapper__124R7",label:"PersonalForm_label__2Q0M0",input:"PersonalForm_input__3ZQz9",block:"PersonalForm_block__Xj2td",btn:"PersonalForm_btn__2vLmG",wrapper:"PersonalForm_wrapper__q-98q",item:"PersonalForm_item__3b09Q",btn__delete:"PersonalForm_btn__delete__3pmwL",btn__save:"PersonalForm_btn__save__1otdu"}},46:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(19),s=t.n(n),l=(t(33),t(10)),i=t.n(l),o=t(13),j=t.p+"static/media/Logo.e1ab4bce.svg",b=t(1);function d(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{className:i.a.header,children:[Object(b.jsx)("img",{src:j,alt:"Logo company",className:i.a.logo}),Object(b.jsxs)("div",{className:i.a.elem,children:[Object(b.jsx)(o.b,{to:"/form",className:i.a.link,children:"\u0424\u043e\u0440\u043c\u0430"}),Object(b.jsx)(o.b,{to:"/preview",className:i.a.link,children:"\u041f\u0440\u0435\u0432\u044c\u044e"})]})]})})}function h(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("footer",{className:i.a.footer,children:Object(b.jsx)("span",{className:i.a.footer__text,children:"all rights reserved"})})})}function m(e){var a=e.children;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsx)("main",{className:i.a.main,children:a}),Object(b.jsx)(h,{})]})}var _=t(3),u=t(6),O=t(25),x=t(4),p=t.n(x),f=t(14),g=t(5),N=t(20),v=Object(N.b)({name:"defaultValues",initialState:{father:[],children:[]},reducers:{getFather:function(e,a){return Object(u.a)(Object(u.a)({},e),{},{father:a.payload})},getChildren:function(e,a){return Object(u.a)(Object(u.a)({},e),{},{children:Object(g.a)(a.payload)})}}}),P=v.actions,F=P.getFather,w=P.getChildren,y=v.reducer;function k(){var e=Object(_.f)(),a=Object(f.c)((function(e){return e.default})),t=Object(f.b)(),c=Object(O.b)(),r=c.register,n=c.handleSubmit,s=c.control,l=c.reset,i=Object(O.a)({control:s,name:"baby"}),o=i.fields,j=i.append,d=i.remove;return console.log(a),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{className:p.a.form,onSubmit:n((function(a){!function(a){var c=a.father,r=a.baby;t(F(c)),t(w(r)),l(),e.push("/preview")}(a)})),children:[Object(b.jsx)("div",{className:p.a.header_wrapper,children:Object(b.jsx)("h2",{className:p.a.header,children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"})}),Object(b.jsxs)("label",{htmlFor:"name",className:p.a.label,children:["\u0418\u043c\u044f",Object(b.jsx)("input",Object(u.a)({type:"text",id:"name",className:p.a.input},r("father.name",{pattern:/[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]{3}/})))]}),Object(b.jsxs)("label",{htmlFor:"age",className:p.a.label,children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442",Object(b.jsx)("input",Object(u.a)({type:"text",id:"age",className:p.a.input},r("father.age",{pattern:/[0-9]/})))]}),Object(b.jsxs)("div",{className:p.a.block,children:[Object(b.jsx)("h2",{className:p.a.header,children:"\u0414\u0435\u0442\u0438 (\u043c\u0430\u043a\u0441. 5)"}),o.length<=4&&Object(b.jsx)("button",{className:p.a.btn,onClick:function(){j({childName:"Andrey",childAge:"2"})},type:"button",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0431\u0435\u043d\u043a\u0430"})]}),Object(b.jsx)("ul",{className:p.a.wrapper,children:o.map((function(e,a){return Object(b.jsxs)("li",{className:p.a.item,children:[Object(b.jsxs)("label",{htmlFor:"childName".concat(a),className:p.a.label,children:["\u0418\u043c\u044f",Object(b.jsx)("input",Object(u.a)(Object(u.a)({id:"childName".concat(a)},r("baby.".concat(a,".childName"),{pattern:/[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]{3}/})),{},{className:p.a.input}))]}),Object(b.jsxs)("label",{htmlFor:"childAge".concat(a),className:p.a.label,children:["\u0412\u043e\u0437\u0440\u0430\u0441\u0442",Object(b.jsx)("input",Object(u.a)(Object(u.a)({id:"childAge".concat(a)},r("baby.".concat(a,".childAge"),{pattern:/[0-9]/})),{},{className:p.a.input}))]}),Object(b.jsx)("button",{type:"button",onClick:function(){return d(a)},className:p.a.btn__delete,children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e.id)}))}),Object(b.jsx)("button",{className:p.a.btn__save,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})}var L=t(28),A=t.n(L);function z(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:A.a.formPage,children:Object(b.jsx)(k,{})})})}var C=t(12),S=t.n(C);function q(){var e=Object(f.c)((function(e){return e.default}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:S.a.previewPage,children:[Object(b.jsxs)("div",{className:S.a.block,children:[Object(b.jsx)("h2",{className:S.a.header,children:"\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"}),Object(b.jsxs)("p",{className:S.a.text,children:[e.father.name," ",e.father.age]})]}),Object(b.jsxs)("ul",{className:S.a.lists,children:[Object(b.jsx)("h2",{className:S.a.header,children:"\u0414\u0435\u0442\u0438"}),e.children.map((function(e,a){return Object(b.jsxs)("li",{className:S.a.item,children:[e.childName," ",e.childAge]},a)}))]})]})})}var B=function(){var e=Object(_.f)(),a=Object(_.g)();return r.a.useEffect((function(){console.log(a.pathname),(a.pathname="test_task_alef")&&e.push("/form")}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m,{children:Object(b.jsxs)(_.c,{children:[Object(b.jsx)(_.a,{exact:!0,path:"/form",children:Object(b.jsx)(z,{})}),Object(b.jsx)(_.a,{path:"/preview",children:Object(b.jsx)(q,{})}),Object(b.jsx)(_.a,{path:"*",children:"Here 404 page"})]})})})},E=Object(N.a)({reducer:{default:y}});t(45);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f.a,{store:E,children:Object(b.jsx)(o.a,{children:Object(b.jsx)(B,{})})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.2a50a5e5.chunk.js.map