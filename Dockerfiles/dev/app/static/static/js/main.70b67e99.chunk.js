(this["webpackJsonpICC-website"]=this["webpackJsonpICC-website"]||[]).push([[0],{221:function(e,t,a){e.exports=a(261)},261:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=a(305),s=a(306),l=a(21),u=a(58),m=a(214),f=a(13),p="#FFFFFF",b={black:"#000000",orangeDark:"#C84C04",orangeDarker:"#AF4103",orangeLight:"#EE6029",orangeMain:"#DB5205",white:p,whiteOff:"#f6f6f6",primary:{main:f.a.blue[600],contrastText:p},secondary:{main:p,contrastText:"#DB5205"},success:{contrastText:p,dark:f.a.green[900],main:f.a.green[600],light:f.a.green[400]},info:{contrastText:p,dark:f.a.blue[900],main:f.a.blue[600],light:f.a.blue[400]},warning:{contrastText:p,dark:f.a.orange[900],main:f.a.orange[600],light:f.a.orange[400]},error:{contrastText:p,dark:f.a.red[900],main:f.a.red[600],light:f.a.red[400]},text:{primary:"#202020",secondary:"#202020",link:"#C84C04",header:"#DB5205"},background:{paper:p},icon:"#DB5205",divider:"#202020",colors:{orangeDarker:"#AF4103"}},h={body1:{marginBottom:"1.5em !important",fontSize:"0.875rem"},body2:{fontSize:"0.875rem"},h1:{marginBottom:"20.125rempx",marginTop:"0.625rem",paddingBottom:"0.9375rem",color:b.text.primary,fontSize:"1.6em",fontWeight:100,borderBottom:"0.0625rem solid black"},h2:{margin:"1.25rem 0",color:b.text.primary,fontSize:"1.4em",fontWeight:500,letterSpacing:"-0.015em",lineHeight:"1.75rem"},h3:{margin:"1.25rem 0",color:b.text.primary,fontWeight:500,fontSize:"1.2em",letterSpacing:"-0.015em",lineHeight:"1.75rem"},h4:{color:b.text.primary,fontWeight:500,fontSize:"1.25rem",letterSpacing:"-0.015em",lineHeight:"1.5rem"},h5:{color:b.text.primary,fontWeight:500,fontSize:"1rem",letterSpacing:"-0.015em",lineHeight:"1.25rem"},h6:{color:b.text.primary,fontWeight:500,fontSize:"0.875rem",letterSpacing:"-0.015em",lineHeight:"1.25rem"},subtitle1:{color:b.text.primary,fontSize:"1rem",letterSpacing:"-0.015em",lineHeight:"1.5625rem"},subtitle2:{color:b.text.secondary,fontWeight:400,fontSize:"0.875rem",letterSpacing:"-0.015em",lineHeight:"1.3125rem"},paragraph:{marginBottom:"1.5em",fontSize:"2.75rem"},button:{color:b.text.primary,fontWeight:500,fontSize:"1rem",lineHeight:1.4},caption:{color:b.text.secondary,fontSize:"0.6875rem",letterSpacing:"0.008em",lineHeight:"0.8125rem"}},g={MuiInput:{root:{fontSize:"1em",color:"white","&:placeholder":{color:"white"},"&:before":{borderBottom:"1px solid white"}},underline:{color:"white","&:placeholder":{color:"white"},"&:before":{borderBottom:"1px solid white"}}},MuiFormLabel:{root:{color:"white"}}},d=Object(m.a)({palette:b,typography:h,overrides:g,zIndex:{appBar:1200,drawer:1100}}),E=a(53),S=a(52),v=a(292),O=Object(v.a)((function(e){return{root:{}}})),y=function(e){var t=e.children,a=O();return n.createElement("div",{className:a.root},t)},j=a(230),k=Object(v.a)((function(e){return{body:{flex:"1 1 auto",display:"flex"}}})),x=function(e){var t=e.data;k();return console.log(t),n.createElement(n.Fragment,null,t._source&&j(t._source.content),n.createElement("hr",null))},w=a(20),C=a.n(w),B=a(40),T=a(28),N=a(296),A=a(297),z=a(298),W=a(275),F=a(262),H=a(274),I=a(300),R=a(301),_=a(97),D=a(294),M=a(16),J=a(31),L=a.n(J),K=a(27),P=document.getElementsByTagName("base")[0].getAttribute("href")||"",U=Object(K.a)({basename:P});L.a.interceptors.response.use((function(e){return e}),(function(e){return function(e){e.response&&e.response.status>=400&&e.response.status;return 401===e.response.status?U.push("/login"):406===e.response.status||U.push("/error-page"),Promise.reject(e)}(e)}));var X={get:L.a.get,post:L.a.post,put:L.a.put,delete:L.a.delete,setJwt:function(e){L.a.defaults.headers.common["X-auth-token"]=e,L.a.defaults.headers.common.Authorization="Bearer "+e}},q="".concat(window.location.href);function $(){return X.get(q+"_cat/indices?format=json")}var G=Object(v.a)((function(e){return{body:{flex:"1 1 auto",display:"flex"}}})),Q=function(e){var t=e.children,a=G();return n.createElement("div",{className:a.body},t)},V=Object(v.a)((function(e){return{body:{flex:"1 1 auto",display:"flex"}}})),Y=function(e){var t=e.data,a=e.title,r=(V(),t.hits);return n.createElement(n.Fragment,null,n.createElement(D.a,{variant:"h2"},a),r&&r.hits.length>0&&r.hits.map((function(e){return console.log(e),n.createElement(x,{data:e})})))};var Z=Object(v.a)((function(e){return{paper:{padding:e.spacing(2)},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},main:{marginTop:"90px"},button:{},formControl:{margin:e.spacing(1),minWidth:120}}})),ee={hits:{hits:[],total:0}},te=Object(l.c)((function(e){return Object(E.a)(e),{}}),(function(e){return Object(M.bindActionCreators)({},e)})),ae=Object(S.e)(te((function(e){Object(E.a)(e);var t=Z(),a=r.a.useState([]),o=Object(T.a)(a,2),c=o[0],i=o[1],s=r.a.useState(""),l=Object(T.a)(s,2),u=l[0],m=l[1],f=r.a.useState(),p=Object(T.a)(f,2),b=p[0],h=p[1],g=r.a.useState(ee),d=Object(T.a)(g,2),S=d[0],v=(d[1],r.a.useState(ee)),O=Object(T.a)(v,2),y=O[0],j=(O[1],function(e,t){var a=Object(n.useState)(e),r=Object(T.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[e]),o}(u,500));return Object(n.useEffect)((function(){function e(){return(e=Object(B.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){}),[j,b]),r.a.createElement(n.Fragment,null,r.a.createElement(N.a,{position:"fixed",className:t.appBar},r.a.createElement(A.a,null,r.a.createElement(z.a,null,r.a.createElement(W.a,{className:t.formControl},r.a.createElement(F.a,{htmlFor:"book-list"},"Indices"),r.a.createElement(H.a,{value:b,onChange:function(e){h(e.target.value)},inputProps:{name:"book",id:"book-list"}},c&&c.map((function(e){return r.a.createElement("option",{value:e.index},e.index)})))),r.a.createElement(I.a,{id:"outlined-basic",onChange:function(e){m(e.target.value)},label:"Enter text",className:t.button,fullWidth:!0})))),r.a.createElement(A.a,{className:t.main},r.a.createElement(R.a,{container:!0,spacing:2},r.a.createElement(R.a,{item:!0,xs:12},r.a.createElement(_.a,{className:t.paper},r.a.createElement(D.a,{variant:"h3"},"Total hits: ",S.hits?S.hits.total:0),r.a.createElement(D.a,{variant:"h3"},"Search query: ",r.a.createElement("span",{style:{color:"red"}},j)))),0!==S.hits.total&&r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(_.a,{className:t.paper},r.a.createElement(Y,{data:S,title:"Elastic Search"}))),0!==y.hits.total&&r.a.createElement(R.a,{item:!0,xs:6},r.a.createElement(_.a,{className:t.paper},r.a.createElement(Y,{data:y,title:"NBoost"}))))))}))),ne="/",re=Object(l.c)((function(e){return Object(E.a)(e),{}}),(function(e){return Object(M.bindActionCreators)({},e)}))((function(e){return Object(E.a)(e),r.a.createElement(y,null,r.a.createElement(Q,null,r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:ne,component:ae}),r.a.createElement(S.a,{component:function(){return r.a.createElement("div",null,"Not Found")}}))))})),oe=a(304),ce=a(307),ie=a(62),se={snackbar:{snackbarMessage:"Success!",snackbarState:!1,snackbarType:"success"}};function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"@@ui/SHOW_ERROR_SNACKBAR":return Object(ie.a)({},e,{snackbar:{snackbarMessage:t.message,snackbarType:"error",snackbarState:!0}});case"@@ui/SHOW_SUCCESS_SNACKBAR":return Object(ie.a)({},e,{snackbar:{snackbarMessage:t.message,snackbarType:"success",snackbarState:!0}});case"@@ui/CLEAR_SNACKBAR":return Object(ie.a)({},e,{snackbar:Object(ie.a)({},e.snackbar,{snackbarState:!1})});default:return e}}function ue(){return function(){var e=Object(B.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:"@@ui/CLEAR_SNACKBAR"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var me=a(211),fe=Object(me.a)([function(e){return e.snackbar}],(function(e){return e})),pe=function(e){return r.a.createElement(ce.a,Object.assign({elevation:6,variant:"filled"},e))},be=Object(v.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),he=Object(l.c)((function(e){var t=e.ui;return{snackbar:fe(t)}}),(function(e){return Object(M.bindActionCreators)({clearSnackbar:ue},e)}))((function(e){var t=e.snackbar,a=e.clearSnackbar,n=be();function o(e,t){"clickaway"!==t&&a()}return r.a.createElement("div",{className:n.root},r.a.createElement(oe.a,{open:t.snackbarState,autoHideDuration:3e3,onClose:o},r.a.createElement(pe,{onClose:o,severity:t.snackbarType},t.snackbarMessage)))})),ge=function(e){var t=e.store,a=e.history;return r.a.createElement(l.a,{store:t},r.a.createElement(i.a,{theme:d},r.a.createElement(u.a,{history:a},r.a.createElement(s.a,null),r.a.createElement(he,null),r.a.createElement(re,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(212),Ee=a(213),Se=a(202);var ve=window.INITIAL_REDUX_STATE,Oe=function(e,t){!function(){try{var e=sessionStorage.getItem("state");if(null===e)return;JSON.parse(e)}catch(t){return}}();var a=Object(de.composeWithDevTools)({}),n=Object(M.createStore)(function(e){return Object(M.combineReducers)({ui:le,router:Object(u.b)(e)})}(e),t,a(Object(M.applyMiddleware)(Object(Se.a)(e),Ee.a)));return n.subscribe((function(){!function(e){try{var t=JSON.stringify(e);sessionStorage.setItem("state",t)}catch(a){}}(n.getState())})),n}(U,ve);c.a.render(r.a.createElement(ge,{store:Oe,history:U}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[221,1,2]]]);
//# sourceMappingURL=main.70b67e99.chunk.js.map