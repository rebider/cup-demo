(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{210:function(t,e,n){},211:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},212:function(t,e,n){},213:function(t,e,n){},218:function(t,e,n){"use strict";n(210);var r=n(0);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return r.a.extend({name:"proxyable",model:{prop:t,event:e},props:o({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:o({},t,function(t){this.internalLazyValue=t})})}(),c=n(9),h=n(4),d=n(7);n.d(e,"a",function(){return v});var m=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t},v=Object(h.a)(l,c.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return m({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter(function(e,n){return t.toggleMethod(t.getValue(e,n))})},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(d.b)("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",function(){return e.onClick(t,n)}),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(function(t){return t!==n}):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex(function(e){return e===t});this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}});e.b=v.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}})},220:function(t,e,n){},221:function(t,e,n){"use strict";var r=n(0);e.a=r.a.extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var data=e.data,n=e.props,r=e.children;return data.staticClass=("v-card__title "+(data.staticClass||"")).trim(),n.primaryTitle&&(data.staticClass+=" v-card__title--primary"),t("div",data,r)}})},222:function(t,e,n){"use strict";var r=n(0);e.a=r.a.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var r=parseInt(this[t+"Delay"],10);this[t+"Timeout"]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},r)}}})},229:function(t,e,n){"use strict";n(212),n(213);var r=n(100),o=n(4),l=Object(o.a)(r.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=n(7);e.a=l.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"==typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c.a)("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch(function(e){Object(c.b)("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},image.onerror=this.onError,image.src=this.normalisedSrc.src,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;!function n(){var r=img.naturalHeight,o=img.naturalWidth;r||o?t.calculatedAspectRatio=o/r:null!=e&&setTimeout(n,e)}()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=l.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},230:function(t,e,n){"use strict";var r=n(99),o=n(4),l=n(7);e.a=Object(o.a)(Object(r.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item",props:{value:{required:!1}},render:function(){if(!this.$scopedSlots.default)return Object(l.b)("v-item is missing a default scopedSlot",this),null;var t,e,n,element=void 0;return this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:(t={},e=this.activeClass,n=this.isActive,e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t)}),element):(Object(l.b)("v-item should only contain a single element",this),element)}})},246:function(t,e,n){"use strict";var r=n(220);n.n(r).a},272:function(t,e,n){"use strict";n.r(e);n(41);var r={data:function(){return{imageName:"",imageUrl:"",imageFile:"",logoExample:"logo-example.png"}},methods:{emitImage:function(t){var image=t.target.parentNode.querySelector(".v-image__image").style.backgroundImage.slice(4,-1).replace(/"/g,"");this.$nuxt.$emit("ADD_IMAGE",image)},pickFile:function(){this.$refs.image.click()}}},o=(n(246),n(19)),l=n(40),c=n.n(l),h=n(89),d=n(204),m=n(221),v=n(86),f=n(65),y=n(84),_=n(222),S=n(94),x=n(4),V=n(7),k=Object(x.a)(_.a,S.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(V.b)("v-hover is missing a default scopedSlot or bound value",this),null;var element=void 0;return this.$scopedSlots.default?element=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(element=this.$slots.default[0]),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(V.b)("v-hover should only contain a single element",this),element)}}),A=n(91),C=n(229),I=n(230),$=n(218),z=n(85),O=n(83),j=n(211),w=n.n(j),L=n(98),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-top_outer"},[n("div",{staticClass:"flex-top_inner"},[n("v-item-group",{attrs:{multiple:""}},[n("v-container",{attrs:{"grid-list-md":"","pa-0":""}},[n("v-layout",{attrs:{wrap:""}},[t._l(10,function(e){return n("v-flex",{key:e,attrs:{xs3:"",height:"33%"}},[n("v-item",[n("v-card",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex align-center parent",attrs:{dark:""},on:{click:function(e){return t.emitImage(e)}}},[n("v-img",{staticClass:"grey lighten-2 coverDiv",attrs:{src:"assets/img/image"+e+".png","lazy-src":"assets/img/image"+e+".png","aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)],1)}),t._v(" "),n("v-flex",{attrs:{height:"33%",xs3:""}},[n("v-item",[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return n("v-card",{staticClass:"d-flex align-center text-xs-center logo-link",attrs:{height:"100%",color:"grey lighten-3"}},[n("v-card-title",{staticClass:"justify-center"},[n("h4",[t._v("Cоздать логотип")]),t._v(" "),n("v-fade-transition",[r?n("a",{staticClass:"logo-link_div grey lighten-4",style:{backgroundImage:"url(assets/"+t.logoExample+")"},attrs:{href:"https://logo.squarespace.com/",target:"_blank"}},[n("div",[t._v("Бесплатно создайте свое"),n("br"),t._v(" лого и загрузите его к нам")]),t._v(" "),n("v-icon",{attrs:{color:"black"}},[t._v("arrow_forward_ios")])],1):t._e()])],1)],1)}}])})],1)],1),t._v(" "),n("v-flex",{attrs:{height:"33%",xs3:""}},[n("v-item",[n("v-card",{staticClass:"d-flex align-center parent uploadButton",attrs:{color:"grey lighten-3"},on:{click:t.pickFile},model:{value:t.imageName,callback:function(e){t.imageName=e},expression:"imageName"}},[t.imageUrl?n("v-img",{staticClass:"grey lighten-2 coverDiv",attrs:{src:t.imageUrl,"lazy-src":t.imageUrl,"aspect-ratio":"1"},on:{load:function(e){return t.$nuxt.$emit("ADD_IMAGE",t.imageUrl)}},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-layout",{attrs:{"fill-height":"","align-center":"","justify-center":"","ma-0":""}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!1,1258913907)}):t._e(),t._v(" "),n("input",{ref:"image",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFilePicked}}),t._v(" "),t.imageUrl?t._e():n("div",{staticClass:"uploadButton_inner"},[n("v-icon",[t._v("attach_file")])],1)],1)],1)],1)],2)],1)],1)],1),t._v(" "),n("div",{staticClass:"flex-top_links"},[n("nuxt-link",{attrs:{to:"/"}},[n("v-btn",{attrs:{absolute:"",dark:"",fab:"",bottom:"",right:"",color:"grey darken-4"}},[n("v-icon",[t._v("keyboard_backspace")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/geometry"}},[n("v-btn",{attrs:{absolute:"",dark:"",rotate:"90",fab:"",bottom:"",right:"",color:"grey darken-4"}},[n("v-icon",[t._v("keyboard_backspace")])],1)],1)],1)])},[],!1,null,"1e7bba7e",null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardTitle:m.a,VContainer:v.a,VFadeTransition:f.b,VFlex:y.a,VHover:k,VIcon:A.a,VImg:C.a,VItem:I.a,VItemGroup:$.b,VLayout:z.a,VProgressCircular:O.a}),w()(component,{Ripple:L.a})}}]);