(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(11),n(12),n(2)),i=n.n(o),d=n(3),l=n(4),j=n(0),u=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(d.a)(i.a.mark((function t(e){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,c={description:n},t.next=5,fetch("http://localhost:5000/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"text-center mt-5",children:"PERN Todo List"}),Object(j.jsxs)("form",{className:"d-flex mt-5",onSubmit:s,children:[Object(j.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(t){return r(t.target.value)}}),Object(j.jsx)("button",{className:"btn btn-success",children:"Add"})]})]})},b=function(t){var e=t.todo,n=Object(c.useState)(e.description),r=Object(l.a)(n,2),s=r[0],a=r[1],o=function(){var t=Object(d.a)(i.a.mark((function t(n){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c={description:s},t.next=4,fetch("http://localhost:5000/todos/".concat(e.todo_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:t.sent,window.location="/";case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-warning","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"Edit"}),Object(j.jsx)("div",{className:"modal",id:"id".concat(e.todo_id),children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h4",{className:"modal-title",children:"Edit Todo"}),Object(j.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return a(t.target.value)}})}),Object(j.jsxs)("div",{className:"modal-footer",children:[Object(j.jsx)("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(t){return o(t)},children:"Edit"}),Object(j.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",children:"Close"})]})]})})})]})},h=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],s=function(){var t=Object(d.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/todos");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,r(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),a=function(){var t=Object(d.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5000/todos/".concat(e),{method:"DELETE"});case 2:t.sent,r(n.filter((function(t){return t.todo_id!==e})));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("table",{className:"table mt-5 text-center table-hover",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"Edit"}),Object(j.jsx)("th",{children:"Delete"})]})}),Object(j.jsx)("tbody",{children:n.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.description}),Object(j.jsx)("td",{children:Object(j.jsx)(b,{todo:t})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t.todo_id)},children:"Delete"})})]},t.todo_id)}))})]})})};var m=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u,{}),Object(j.jsx)(h,{})]})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6f1789e2.chunk.js.map