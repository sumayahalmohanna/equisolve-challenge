(this["webpackJsonpequisolve-challenge"]=this["webpackJsonpequisolve-challenge"]||[]).push([[0],{22:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(9),i=c.n(s),j=(c(22),c(8)),l=c(47),r=c(37),b=c(38),o=c(39),h=c(40),d=c(41),O=c(42),u=c(43),x=c(44),m=c(49),g=c(45),p=c(46),f=c(48),v=c(4),N=function(e){var t=e.cards,c=Object(n.useState)(!1),a=Object(j.a)(c,2),s=a[0],i=a[1],l=Object(n.useState)(),N=Object(j.a)(l,2),S=N[0],C=N[1],q=Object(n.useState)(),w=Object(j.a)(q,2),F=w[0],k=w[1],B=Object(n.useState)(),E=Object(j.a)(B,2),I=E[0],L=E[1],P=Object(n.useState)(),y=Object(j.a)(P,2),J=y[0],M=y[1],T=function(e){i(!s),C(e.name),k(e.title),L(e.photo_url),M(e.bio)};return Object(v.jsxs)(r.a,{xs:"3",children:[t.map((function(e){return Object(v.jsx)(b.a,{children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(h.a,{top:!0,width:"30%",src:e.photo_url,alt:"Card image cap"}),Object(v.jsxs)(d.a,{children:[Object(v.jsx)(O.a,{className:"name",tag:"h5",children:e.name}),Object(v.jsx)(u.a,{className:"title",tag:"h6",children:e.title}),Object(v.jsx)(x.a,{onClick:function(){return T(e)},children:"view bio"})]})]})},Object(f.a)())})),Object(v.jsxs)(m.a,{size:"lg",isOpen:s,toggle:T,children:[Object(v.jsxs)(g.a,{toggle:T,children:[Object(v.jsx)("h4",{className:"name",children:S}),Object(v.jsx)("h6",{className:"title",children:F})]}),Object(v.jsxs)(r.a,{xs:"2",children:[Object(v.jsx)(b.a,{children:Object(v.jsx)(p.a,{className:"modalBody",children:J})}),Object(v.jsx)(b.a,{children:Object(v.jsx)("img",{className:"modalImg",src:I,alt:"Profile pic in Modal."})})]})]})]})};c(33),c(34);var S=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(r.a,{children:Object(v.jsx)("h1",{className:"pageHeading",children:"Executive Leadership"})}),c&&Object(v.jsx)(N,{cards:c})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.1beaecc5.chunk.js.map