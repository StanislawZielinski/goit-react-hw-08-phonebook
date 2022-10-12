"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[796],{5796:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(7762),r=t(5861),s=t(885),c=t(4687),i=t.n(c),l=t(2791),o=t(184),d=function(e){var n=e.handleSubmit;return(0,o.jsxs)("form",{className:"form",onSubmit:n,children:[(0,o.jsx)("p",{className:"title",children:"Add new contact"}),(0,o.jsxs)("div",{className:"input-wrapper",children:[(0,o.jsxs)("label",{className:"label",children:["Name",(0,o.jsx)("input",{className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:"label",children:["Phone number",(0,o.jsx)("input",{className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,o.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})},u=function(e){var n=e.deleteContact,t=e.id;return(0,o.jsx)("button",{className:"button-contact",onClick:function(){return n(t)},children:"delete"})},m=function(e){var n=e.onChange;return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"title",children:"Contacts"}),(0,o.jsx)("p",{className:"filter-title",children:"filter contacts by name"}),(0,o.jsx)("input",{className:"input",onChange:n})]})},p=function(e){var n=e.renderContacts,t=e.contacts,a=e.filter;return(0,o.jsx)("ul",{className:"contactsList-wrapper",children:n(t,a)})},h=t(3661),x=t(5926),f=t(643),b=t(5048),v=t(5562),j=t.n(v),N=t(6157),w=t(3451),g=function(e){var n=e.children,t=(0,l.useState)(!1),a=(0,s.Z)(t,2),r=a[0],c=a[1],i=function(){return c(!1)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:"button-contact-update",onClick:function(){return c(!0)},children:"update"}),(0,o.jsxs)(w.Z,{show:r,onHide:i,children:[(0,o.jsx)(w.Z.Header,{closeButton:!0,children:(0,o.jsx)(w.Z.Title,{children:"Update"})}),(0,o.jsx)(w.Z.Body,{children:n}),(0,o.jsx)(w.Z.Footer,{children:(0,o.jsx)(N.Z,{variant:"secondary",onClick:i,children:"Close"})})]})]})},k=function(e){var n=e.handleUpdate,t=e.id,a=e.name,r=e.number;return(0,o.jsxs)("form",{className:"form",onSubmit:function(e){return n(e,t)},children:[(0,o.jsxs)("div",{className:"input-wrapper",children:[(0,o.jsxs)("label",{className:"label",children:["Name",(0,o.jsx)("input",{placeholder:a,className:"input",type:"text",name:"newName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,o.jsxs)("label",{className:"label",children:["Phone number",(0,o.jsx)("input",{className:"input",placeholder:r,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,o.jsx)("button",{className:"button",type:"submit",children:"Update"})]})},y=function(){var e=(0,x.ws)(),n=e.data,t=e.isLoading,c=e.isSuccess,l=e.isError,v=e.error,N=(0,x.Cy)(),w=(0,s.Z)(N,1)[0],y=(0,x.jn)(),C=(0,s.Z)(y,1)[0],Z=(0,x.wv)(),A=(0,s.Z)(Z,1)[0],L=(0,b.I0)(),z=(0,b.v9)((function(e){return e.contacts.filter})),_=(0,b.v9)((function(e){return e.isLogged.isLogged})),B=function(){var e=(0,r.Z)(i().mark((function e(r){var s,c,l,o,d,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),s=r.currentTarget,c=s.elements.name.value,l=s.elements.number.value,o=[c,l,_].every(Boolean)&&!t,d=(0,a.Z)(n),e.prev=6,d.s();case 8:if((u=d.n()).done){e.next=15;break}if(!u.value.name.includes(c)){e.next=13;break}return j().Notify.failure("".concat(c," is already in contacts")),e.abrupt("return");case 13:e.next=8;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),d.e(e.t0);case 20:return e.prev=20,d.f(),e.finish(20);case 23:if(!o){e.next=35;break}return e.prev=25,j().Loading.standard("wait..."),j().Loading.remove(2500),e.next=30,w({name:c,number:l}).unwrap();case 30:e.next=35;break;case 32:e.prev=32,e.t1=e.catch(25),alert("Failed to add contact");case 35:case"end":return e.stop()}}),e,null,[[6,17,20,23],[25,32]])})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j().Loading.standard("wait..."),j().Loading.remove(2500),e.next=4,C(n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=(0,r.Z)(i().mark((function e(r,s){var c,l,o,d,u,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),c=r.currentTarget,l=c.elements.newName.value,o=c.elements.number.value,console.log(l),console.log(o),d=[l,o].every(Boolean)&&!t,u=(0,a.Z)(n),e.prev=8,u.s();case 10:if((m=u.n()).done){e.next=17;break}if(!m.value.name.includes(l)){e.next=15;break}return j().Notify.failure("".concat(l," is already in contacts")),e.abrupt("return");case 15:e.next=10;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(8),u.e(e.t0);case 22:return e.prev=22,u.f(),e.finish(22);case 25:if(!d){e.next=37;break}return e.prev=27,j().Loading.standard("wait..."),j().Loading.remove(2500),e.next=32,A({id:s,name:l,number:o});case 32:e.next=37;break;case 34:e.prev=34,e.t1=e.catch(27),alert("Failed to add contact");case 37:case"end":return e.stop()}}),e,null,[[8,19,22,25],[27,34]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsx)(d,{handleSubmit:B}),(0,o.jsxs)("div",{className:"contacts-wrapper",children:[(0,o.jsx)(m,{onChange:function(e){L((0,h.W)(e.target.value))}}),(0,o.jsx)(p,{renderContacts:function(e,n){if(!n){if(t)return(0,o.jsx)(f.Bb,{});if(c)return e.map((function(e){return(0,o.jsx)("li",{className:"contact-list-item",children:(0,o.jsxs)("div",{className:"contacts",children:[e.name,": ",e.number,(0,o.jsxs)("div",{className:"contacts-btn",children:[(0,o.jsx)(g,{children:(0,o.jsx)(k,{handleUpdate:F,id:e.id,name:e.name,number:e.number})}),(0,o.jsx)(u,{deleteContact:S,id:e.id})]})]})},e.id)}));if(l)return(0,o.jsx)("div",{children:v.toString()})}return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return(0,o.jsx)("li",{className:"contact-list-item",children:(0,o.jsxs)("div",{className:"contacts",children:[e.name,": ",e.number,(0,o.jsxs)("div",{className:"contacts-btn",children:[(0,o.jsx)(g,{children:(0,o.jsx)(k,{handleUpdate:F,id:e.id,name:e.name,number:e.number})}),(0,o.jsx)(u,{deleteContact:S,id:e.id})]})]})},e.id)}))},contacts:n,filter:z})]})]})},C=function(e){return(0,o.jsx)("div",{children:(0,o.jsx)(y,{})})}}}]);
//# sourceMappingURL=796.54c88e8a.chunk.js.map