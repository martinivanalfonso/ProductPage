(this["webpackJsonpportfolio-page"]=this["webpackJsonpportfolio-page"]||[]).push([[0],{30:function(n,e,r){n.exports=r(45)},35:function(n,e,r){},36:function(n,e,r){},45:function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),a=r(15),i=r.n(a),c=(r(35),r(2)),l=(r(36),r(5)),d=r(4),u=function(n){return n.header},b=Object(d.a)([u],(function(n){return n.primaryColor[0]})),p=Object(d.a)([u],(function(n){return n.slideIdToShowArray[0]})),s=Object(d.a)([u],(function(n){return n.titleToShow[0]})),f=Object(d.a)([u],(function(n){return n.darkMode[0]})),h=Object(d.a)([u],(function(n){return n.darkMode[1]})),m=r(3);function g(){var n=Object(c.a)(["\nwidth: 100vw;\nheight:10vh;\nbackground-color: ",";\ntransition: background-color 0.5s ease-in-out;\nposition:fixed;\ntop:0;\nz-index: 10;\n@media screen and (max-width: 800px) {\n    height: 2.5vh;\n  }\n"]);return g=function(){return n},n}function v(){var n=Object(c.a)(["\nwidth: 100vw;\nheight:85vh;\nbackground-color: ",";\ntransition: background-color 0.5s ease-in-out;\nposition:fixed;\ntop:0;\nz-index: -1;\n"]);return v=function(){return n},n}var E=m.b.div(v(),(function(n){return n.primaryColor})),w=m.b.div(g(),(function(n){return n.primaryColor})),y=Object(d.b)({primaryColor:b}),k=Object(l.b)(y)((function(n){var e=n.primaryColor;return o.a.createElement("div",null,o.a.createElement(w,{primaryColor:e}),o.a.createElement(E,{primaryColor:e}))})),x=r(22),O=r.n(x),j={UPDATE_PRIMARYCOLOR:"UPDATE_PRIMARYCOLOR",UPDATE_SLIDE:"UPDATE_SLIDE",UPDATE_TITLE:"UPDATE_TITLE",UPDATE_HEADER:"UPDATE_HEADER",UPDATE_HEADER_FORWARD:"UPDATE_HEADER_FORWARD",SWITCH_MODE:"SWITCH_MODE"};function T(){var n=Object(c.a)(["\ncursor:pointer;\nz-index: 6;\n"]);return T=function(){return n},n}function A(){var n=Object(c.a)(["\ncursor:pointer;\npadding: 10px;\nz-index: 6;\ntransition: all 0.3s ease-in-out;\n\n&:hover {\n    font-size:1.2rem;\n  }\n"]);return A=function(){return n},n}function S(){var n=Object(c.a)(["\nheight: 80px;\ndisplay: flex;\njustify-content: space-between;\npadding: 20px;\n"]);return S=function(){return n},n}var C=m.b.div(S()),M=m.b.span(A()),D=m.b.span(T()),I=Object(l.b)(null,(function(n){return{switchMode:function(){return n({type:j.SWITCH_MODE})}}}))((function(n){var e=n.switchMode;return o.a.createElement(C,null,o.a.createElement(D,{onClick:function(){return e()}},o.a.createElement(O.a,{fontSize:"large"})),o.a.createElement(M,null,"Product"),o.a.createElement(M,null,"About"),o.a.createElement(M,null,"Contact"))})),R=r(24),_=r.n(R),U=r(26),P=r.n(U),H=r(25),z=r.n(H),W=r(23),L=r.n(W);function B(){var n=Object(c.a)(["\n  width: 100px;\n  height: 80px;\n  background-color: ",";\n  transition: background-color 0.5s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"]);return B=function(){return n},n}var F=m.b.div(B(),(function(n){return n.primaryColor})),Y=Object(d.b)({primaryColor:b}),G=Object(l.b)(Y,(function(n){return{updateHeader:function(){return n({type:j.UPDATE_HEADER})}}}))((function(n){var e=n.updateHeader,r=n.primaryColor;return o.a.createElement(F,{primaryColor:r,onClick:function(){return e()}},o.a.createElement(L.a,{fontSize:"large"}))}));function J(){var n=Object(c.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr;\npadding: 20px;\nmargin-top: -100px;\ncursor:pointer;\n"]);return J=function(){return n},n}function q(){var n=Object(c.a)(["\n  width: 100%;\n  height: 80px;\n  place-self: self-end;\n  display: flex;\n  justify-content: space-between;\n"]);return q=function(){return n},n}var Q=m.b.div(q()),V=m.b.div(J()),$=function(){return o.a.createElement(Q,null,o.a.createElement(V,null,o.a.createElement(_.a,null),o.a.createElement(z.a,null),o.a.createElement(P.a,null)),o.a.createElement(G,null))};function K(){var n=Object(c.a)(["\n    border-right: ",";\n    animation: ",";\n    margin-left: ",";\n\n  @keyframes blink-caret {\n    from, to { border-color: transparent }\n    50% { border-color: orange; }\n  }\n"]);return K=function(){return n},n}function N(){var n=Object(c.a)(["\n  padding: 10px;\n  font-size: 1.8rem;\n  z-index: 5;\n"]);return N=function(){return n},n}var X=m.b.div(N()),Z=m.b.h1(K(),(function(n){return n.header?"none":" .15em solid orange"}),(function(n){return n.header?"none":" blink-caret .75s step-end infinite"}),(function(n){return n.header?"5vw":"0px"})),nn=function(n){var e=n.title,r=n.header;return o.a.createElement(X,null,o.a.createElement(Z,{header:r},e))};function en(){var n=Object(c.a)(["\n  width: 100%;\n  height: 75vh;\n  background-color: ",";\n  display: grid;\n"]);return en=function(){return n},n}var rn=m.b.div(en(),(function(n){return n.darkMode})),tn=Object(d.b)({darkMode:f,title:s}),on=Object(l.b)(tn)((function(n){var e=n.darkMode,r=n.title;return o.a.createElement(rn,{darkMode:e},o.a.createElement(I,null),o.a.createElement(nn,{header:!0,title:r}),o.a.createElement($,null))})),an=r(27),cn=r.n(an);function ln(){var n=Object(c.a)(["\n  width: 100px;\n  height: 80px;\n  background-color: ",";\n  transition: background-color 0.5s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n"]);return ln=function(){return n},n}var dn=m.b.div(ln(),(function(n){return n.darkMode})),un=Object(d.b)({darkMode:f}),bn=Object(l.b)(un,(function(n){return{updateHeaderForward:function(){return n({type:j.UPDATE_HEADER_FORWARD})}}}))((function(n){var e=n.updateHeaderForward,r=n.darkMode;return o.a.createElement(dn,{darkMode:r,onClick:function(){return e()}},o.a.createElement(cn.a,{fontSize:"large"}))}));function pn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 75vh;\n  flex-shrink: 0;\n  background-image: ",";\n  background-size: contain;\n  background-position: center;\n  background-repeat:no-repeat;\n  transition: opacity 0.5s ease-in-out;\n  opacity: ",";\n  position: absolute;\n"]);return pn=function(){return n},n}function sn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 75vh;\n  display: flex;\n  overflow-x: auto;\n  background-color: white;\n  overflow: hidden;\n  position: relative;\n"]);return sn=function(){return n},n}function fn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 80px;\n  place-self: self-end;\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n"]);return fn=function(){return n},n}function hn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 75vh;\n  background-color: red;\n  display: grid;\n  position: relative;\n"]);return hn=function(){return n},n}var mn=m.b.div(hn()),gn=m.b.div(fn()),vn=m.b.div(sn()),En=m.b.div(pn(),(function(n){var e=n.imageUrl;return"url(".concat(e,")")}),(function(n){return n.slideIdToShow===n.id?"1":"0"})),wn=Object(d.b)({slideIdToShow:p}),yn=Object(l.b)(wn)((function(n){var e=n.slideIdToShow;return console.log(e),o.a.createElement(mn,null,o.a.createElement(vn,null,o.a.createElement(En,{id:"slide1",slideIdToShow:e,imageUrl:"https://i.ibb.co/dkq68sw/prod3.jpg"}),o.a.createElement(En,{id:"slide2",slideIdToShow:e,imageUrl:"https://i.ibb.co/bzrHtQx/prod2.jpg"}),o.a.createElement(En,{id:"slide3",slideIdToShow:e,imageUrl:"https://i.ibb.co/WpnrpG0/prod1.jpg"})),o.a.createElement(gn,null,o.a.createElement(bn,null)))}));function kn(){var n=Object(c.a)(["\n  width: 90vw;\n  max-width: 1140px;\n  height: 90vh;\n  background-color: ",";\n  margin: auto;\n  margin-top: 10vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5),\n    -10px 10px 10px rgba(0, 0, 0, 0.5);\n\n  @media screen and (max-width: 800px) {\n    margin-top: 2.5vh;\n  }\n"]);return kn=function(){return n},n}var xn=m.b.div(kn(),(function(n){return n.darkMode})),On=Object(d.b)({darkMode:f}),jn=Object(l.b)(On)((function(n){var e=n.darkMode;return o.a.createElement(xn,{darkMode:e},o.a.createElement(on,null),o.a.createElement(yn,null))}));function Tn(){var n=Object(c.a)(["\n  max-width: 640px;\n  width: 100%;\n  height: auto;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5), -10px 10px 10px rgba(0, 0, 0, 0.5);\n"]);return Tn=function(){return n},n}function An(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return An=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  width: 90%;\n  height: 400px;\n  background-color: ",";\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: 50px 0px;\n"]);return Sn=function(){return n},n}var Cn=m.b.div(Sn(),(function(n){return n.darkMode})),Mn=m.b.div(An()),Dn=m.b.img(Tn()),In=Object(d.b)({darkMode:f});Object(l.b)(In)((function(n){var e=n.title,r=n.info,t=n.imageUrl,a=n.darkMode;return o.a.createElement(Cn,{darkMode:a},o.a.createElement(Mn,null,o.a.createElement("h2",null,e),o.a.createElement("p",null,r)),o.a.createElement(Dn,{src:t}))}));function Rn(){var n=Object(c.a)(["\n  width: 90vw;\n  max-width: 1140px;\n  height: 1400px;\n  background-color: ",";\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5),\n    -10px 10px 10px rgba(0, 0, 0, 0.5);\n"]);return Rn=function(){return n},n}var _n=m.b.div(Rn(),(function(n){return n.darkMode})),Un=Object(d.b)({darkMode:f}),Pn=Object(l.b)(Un)((function(n){var e=n.darkMode;return o.a.createElement(_n,{darkMode:e},o.a.createElement(nn,{title:"Details"}))}));function Hn(){var n=Object(c.a)(["\nbody {\n  color: ",";\n  background: ",";\n  padding-bottom: 15vh;\n}\n::-webkit-scrollbar {\n  width: 15px;\n  height: 15px;\n}\n\n::-webkit-scrollbar-track-piece  {\n  background-color: ",";\n}\n\n::-webkit-scrollbar-thumb:vertical {\n  height: 30px;\n  background-color: orange;\n}\n"]);return Hn=function(){return n},n}var zn=Object(m.a)(Hn(),(function(n){return n.darkMode}),(function(n){return n.darkModeBackground}),(function(n){return n.darkMode})),Wn=Object(d.b)({darkMode:h,darkModeBackground:f}),Ln=Object(l.b)(Wn)((function(n){var e=n.darkMode,r=n.darkModeBackground;return o.a.createElement("div",null,o.a.createElement(zn,{darkMode:e,darkModeBackground:r}),o.a.createElement(k,null),o.a.createElement(jn,null),o.a.createElement(Pn,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Bn=r(10),Fn=r(11),Yn={primaryColor:["#702632","#40434E","#381460"],secondaryColor:["#f38181","#fce38a","#95e1d3"],darkMode:["#222831","#eaffd0"],slideIdToShowArray:["slide1","slide2","slide3"],titleToShow:["Vitality Shot","Get back to your roots","Choice of flavours"]},Gn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j.SWITCH_MODE:return Object(Fn.a)({},n,{darkMode:[n.darkMode[1],n.darkMode[0]],primaryColor:[n.secondaryColor[0],n.secondaryColor[1],n.secondaryColor[2]],secondaryColor:[n.primaryColor[0],n.primaryColor[1],n.primaryColor[2]]});case j.UPDATE_PRIMARYCOLOR:return Object(Fn.a)({},n,{primaryColor:[n.primaryColor[1],n.primaryColor[2],n.primaryColor[0]]});case j.UPDATE_SLIDE:return Object(Fn.a)({},n,{slideIdToShowArray:[n.slideIdToShowArray[1],n.slideIdToShowArray[2],n.slideIdToShowArray[0]]});case j.UPDATE_TITLE:return Object(Fn.a)({},n,{titleToShow:[n.titleToShow[1],n.titleToShow[2],n.titleToShow[0]]});case j.UPDATE_HEADER:return Object(Fn.a)({},n,{primaryColor:[n.primaryColor[1],n.primaryColor[2],n.primaryColor[0]],slideIdToShowArray:[n.slideIdToShowArray[1],n.slideIdToShowArray[2],n.slideIdToShowArray[0]],titleToShow:[n.titleToShow[1],n.titleToShow[2],n.titleToShow[0]]});case j.UPDATE_HEADER_FORWARD:return Object(Fn.a)({},n,{primaryColor:[n.primaryColor[2],n.primaryColor[0],n.primaryColor[1]],slideIdToShowArray:[n.slideIdToShowArray[2],n.slideIdToShowArray[0],n.slideIdToShowArray[1]],titleToShow:[n.titleToShow[2],n.titleToShow[0],n.titleToShow[1]]});default:return n}},Jn=Object(Bn.c)({header:Gn}),qn=Object(Bn.d)(Jn,Bn.a.apply(void 0,[]));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:qn},o.a.createElement(Ln,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.fd6fae4f.chunk.js.map