(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{263:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},266:function(t,e,r){},267:function(t,e,r){"use strict";var n=r(1);e.a=n.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,r=e.props,n=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),r.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,n)}})},275:function(t,e,r){"use strict";var n=r(266);r.n(n).a},297:function(t,e,r){"use strict";r.r(e);r(55);var n={data:function(){return{imageName:"",imageUrl:"",imageFile:"",logoExample:"logo-example.png"}},methods:{emitImage:function(t){var image=t.target.parentNode.querySelector(".v-image__image").style.backgroundImage.slice(4,-1).replace(/"/g,"");this.$nuxt.$emit("ADD_IMAGE",image)},pickFile:function(){this.$refs.image.click()}}},o=(r(275),r(14)),l=r(22),c=r.n(l),v=r(108),d=r(249),m=r(267),f=r(105),_=r(21),y=r(99),h=r(253),x=r(110),k=r(251),C=r(257),V=r(252),w=r(100),I=r(51),D=r(263),F=r.n(D),N=r(39),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-top_outer"},[r("div",{staticClass:"flex-top_inner"},[r("v-item-group",{attrs:{multiple:""}},[r("v-container",{attrs:{"grid-list-md":"","pa-0":""}},[r("v-layout",{attrs:{wrap:""}},[t._l(10,function(e){return r("v-flex",{key:e,attrs:{xs3:"",height:"33%"}},[r("v-item",[r("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex align-center parent",attrs:{dark:""},on:{click:function(e){return t.emitImage(e)}}},[r("v-img",{staticClass:"grey lighten-2 coverDiv",attrs:{src:"~//assets/img/image"+e+".png","lazy-src":"~//assets/img/image"+e+".png","aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)],1)}),t._v(" "),r("v-flex",{attrs:{height:"33%",xs3:""}},[r("v-item",[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return r("v-card",{staticClass:"d-flex align-center text-xs-center logo-link",attrs:{height:"100%",color:"grey lighten-3"}},[r("v-card-title",{staticClass:"justify-center"},[r("h4",[t._v("Cоздать логотип")]),t._v(" "),r("v-fade-transition",[n?r("a",{staticClass:"logo-link_div grey lighten-4",style:{backgroundImage:"url(/assets/"+t.logoExample+")"},attrs:{href:"https://logo.squarespace.com/",target:"_blank"}},[r("div",[t._v("Бесплатно создайте свое"),r("br"),t._v(" лого и загрузите его к нам")]),t._v(" "),r("v-icon",{attrs:{color:"black"}},[t._v("arrow_forward_ios")])],1):t._e()])],1)],1)}}])})],1)],1),t._v(" "),r("v-flex",{attrs:{height:"33%",xs3:""}},[r("v-item",[r("v-card",{staticClass:"d-flex align-center parent uploadButton",attrs:{color:"grey lighten-3"},on:{click:t.pickFile},model:{value:t.imageName,callback:function(e){t.imageName=e},expression:"imageName"}},[t.imageUrl?r("v-img",{staticClass:"grey lighten-2 coverDiv",attrs:{src:t.imageUrl,"lazy-src":t.imageUrl,"aspect-ratio":"1"},on:{load:function(e){return t.$nuxt.$emit("ADD_IMAGE",t.imageUrl)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[r("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,1258913907)}):t._e(),t._v(" "),r("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}}),t._v(" "),t.imageUrl?t._e():r("div",{staticClass:"uploadButton_inner"},[r("v-icon",[t._v("attach_file")])],1)],1)],1)],1)],2)],1)],1)],1),t._v(" "),r("div",{staticClass:"flex-top_links"},[r("nuxt-link",{attrs:{to:"/"}},[r("v-btn",{attrs:{absolute:"",dark:"",fab:"",bottom:"",right:"",color:"grey darken-4"}},[r("v-icon",[t._v("keyboard_backspace")])],1)],1),t._v(" "),r("nuxt-link",{attrs:{to:"/geometry"}},[r("v-btn",{attrs:{absolute:"",dark:"",rotate:"90",fab:"",bottom:"",right:"",color:"grey darken-4"}},[r("v-icon",[t._v("keyboard_backspace")])],1)],1)],1)])},[],!1,null,"221bfe84",null);e.default=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardTitle:m.a,VContainer:f.a,VFadeTransition:_.c,VFlex:y.a,VHover:h.a,VIcon:x.a,VImg:k.a,VItem:C.a,VItemGroup:V.b,VLayout:w.a,VProgressCircular:I.a}),F()(component,{Ripple:N.a})}}]);