(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{260:function(t,e,n){},261:function(t,e,n){},273:function(t,e,n){"use strict";var l=n(260);n.n(l).a},274:function(t,e,n){"use strict";var l=n(261);n.n(l).a},291:function(t,e,n){"use strict";n.r(e);n(270),n(111),n(271),n(147);var l=n(15),o=n(21),r={data:function(){return{pageDisabled:!1,fontFamilies:["Baron Neue","Bernier","Cheque","Deutsch Gothic","Dymaxion scriptC","Lobster","Open Sans","Playfair Display","Raleway","Times New Roman"],ff:"Playfair Display",fz:75,lh:1.2,color:"#111111",background:"#FFFFFF",active_align:0,text_styles:[0],colors:["#ED120F","#E98860","#FFEE58","#00E676","#1E88E5","#111111","#FFFFFF"]}},computed:Object(l.a)({},Object(o.b)(["ACTIVE_OBJECT"])),mounted:function(){this.ACTIVE_OBJECT&&void 0!==this.ACTIVE_OBJECT.type&&"i-text"!==this.ACTIVE_OBJECT.type&&(this.pageDisabled=!0)},watch:{ACTIVE_OBJECT:{deep:!0,handler:function(t){!t||void 0!==t.type&&"i-text"!==t.type?this.pageDisabled=!0:(this.pageDisabled=!1,this.ff=t.fontFamily,this.fz=t.fontSize,this.lh=t.lineHeight,this.background=t.backgroundColor,this.color=t.fill,this.alignmentButton(t.textAlign),this.textStylesButtons(t.fontWeight,t.fontStyle,t.underline))}}},methods:{emitTextStyle:function(s){this.$nuxt.$emit("TEXT_DECORATIVE_STYLES",s)},alignmentButton:function(t){var e=Array.from(this.$refs.alignment.$el.querySelectorAll("button")).findIndex(function(button){return button.dataset.align===t});this.active_align=e},textStylesButtons:function(t,e,n){var l=[],o=Array.from(this.$refs.textStyle.$el.querySelectorAll("button")).map(function(t){return t.dataset.style});"bold"===t&&l.push(o.findIndex(function(button){return"bold"===button})),"italic"===e&&l.push(o.findIndex(function(button){return"italic"===button})),n&&l.push(o.findIndex(function(button){return"underline"===button})),this.text_styles=l}}},c=(n(273),n(274),n(14)),f=n(23),v=n.n(f),d=n(105),_=n(293),h=n(101),m=n(96),x=n(285),y=n(104),k=n(97),E=n(286),T=n(241),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-top_outer"},[n("div",{class:[{"flex-top_inner":!0},t.pageDisabled?"page-disabled":""]},[n("v-form",[n("v-container",{attrs:{"pa-0":"","fill-height":""}},[n("v-layout",{staticClass:"inner-action",attrs:{row:"",wrap:"","fill-height":"","align-start":""}},[n("v-flex",{attrs:{xs6:"","py-0":""}},[n("div",{staticClass:"hidden"},t._l(t.fontFamilies,function(e){return n("div",{style:{fontFamily:e}},[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("hope it will be loaded")]),t._v(" "),n("span",{staticStyle:{"font-style":"italic"}},[t._v("hope it will be loaded")])])}),0),t._v(" "),n("v-flex",{ref:"fontFamily",staticClass:"ff-text",attrs:{xs12:""}},[n("div",{staticClass:"label subheading pb-1"},[t._v("Шрифт")]),t._v(" "),n("v-select",{attrs:{items:t.fontFamilies,solo:""},on:{change:function(e){return t.$nuxt.$emit("SET_STYLE","fontFamily",t.ff)}},model:{value:t.ff,callback:function(e){t.ff=e},expression:"ff"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"","pt-1":"","pb-0":""}},[n("div",{staticClass:"label subheading"},[t._v("Цвет")]),t._v(" "),n("swatches",{attrs:{inline:"",colors:t.colors,"background-color":"","show-fallback":"",shapes:"circles","show-border":""},on:{input:function(e){return t.$nuxt.$emit("SET_STYLE","fill",t.color)}},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs6:"","py-0":""}},[n("v-flex",{attrs:{xs11:"","pb-0":""}},[n("div",{staticClass:"label subheading"},[t._v("Заливка")]),t._v(" "),n("swatches",{attrs:{inline:"","show-fallback":"","row-length":"6","show-border":"",shapes:"circles","background-color":""},on:{input:function(e){return t.$nuxt.$emit("SET_STYLE","backgroundColor",t.background)}},model:{value:t.background,callback:function(e){t.background=e},expression:"background"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs6:"","py-0":"","mt--5":""}},[n("v-flex",{attrs:{"py-0":""}},[n("div",{staticClass:"label subheading"},[t._v("Размер шрифта")]),t._v(" "),n("v-slider",{attrs:{"thumb-label":"","thumb-size":"25",color:"grey darken-0"},on:{change:function(e){return t.$nuxt.$emit("SET_STYLE","fontSize",t.fz)}},model:{value:t.fz,callback:function(e){t.fz=e},expression:"fz"}})],1),t._v(" "),n("v-flex",{attrs:{"py-0":""}},[n("div",{staticClass:"label subheading"},[t._v("Интерлиньяж")]),t._v(" "),n("v-slider",{attrs:{"thumb-label":"","thumb-size":"25",color:"grey darken-0",min:"0.5",max:"5",step:"0.1"},on:{change:function(e){return t.$nuxt.$emit("SET_STYLE","lineHeight",t.lh)}},model:{value:t.lh,callback:function(e){t.lh=e},expression:"lh"}})],1)],1),t._v(" "),n("v-flex",{attrs:{xs3:"","pa-0":"","mt--5":"","ml-1":""}},[n("div",{staticClass:"label subheading pb-2"},[t._v("Cтиль")]),t._v(" "),n("div",{staticClass:"text-styles--flex"},[n("div",[n("v-btn-toggle",{ref:"alignment",model:{value:t.active_align,callback:function(e){t.active_align=e},expression:"active_align"}},[n("v-btn",{attrs:{flat:"","data-align":"left"},on:{click:function(e){return t.$nuxt.$emit("SET_STYLE","textAlign","left")}}},[n("v-icon",[t._v("format_align_left")])],1),t._v(" "),n("v-btn",{attrs:{flat:"","data-align":"center"},on:{click:function(e){return t.$nuxt.$emit("SET_STYLE","textAlign","center")}}},[n("v-icon",[t._v("format_align_center")])],1),t._v(" "),n("v-btn",{attrs:{flat:"","data-align":"right"},on:{click:function(e){return t.$nuxt.$emit("SET_STYLE","textAlign","right")}}},[n("v-icon",[t._v("format_align_right")])],1)],1)],1),t._v(" "),n("div",{staticClass:"ml-3"},[n("v-btn-toggle",{ref:"textStyle",attrs:{multiple:""},model:{value:t.text_styles,callback:function(e){t.text_styles=e},expression:"text_styles"}},[n("v-btn",{attrs:{flat:"","data-style":"bold"},on:{click:function(e){return t.emitTextStyle("bold")}}},[n("v-icon",[t._v("format_bold")])],1),t._v(" "),n("v-btn",{attrs:{flat:"","data-style":"italic"},on:{click:function(e){return t.emitTextStyle("italic")}}},[n("v-icon",[t._v("format_italic")])],1),t._v(" "),n("v-btn",{attrs:{flat:"","data-style":"underline"},on:{click:function(e){return t.emitTextStyle("underline")}}},[n("v-icon",[t._v("format_underlined")])],1)],1)],1)])]),t._v(" "),n("v-flex",{staticClass:"add-remove-buttons",attrs:{xs2:"","pa-0":"","mt-1":"","text-xs-right":""}},[n("v-btn",{attrs:{small:"",fab:"",light:"",color:"grey lighten-5 ma-0 elevation-3"},on:{click:function(e){return t.$nuxt.$emit("ADD_TEXT")}}},[n("v-icon",[t._v("add")])],1),t._v(" "),n("v-btn",{attrs:{small:"",fab:"",light:"",color:"grey lighten-5 my-0 mr-0 ml-2 elevation-3"},on:{click:function(e){return t.$nuxt.$emit("REMOVE_OBJECT")}}},[n("v-icon",[t._v("remove")])],1)],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"flex-top_links"},[n("nuxt-link",{attrs:{to:"/"}},[n("v-btn",{attrs:{absolute:"",dark:"",fab:"",bottom:"",right:"",color:"grey darken-4"}},[n("v-icon",[t._v("keyboard_backspace")])],1)],1),t._v(" "),n("nuxt-link",{attrs:{to:"/image"}},[n("v-btn",{attrs:{absolute:"",dark:"",rotate:"90",fab:"",bottom:"",right:"",color:"grey darken-4"}},[n("v-icon",[t._v("keyboard_backspace")])],1)],1)],1)])},[],!1,null,"ddcd0ed2",null);e.default=component.exports;v()(component,{VBtn:d.a,VBtnToggle:_.a,VContainer:h.a,VFlex:m.a,VForm:x.a,VIcon:y.a,VLayout:k.a,VSelect:E.a,VSlider:T.a})}}]);