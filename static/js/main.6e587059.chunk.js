(this["webpackJsonpequisolve-challenge"]=this["webpackJsonpequisolve-challenge"]||[]).push([[0],{22:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(9),i=c.n(s),j=(c(22),c(8)),l=c(47),r=c(37),b=c(38),o=c(39),h=c(40),u=c(41),O=c(42),d=c(43),x=c(44),m=c(49),f=c(45),p=c(46),g=c(48),v=c(5),S=function(e){var t=e.cards,c=Object(n.useState)(!1),a=Object(j.a)(c,2),s=a[0],i=a[1],l=Object(n.useState)(),S=Object(j.a)(l,2),N=S[0],C=S[1],q=Object(n.useState)(),w=Object(j.a)(q,2),F=w[0],k=w[1],E=Object(n.useState)(),I=Object(j.a)(E,2),L=I[0],P=I[1],B=Object(n.useState)(),J=Object(j.a)(B,2),M=J[0],T=J[1],_=function(e){i(!s),C(e.name),k(e.title),P(e.photo_url),T(e.bio)};return Object(v.jsxs)(r.a,{xs:"3",children:[t.map((function(e){return Object(v.jsx)(b.a,{children:Object(v.jsxs)(o.a,{children:[Object(v.jsx)(h.a,{top:!0,width:"30%",src:e.photo_url,alt:"Card image cap"}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)(O.a,{className:"name",tag:"h5",children:e.name}),Object(v.jsx)(d.a,{className:"title",tag:"h6",children:e.title}),Object(v.jsx)(x.a,{onClick:function(){return _(e)},children:"view bio"})]})]})},Object(g.a)())})),Object(v.jsxs)(m.a,{isOpen:s,toggle:_,children:[Object(v.jsxs)(f.a,{toggle:_,children:[Object(v.jsx)("h4",{className:"name",children:N}),Object(v.jsx)("h6",{className:"title",children:F})]}),Object(v.jsx)("img",{className:"modalImg",src:L,alt:"Profile pic in Modal."}),Object(v.jsx)(p.a,{children:M})]})]})};c(33),c(34);var N=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://bensdemo.prod.equisolve-dev.com/api/v1/eq-test").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]),Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(l.a,{children:[Object(v.jsx)(r.a,{children:Object(v.jsx)("h1",{children:"Executive Leadership"})}),c&&Object(v.jsx)(S,{cards:c})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),C()}},[[35,1,2]]]);
//# sourceMappingURL=main.6e587059.chunk.js.map