(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,e,n){t.exports=n(197)},152:function(t,e,n){var r={"./pages.js":153};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=152},153:function(t,e,n){"use strict";n.r(e);n(28);e.default=function(t){t.store.commit("UPDATE_PAGE",t.route.name)}},158:function(t,e,n){"use strict";var r=n(58);n.n(r).a},169:function(t,e,n){"use strict";var r=n(59);n.n(r).a},170:function(t,e,n){},171:function(t,e,n){},172:function(t,e,n){"use strict";var r=n(60);n.n(r).a},187:function(t,e,n){var r={"./index.js":188,"./modules/activeObject.js":95,"./modules/userTemplates.js":189};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=187},188:function(t,e,n){"use strict";n.r(e);var r,a=n(48),o=n(95);e.default=function(){return r||(r=new a.a.Store({modules:{activeObject:o.default}}))}},189:function(t,e,n){"use strict";n.r(e);var r=n(63),a=n.n(r),o=function(){try{var t=localStorage.getItem("User Templates");if(null===t)return;return JSON.parse(t)}catch(t){return}},i=function(t){try{var e=JSON.stringify(t);localStorage.setItem("User Templates",e)}catch(t){console.error("Something went wrong: ".concat(t))}},s={state:{list:o()||[]},mutations:{INIT_TEMPLATES:function(t){t.list=o()||[],i(t)},ADD_TEMPLATE:function(t,e){t.list=a()(t.list).concat([e]),i(t)},DELETE_TEMPLATE:function(t,e){t.list=a()(t.list.slice(0,e)).concat(a()(t.list.slice(e+1))),i(t)}},actions:{initTemplates:function(t,e){(0,t.commit)("INIT_TEMPLATES",e)},addTemplate:function(t,e){(0,t.commit)("ADD_TEMPLATE",e)},deleteTemplate:function(t,e){(0,t.commit)("DELETE_TEMPLATE",e)}},getters:{USER_TEMPLATES:function(t){return t.list}}};e.default=s},197:function(t,e,n){"use strict";n.r(e);n(92),n(71),n(72);var r=n(35),a=n.n(r),o=(n(28),n(75),n(138),n(10)),i=n.n(o),s=(n(108),n(40),n(79),n(109),n(143),n(151),n(0)),u=(n(64),n(152)),c=u.keys();function l(t){var e=u(t);return e.default?e.default:e}var p={},f=!0,h=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(f=(m=v.next()).done);f=!0){var x=m.value;p[x.replace(/^\.\//,"").replace(/\.(mjs|js)$/,"")]=l(x)}}catch(t){h=!0,d=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw d}}var g=p,y=n(29),w=n.n(y),_=n(118),b=n.n(_),C=n(96),k=function(){return Promise.all([n.e(8),n.e(1)]).then(n.bind(null,273)).then(function(t){return t.default||t})},E=function(){return Promise.all([n.e(11),n.e(2)]).then(n.bind(null,271)).then(function(t){return t.default||t})},T=function(){return n.e(3).then(n.bind(null,270)).then(function(t){return t.default||t})},$=function(){return n.e(4).then(n.bind(null,267)).then(function(t){return t.default||t})},R=function(){return n.e(5).then(n.bind(null,272)).then(function(t){return t.default||t})},S=function(){return Promise.all([n.e(10),n.e(6)]).then(n.bind(null,269)).then(function(t){return t.default||t})};s.a.use(C.a),window.history.scrollRestoration="manual";var A=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var O=n(119),j=n.n(O).a,N={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,a=e.props;r.nuxtChild=!0;for(var o=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};L.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var p={};D.forEach(function(t){"function"==typeof c[t]&&(p[t]=c[t].bind(o))});var f=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),f)return f.call(o,t)};var h=[t("router-view",r)];return void 0!==a.keepAlive&&(h=[t("keep-alive",h)]),t("transition",{props:l,on:p},h)}},L=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],D=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],I={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},P={name:"nuxt-error",props:["error"],head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},M=(n(158),n(21)),U=Object(M.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,V=(n(114),n(159),n(161),n(163),n(164),n(167),function(){return{}});function q(t,e){var n=t.options.data||V;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),w()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function F(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function J(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function B(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,a){return t.components[a]?r.push(e(t.components[a],t.instances[a],t,a,n)):delete t.components[a],r},[])}))}function z(t){return Promise.all(B(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,a){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[a]=F(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,a){return t.apply(this,arguments)}}()))}function K(t){return H.apply(this,arguments)}function H(){return(H=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:return t.abrupt("return",w()({},e,{meta:J(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function Q(t,e){return X.apply(this,arguments)}function X(){return(X=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/cup-demo/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=a()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},n=t,o=a()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=at(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,K(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,K(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function G(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function W(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function Y(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===a()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",o=n||{},i=r||{},s=i.pretty?et:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,p=o[c.name];if(null==p){if(c.optional){c.partial&&(a+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(l=s(p[f]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");a+=(0===f?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');a+=c.prefix+l}}else a+=c}return a}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=tt.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(o,l),o=l+u.length,c)i+=c[1];else{var p=t[o],f=n[2],h=n[3],d=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var g=null!=f&&null!=p&&p!==f,y="+"===v||"*"===v,w="?"===v||"*"===v,_=n[2]||s,b=d||m;r.push({name:h||a++,prefix:f||"",delimiter:_,optional:w,repeat:y,partial:g,asterisk:!!x,pattern:b?rt(b):x?".*":"[^"+nt(_)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))}function Z(t,e){var n={},r=w()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var tt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function et(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function nt(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function rt(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function at(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a,o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/");return 2===(o=s.split("#")).length&&(s=o[0],a=o[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=a?"#"+a:""}var ot={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Y(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:N,NuxtError:U}},it={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#fff",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.a.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},st=(n(169),Object(M.a)(it,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})},[],!1,null,null,null).exports),ut=(n(170),n(171),{components:{},data:function(){return{xxlDevice:!0,pageLoaded:!1}},mounted:function(){var t=this;window.addEventListener("resize",this.handleResize),this.handleResize(),this.$nextTick(function(){setTimeout(function(){return t.pageLoaded=!0},1500)})},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){window.innerWidth<1024?this.xxlDevice=!1:this.xxlDevice=!0}}}),ct=(n(172),n(85)),lt=n.n(ct),pt=n(268),ft=n(225),ht=n(215),dt=n(216),mt=n(57),vt=n(217),xt=n(226),gt=n(218),yt=n(219),wt=n(16),_t=n(262),bt=n(227),Ct=n(276),kt=Object(M.a)(ut,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{color:"black",dark:"",fixed:"",app:"","align-center":""}},[n("v-layout",{attrs:{row:""}},[n("v-toolbar-title",[n("a",{staticClass:"mb-0 white--text d-inline-block body-2",attrs:{href:"mailto:official.osorina@gmail.com",target:"_blank"}},[t._v("E-MAIL: OFFICIAL.OSORINA@GMAIL.COM")]),t._v(" "),n("a",{staticClass:"mb-0 ml-3 white--text d-inline-block body-2",attrs:{href:"https://telegram.me/osorina",target:"_blank"}},[t._v("TG: OSORINA")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:""}},[n("v-icon",{attrs:{small:""}},[t._v("vpn_key")]),t._v(" "),n("span",{staticClass:"ml-2 body-2"},[t._v("Авторизация")])],1),t._v(" "),n("v-btn",{attrs:{flat:""}},[n("v-icon",{attrs:{small:""}},[t._v("shopping_cart")]),t._v(" "),n("span",{staticClass:"ml-2 body-2"},[t._v("0 ₽ 0 товаров")])],1)],1)],1)],1),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:"","grid-list-lg":"","fill-height":"","pt-2":""}},[n("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.xxlDevice,expression:"xxlDevice"}],attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"left-side",attrs:{"d-flex":"",grow:"",xs12:"",md6:"","fill-height":""}},[n("v-layout",{attrs:{column:""}},[n("v-flex",{staticClass:"flex-top",attrs:{xs12:"","pb-0":""}},[n("nuxt")],1),t._v(" "),n("v-flex",{staticClass:"flex-bottom",attrs:{"d-flex":"",xs12:""}},[n("v-fade-transition",[n("v-sheet",{directives:[{name:"show",rawName:"v-show",value:!t.pageLoaded,expression:"!pageLoaded"}],attrs:{color:"grey lighten-3 coverDiv backing"}},[n("div",{staticClass:"d-flex align-center px-5",staticStyle:{height:"100%"}},[n("v-progress-linear",{attrs:{indeterminate:!0,color:"grey lighten-2"}})],1)])],1)],1)],1)],1),t._v(" "),n("v-flex",{staticClass:"right-side",attrs:{"d-flex":"",shrink:"",xs12:"",md6:"","fill-height":""}},[n("v-fade-transition",[n("v-sheet",{directives:[{name:"show",rawName:"v-show",value:!t.pageLoaded,expression:"!pageLoaded"}],attrs:{color:"grey lighten-3 coverDiv backing"}},[n("div",{staticClass:"d-flex align-center px-5",staticStyle:{height:"100%"}},[n("v-progress-linear",{attrs:{indeterminate:!0,color:"grey lighten-2"}})],1)])],1)],1)],1),t._v(" "),n("v-layout",{directives:[{name:"show",rawName:"v-show",value:!t.xxlDevice,expression:"!xxlDevice"}],staticStyle:{height:"80vh"},attrs:{"align-center":"",column:"","justify-cente":""}},[n("v-flex",{staticClass:"black--text text-xs-center text-uppercase mb-5",attrs:{"align-center":""}},[n("h1",{staticClass:"display-2 font-weight-thin mb-3"},[t._v("Responsive version is not ready yet")]),t._v(" "),n("h4",{staticClass:"subheading"},[t._v("only xxl screens")])]),t._v(" "),n("img",{attrs:{src:"assets/prevent-responsive-expectations.svg"}})],1),t._v(" "),n("v-sheet",{staticStyle:{position:"absolute",opacity:"0",visibility:"hidden","user-select":"none","pointer-events":"none"}},t._l(t.fontFamilies,function(e){return n("div",{style:{fontFamily:e}},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("hope it will be loaded")]),t._v(" "),n("span",{staticStyle:{"font-style":"italic"}},[t._v("hope it will be loaded")])])}))],1)],1)],1)},[],!1,null,null,null),Et=kt.exports;lt()(kt,{VApp:pt.a,VBtn:ft.a,VContainer:ht.a,VContent:dt.a,VFadeTransition:mt.b,VFlex:vt.a,VIcon:xt.a,VLayout:gt.a,VProgressLinear:yt.a,VSheet:wt.a,VSpacer:_t.a,VToolbar:bt.a,VToolbarItems:Ct.a,VToolbarTitle:Ct.b});var Tt={_default:Et},$t={head:{title:"configurator",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js + Vuetify.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),a=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),o=t("transition",{props:{name:"layout",mode:"out-in"}},[a]);return t("div",{domProps:{id:"__nuxt"}},[n,o])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&Tt["_"+t]||(t="default"),this.layoutName=t,this.layout=Tt["_"+t],this.layout},loadLayout:function(t){return t&&Tt["_"+t]||(t="default"),Promise.resolve(Tt["_"+t])}},components:{NuxtLoading:st}},Rt=(n(116),n(181),n(184),n(48));s.a.use(Rt.a);var St=n(187),At=St.keys(),Ot={},jt=At.find(function(t){return t.includes("./index.")});if(jt&&(Ot=Yt(jt)),"function"!=typeof Ot){Ot.modules||(Ot.modules={});var Nt=!0,Lt=!1,Dt=void 0;try{for(var It,Pt=At[Symbol.iterator]();!(Nt=(It=Pt.next()).done);Nt=!0){var Mt=It.value,Ut=Mt.replace(/^\.\//,"").replace(/\.(mjs|js)$/,"");if("index"!==Ut){var Vt=Ut.split(/\//);if(Ut=Vt[Vt.length-1],["state","getters","actions","mutations"].includes(Ut)){te(Zt(Ot,Vt,!0),Mt,Ut)}else{var qt="index"===Ut;qt&&Vt.pop();var Ft=Zt(Ot,Vt),Jt=Yt(Mt);if(Ft[Ut=Vt.pop()]=Ft[Ut]||{},qt){var Bt={};if(Ft[Ut].appends){Bt.appends=Ft[Ut].appends;var zt=!0,Kt=!1,Ht=void 0;try{for(var Qt,Xt=Ft[Ut].appends[Symbol.iterator]();!(zt=(Qt=Xt.next()).done);zt=!0){var Gt=Qt.value;Bt[Gt]=Ft[Ut][Gt]}}catch(t){Kt=!0,Ht=t}finally{try{zt||null==Xt.return||Xt.return()}finally{if(Kt)throw Ht}}}Ft[Ut]=Object.assign({},Ft[Ut],Jt,Bt),Ft[Ut].namespaced=!0}else Ft[Ut]=Object.assign({},Jt,Ft[Ut]),Ft[Ut].namespaced=!0}}}}catch(t){Lt=!0,Dt=t}finally{try{Nt||null==Pt.return||Pt.return()}finally{if(Lt)throw Dt}}}var Wt=Ot instanceof Function?Ot:function(){return new Rt.a.Store(Object.assign({strict:!1},Ot,{state:Ot.state instanceof Function?Ot.state():{}}))};function Yt(t){var e=St(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function Zt(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===e.length)return n?t:t.modules;var r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},Zt(t.modules[r],e,n)}function te(t,e,n){var r=St(e);t.appends=t.appends||[],t.appends.push(n),t[n]=r.default||r}var ee=n(4),ne=n(274),re=n(263),ae=n(43);s.a.use(ee.a,{components:{VApp:pt.a,VNavigationDrawer:ne.a,VFooter:re.a,VToolbar:bt.a},directives:{Ripple:ae.a}});var oe=n(120),ie=n.n(oe);n(196);s.a.component("swatches",ie.a);var se=n(121),ue=n.n(se);s.a.use(ue.a),s.a.mixin({data:function(){return{fontFamilies:["Baron Neue","Bernier","Cheque","Deutsch Gothic","Dymaxion scriptC","Lobster","Open Sans","Playfair Display","Raleway","Times New Roman"],commonClearColor:"#EEEEEE"}},methods:{onFilePicked:function(t){var e=this,n=t.target.files;if(void 0!==n[0]){if(this.imageName=n[0].name,this.imageName.lastIndexOf(".")<=0)return;var r=new FileReader;r.readAsDataURL(n[0]),r.addEventListener("load",function(){e.imageUrl=r.result,e.imageFile=n[0]})}else this.imageName="",this.imageFile="",this.imageUrl=""},suitableIconColor:function(t){return["#ffffff","#f3f3f3","#efefef","#d9d9d9","white"].includes(t.toLowerCase())?"color: black":"color: white"},currentRouteName:function(){return this.$route.name},templates_ls:function(){return JSON.parse(localStorage.getItem("User Templates"))||[]},save_template_ls:function(t){var e=JSON.parse(localStorage.getItem("User Templates"))||[];e.push(t);try{localStorage.setItem("User Templates",JSON.stringify(e))}catch(t){console.log("Local Storage is full, Please empty data")}},remove_template_ls:function(t){var e=JSON.parse(localStorage.getItem("User Templates"));e.splice(t,1),localStorage.setItem("User Templates",JSON.stringify(e))}}}),s.a.component(j.name,j),s.a.component(N.name,N),s.a.component(I.name,I),s.a.component(ot.name,ot),s.a.use(b.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var ce={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function le(){return(le=i()(regeneratorRuntime.mark(function t(e){var n,r,a,o,i,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new C.a({mode:"history",base:"/cup-demo/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:A,routes:[{path:"/text",component:k,name:"text"},{path:"/geometry",component:E,name:"geometry"},{path:"/background",component:T,name:"background"},{path:"/image",component:$,name:"image"},{path:"/pattern",component:R,name:"pattern"},{path:"/",component:S,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=Wt(e)).$router=n,a=r.registerModule,r.registerModule=function(t,e,n){return a.call(r,t,e,Object.assign({preserveState:!0},n))},o=w()({router:n,store:r,nuxt:{defaultTransition:ce,transitions:[ce],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},ce,{name:t}):Object.assign({},ce,t):ce}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},$t),r.app=o,i=e?e.next:function(t){return o.router.push(t)},e?u=n.resolve(e.url).route:(c=W(n.options.base),u=n.resolve(c).route),t.next=13,Q(o,{route:u,next:i,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 13:(function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))}),window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=18;break;case 18:t.next=21;break;case 21:0,t.next=25;break;case 25:t.next=28;break;case 28:t.next=31;break;case 31:return t.abrupt("return",{app:o,router:n,store:r});case 32:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var pe,fe,he=[],de=window.__NUXT__||{};function me(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);Object.keys(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function ve(t,e,n){return xe.apply(this,arguments)}function xe(){return(xe=i()(regeneratorRuntime.mark(function t(e,n,r){var a,o,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!pe.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Z(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,z(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function ge(t,e){return de.serverRendered&&e&&q(t,e),t._Ctor=t,t}function ye(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof g[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g[t])}),!o)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():G(e[0],n).then(function(){return t(e.slice(1),n)})}(a,e)}function we(t,e,n){return _e.apply(this,arguments)}function _e(){return(_e=i()(regeneratorRuntime.mark(function t(e,n,r){var a,o,i,u,c,l,p,f,h,d,m,v,x,g,y,w,_=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return he=e===n?[]:J(n,a=[]).map(function(t,e){return Y(n.matched[a[e]].path)(n.params)}),o=!1,i=function(t){n.path===t.path&&_.$loading.finish&&_.$loading.finish(),n.path!==t.path&&_.$loading.pause&&_.$loading.pause(),o||(o=!0,r(t))},t.next=7,Q(pe,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=pe.nuxt.dateErr,this._hadError=!!pe.nuxt.err,(c=J(e,u=[])).length){t.next=25;break}return t.next=14,ye.call(this,c,pe.context);case 14:if(!o){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof U.layout?U.layout(pe.context):U.layout);case 18:return l=t.sent,t.next=21,ye.call(this,c,pe.context,l);case 21:if(!o){t.next=23;break}return t.abrupt("return");case 23:return pe.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(me(c,e,n)),t.prev=27,t.next=30,ye.call(this,c,pe.context);case 30:if(!o){t.next=32;break}return t.abrupt("return");case 32:if(!pe.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(p=c[0].options.layout)&&(p=p(pe.context)),t.next=38,this.loadLayout(p);case 38:return p=t.sent,t.next=41,ye.call(this,c,pe.context,p);case 41:if(!o){t.next=43;break}return t.abrupt("return");case 43:if(!pe.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:f=!0,t.prev=46,h=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(h=(x=v.next()).done){t.next=64;break}if("function"==typeof(g=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,g.options.validate(pe.context);case 58:if(f=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,h||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(f){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=Y(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,_._pathChanged&&_._queryChanged||t._path!==he[n])t._dataRefresh=!0;else if(!_._pathChanged&&_._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return _._diffQuery[t]}))}if(!_._hadError&&_._isMounted&&!t._dataRefresh)return Promise.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=o&&i?30:45;if(o){var c=G(t.options.asyncData,pe.context).then(function(e){q(t,e),_.$loading.increase&&_.$loading.increase(s)});a.push(c)}if(_.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(pe.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){_.$loading.increase&&_.$loading.increase(s)}),a.push(l)}return Promise.all(a)}));case 89:o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return he=[],y=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||y||500,b=t.t2,s.a.config.errorHandler&&s.a.config.errorHandler(b),"function"==typeof(w=U.layout)&&(w=w(pe.context)),t.next=108,this.loadLayout(w);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var b},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function be(t,e){B(t,function(t,e,n,r){return"object"!==a()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function Ce(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?U.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(pe.context)),this.setLayout(e)}function ke(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),a=J(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&a[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),Ce.call(n,t)})}function Ee(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),fe.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Te(){return(Te=i()(regeneratorRuntime.mark(function t(e){var n,r,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return pe=e.app,fe=e.router,e.store,t.next=5,Promise.all((void 0,c=W((u=fe).options.base,u.options.mode),B(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,a,o){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=ge(F(e),de.data?de.data[o]:null),r.components[a]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,a,o){return t.apply(this,arguments)}}())));case 5:return n=t.sent,r=new s.a(pe),a=de.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){Ee(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(me(n,fe.currentRoute)),he=fe.currentRoute.matched.map(function(t){return Y(t.path)(fe.currentRoute.params)})),r.$loading={},de.error&&r.error(de.error),fe.beforeEach(ve.bind(r)),fe.beforeEach(we.bind(r)),fe.afterEach(be),fe.afterEach(ke.bind(r)),!de.serverRendered){t.next=23;break}return o(),t.abrupt("return");case 23:we.call(r,fe.currentRoute,fe.currentRoute,function(t){if(!t)return be(fe.currentRoute,fe.currentRoute),Ce.call(r,fe.currentRoute),void o();fe.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 24:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.a.config,{silent:!0,performance:!1}),function(t){return le.apply(this,arguments)}().then(function(t){return Te.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);e.default={state:{object:[]},mutations:{ACTIVE_OBJECT_STATE:function(t,e){t.object=e}},actions:{updateActiveObject:function(t,e){(0,t.commit)("ACTIVE_OBJECT_STATE",e)}},getters:{ACTIVE_OBJECT:function(t){return t.object}}}}},[[130,12,7,9]]]);