(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["594a029f"],{"1dd3":function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected" val="Image1" selectedIcon unselectedIcon bgSelectedColor="bg-primary"> \n      <q-card class="my-card" :class="{\'text-white\':selected==\'Image1\'}">\n      <img src="https://cdn.quasar.dev/img/mountains.jpg">\n\n      <q-card-section>\n        <div class="text-h6">Our Changing Planet</div>\n        <div class="text-subtitle2">by John Doe</div>\n      </q-card-section>\n\n      <q-card-section>\n        Set background-color in css to transparent, for q-selectable change the background\n      </q-card-section>\n    </q-card>\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image2"  selectedIcon unselectedIcon bgSelectedColor="bg-red">\n      <q-card class="my-card" :class="{\'text-white\':selected==\'Image2\'}">\n      <img src="https://cdn.quasar.dev/img/mountains.jpg">\n\n      <q-card-section>\n        <div class="text-h6">Our Changing Planet</div>\n        <div class="text-subtitle2">by John Doe</div>\n      </q-card-section>\n\n      <q-card-section>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \n      </q-card-section>\n    </q-card>\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image3"  selectedIcon unselectedIcon>\n      <q-card class="my-card" :class="{\'bg-green\':selected==\'Image3\', \'text-white\':selected==\'Image3\'}">\n      <img src="https://cdn.quasar.dev/img/mountains.jpg">\n\n      <q-card-section>\n        <div class="text-h6">Our Changing Planet</div>\n        <div class="text-subtitle2">by John Doe</div>\n      </q-card-section>\n\n      <q-card-section>\n        Another way to change background color\n      </q-card-section>\n    </q-card>\n    </q-selectable>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selected: null\n    }\n  }\n}\n<\/script>\n\n<style scoped>\n.my-card{\n  width: 100%;\n  max-width: 250px;\n  background-color: transparent;\n}\n</style>\n'},2123:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n<div>\n  <p class="text-subtitle1">Single selection if v-model not is Array</p>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected" val="Image2"> \n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image3">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image4">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n  </div>\n\n  <p class="text-subtitle1">Multi-selection if v-model is Array</p>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selectedValues" val="Image2"> \n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selectedValues" val="Image3">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selectedValues" val="Image4">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n  </div>\n</div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selected: "Image3",\n      selectedValues: []\n    }\n  }\n}\n<\/script>\n\n'},"5f60":function(e,t,n){},"6dec":function(e,t,n){"use strict";var a=n("5f60"),s=n.n(a);s.a},"8b24":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("hero",[a("section",{attrs:{id:"Description"}},[a("q-markdown",[e._v('\n# QSelectable\nQSelectable is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It allows you to select one or more items. The items can be images or any other content.\n# Install\nTo add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qselectable\n```\n# Uninstall\nTo remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qselectable\n```\n# Source code\nCan be found [here](https://github.com/zoao/app-extension-qselectable).\n# Working with QSelectable\nWorking with QSelectable can be very simple. Almost all essential properties have defaults. Here is an example of using QSelectable:\n```js\n<q-selectable val="image1" v-model="selectedItems"/>\n  <q-img :src="url" style="width: 180px;" />\n</q-selectable>\n```\n:::warning\nThis is a beta release\n:::\n\n      ')])],1),a("example-card",{attrs:{title:"Basic",name:"Basic","tag-parts":e.getTagParts(n("2123").default)}}),a("example-card",{attrs:{title:"Cards",name:"Cards","tag-parts":e.getTagParts(n("1dd3").default)}}),a("example-card",{attrs:{title:"Styles",name:"Styles","tag-parts":e.getTagParts(n("df48").default)}}),a("example-card",{attrs:{title:"Behaviors",name:"Behaviors","tag-parts":e.getTagParts(n("c19d").default)}}),a("example-card",{attrs:{title:"Slots",name:"Slots","tag-parts":e.getTagParts(n("d78f").default)}}),a("example-card",{attrs:{title:"Gallery",name:"Gallery","tag-parts":e.getTagParts(n("ce83").default)}}),a("component-api",{attrs:{title:"QSelectable API",json:e.apiJson}}),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),n("main",{staticClass:"flex flex-start justify-center inset-shadow"},[n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"page-header"},[n("div",{staticClass:"text-h1 project-name"},[e._v("QSelectable")]),n("div",{staticClass:"text-h2 project-tagline"},[e._v("Selectable elements")]),n("div",{staticClass:"byline"},[e._v("Created and maintained by João Martins")]),n("div",{staticClass:"quasar"},[e._v("A Quasar Framework App Extension")])])}],i={name:"Hero"},o=i,d=n("2877"),r=Object(d["a"])(o,l,c,!1,null,null,null),m=r.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:e.slugifiedTitle}},[n("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[n("q-toolbar",[n("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[n("q-toolbar-title",{staticClass:"example-title",staticStyle:{padding:"5px 20px"},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[n("span",{staticClass:"ellipsis"},[e._v(e._s(e.title))])])],1)],1),this.$slots.default?n("q-separator"):e._e(),this.$slots.default?n("q-card-section",[e._t("default")],2):e._e(),n("q-separator"),n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab",{attrs:{name:"template",label:"Template"}}):e._e(),e.parts.script?n("q-tab",{attrs:{name:"script",label:"Script"}}):e._e(),e.parts.style?n("q-tab",{attrs:{name:"style",label:"Style"}}):e._e()],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[e.parts.template?n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:e.parts.template}})],1):e._e(),e.parts.script?n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:e.parts.script}})],1):e._e(),e.parts.style?n("q-tab-panel",{attrs:{name:"style"}},[n("q-markdown",{attrs:{src:e.parts.style}})],1):e._e()],1)],1)],1),n("q-separator"),n(e.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},u=[];n("ac6a"),n("cadf"),n("06db"),n("456d"),n("a481");function g(e){var t=window.location.origin+window.location.pathname+"#"+e,n=document.createElement("textarea");n.className="fixed-top",n.value=t,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function q(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}var v={name:"ExampleCard",components:{Basic:function(){return n.e("2d20edd2").then(n.bind(null,"b0d2"))},Cards:function(){return n.e("a18f45d6").then(n.bind(null,"8384"))},Styles:function(){return n.e("1dec6202").then(n.bind(null,"6362"))},Behaviors:function(){return n.e("49acbd5c").then(n.bind(null,"4a2a"))},Slots:function(){return n.e("12d6e2f2").then(n.bind(null,"b3c3"))},Gallery:function(){return n.e("2d22d3c5").then(n.bind(null,"f742"))}},props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return q(this.title)}},methods:{copyHeading:g,updateParts:function(){var e=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==e.tagParts[t]&&(e.parts[t]="```\n"+e.tagParts[t]+"\n```")}))}}},b=v,h=Object(d["a"])(b,p,u,!1,null,null,null),f=h.exports,y=n("65cd"),x=n("2d6c"),w=(n("11fd").version,{name:"Examples",components:{Hero:m,ExampleCard:f},data:function(){return{tempToc:[],apiJson:x}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Description"),this.addToToc("Basic"),this.addToToc("Cards"),this.addToToc("Styles"),this.addToToc("Behaviors"),this.addToToc("Slots"),this.addToToc("Gallery"),this.addToToc("QSelectable API"),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{getTagParts:y["a"],addToToc:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=q(e);this.tempToc.push({children:[],id:n,label:e,level:t})}}}),I=w,S=(n("6dec"),Object(d["a"])(I,a,s,!1,null,null,null));t["default"]=S.exports},c19d:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n<div>\n  <p class="text-subtitle1">Disable items</p>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected" val="Image2"> \n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image3" disable>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image4">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n    </div>\n\n<p class="text-subtitle1">Long press for first selection, and show unselected icon only if one is selected</p>\n<div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected2" val="Image5" :longPressFirstSelection="600" onlyShowUnselectedIconIfOneSel>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected2" val="Image6" :longPressFirstSelection="600" onlyShowUnselectedIconIfOneSel>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>\n    </q-selectable>\n\n    <q-selectable v-model="selected2" val="Image7" :longPressFirstSelection="600" onlyShowUnselectedIconIfOneSel>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>\n    </q-selectable>\n  </div>\n\n  <p class="text-subtitle1">No user interaction, only select by code. Property: manual = true</p>\n  <div class="q-pa-md items-start q-gutter-md">\n    <q-btn @click="selected3 = \'Image5\'">Select 1 image</q-btn>\n    <q-btn @click="selected3 = \'Image7\'">Select 3 image</q-btn>\n    <q-btn @click="selected3 = null">uncheck All</q-btn>\n  </div>\n<div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected3" val="Image5" manual unselectedIcon>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected3" val="Image6" manual unselectedIcon>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>\n    </q-selectable>\n\n    <q-selectable v-model="selected3" val="Image7" manual unselectedIcon>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;"/>\n    </q-selectable>\n  </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selected: [],\n      selected2: [],\n      selected3: null\n    }\n  }\n}\n<\/script>\n\n<style scoped lang="scss">\n.image7.selected{\n  outline: 4px $primary solid;\n}\n</style>'},ce83:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n<div>\n  <p class="text-subtitle1">Gallery sample. Zoom with <a href="https://quasarframework.github.io/app-extension-qzoom/">QZoom extension</a></p>\n\n<p class="text-subtitle1">1. Long press, to select elements</p>\n  \n  <div class="q-pa-md items-start q-gutter-md">\n    <q-btn @click="selectedValues= []">uncheck All</q-btn>\n    <q-toggle v-model="showUnselectedIcon" label="Show unchecked icon" left-label />\n  </div>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selectedValues" val="Image2" :longPressFirstSelection="600" :onlyShowUnselectedIconIfOneSel="!showUnselectedIcon" style="width: 180px;"> \n      <q-zoom background-color="blue-grey-1" :manual="selectedValues.length > 0">\n        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />\n      </q-zoom>\n    </q-selectable>\n\n    <q-selectable v-model="selectedValues" val="Image3" :longPressFirstSelection="600" :onlyShowUnselectedIconIfOneSel="!showUnselectedIcon" style="width: 180px;">\n      <q-zoom background-color="blue-grey-1" :manual="selectedValues.length > 0">\n        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>\n      </q-zoom>\n    </q-selectable>\n\n    <q-selectable v-model="selectedValues" val="Image4" :longPressFirstSelection="600" :onlyShowUnselectedIconIfOneSel="!showUnselectedIcon" style="width: 180px;">\n      <q-zoom background-color="blue-grey-1" :manual="selectedValues.length > 0">\n        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>\n      </q-zoom>\n    </q-selectable>\n  </div>\n    <p class="text-subtitle1">2. Only icon is selectable</p>\n<div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selectedValues2" val="Image5" style="width: 180px;" onlySelectInIcon> \n      <q-zoom background-color="blue-grey-1">\n        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>\n      </q-zoom>\n    </q-selectable>\n\n    <q-selectable v-model="selectedValues2" val="Image6" style="width: 180px;" onlySelectInIcon>\n      <q-zoom background-color="blue-grey-1">\n        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>\n      </q-zoom>\n    </q-selectable>\n\n    <q-selectable v-model="selectedValues2" val="Image7" style="width: 180px;" onlySelectInIcon>\n      <q-zoom background-color="blue-grey-1">\n        <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>\n      </q-zoom>\n    </q-selectable>\n  </div>\n</div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selectedValues: [],\n      selectedValues2: [],\n      showUnselectedIcon: false\n    }\n  }\n}\n<\/script>\n\n'},d78f:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n<div>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected" val="Image2" style="width: 180px;"> \n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />\n      <template v-slot:selected>\n        <div class="q-pa-md">\n          <div class="text-h4 q-mb-md">Selected</div>\n          <div class="q-my-md">Lorem ipsum dolor sit, amet consecteturus.</div>\n        </div>\n      </template>\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image3" hideContentOnSelected  style="width: 180px;">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"/>\n      <template v-slot:selected>\n        <div class="q-pa-md">\n          <div class="text-h4 q-mb-md">Selected</div>\n          <div class="q-my-md">Lorem ipsum dolor sit, amet consecteturus.</div>\n        </div>\n      </template>\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image4" style="width: 180px;" iconPosition="top right" class="slotIcon"  bgSelectedColor="bg-white">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1"  />\n      \n      <template v-slot:icon="slotProps">\n         <div v-if="slotProps.selected" class="q-pa-sm bg-green text-white">Selected</div>\n         <div v-else></div>\n      </template>\n    </q-selectable>\n    \n  </div>\n</div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selected: ""\n    }\n  }\n}\n<\/script>\n\n<style scoped lang="scss">\n.slotIcon.selected{\n  outline: 4px $green solid;\n  padding: 2px;\n}\n</style>\n\n\n'},df48:function(e,t,n){"use strict";n.r(t),t["default"]='<template>\n  <div class="q-pa-md row items-start q-gutter-md">\n    <q-selectable v-model="selected" val="Image2" selectedIconColor="red" unselectedIconColor="green"> \n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image3" selectedIcon="https" selectedIconColor="green" unselectedIcon>\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image4" iconPosition="bottom right" iconSize="xl">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" style="width: 180px;" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image5" paddingSelected style="width: 180px;">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image6" paddingSelected bgSelectedColor="bg-black" style="width: 180px;">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />\n    </q-selectable>\n\n    <q-selectable v-model="selected" val="Image7" class="image7" style="width: 180px;">\n      <q-img src="https://cdn.quasar.dev/img/mountains.jpg" :ratio="1" />\n    </q-selectable>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      selected: []\n    }\n  }\n}\n<\/script>\n\n<style scoped lang="scss">\n.image7.selected{\n  outline: 4px $primary solid;\n}\n</style>'}}]);