(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"1aef":function(e,a,t){"use strict";var i=t("692f"),n=t.n(i);n.a},6687:function(e,a,t){},"692f":function(e,a,t){},"703c":function(e,a,t){"use strict";var i=t("6687"),n=t.n(i);n.a},"8d27":function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{staticClass:"page-title text-h5"},[e._t("default"),e._t("subtitle",[e.subtitle?t("p",{staticClass:"text-body2 page-title__sub"},[e._v(e._s(e.subtitle))]):e._e()])],2)},n=[],r={name:"PageTitle",props:{subtitle:{type:String,required:!1,default:null}}},o=r,l=(t("1aef"),t("2877")),c=Object(l["a"])(o,i,n,!1,null,null,null);a["a"]=c.exports},b0b9:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-page",{class:["q-mx-auto",{"q-px-md":e.$q.screen.lt.lg},{"flex flex-center column":this.vertical}],style:e.styles},[e._t("default")],2)},n=[],r={name:"CenteredContent",props:{maxWidth:{type:Number,default:1e3},vertical:{type:Boolean,default:!1}},computed:{styles(){return{"max-width":this.maxWidth+"px","padding-bottom":"24px"}}}},o=r,l=t("2877"),c=t("9989"),s=t("eebe"),u=t.n(s),d=Object(l["a"])(o,i,n,!1,null,null,null);a["a"]=d.exports;u()(d,"components",{QPage:c["a"]})},ec95:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("centered-content",[t("page-title",{attrs:{subtitle:"Daily statistics and tasks"}},[e._v("\n        Dashboard\n    ")]),t("div",{staticClass:"row  q-gutter-lg"},[t("div",{staticClass:"col"},[t("indicator-card",{attrs:{icon:"las la-bed","icon-color":"green-4",color:"green-1",caption:"Rooms Available"}},[e._v("\n                4\n            ")])],1),t("div",{staticClass:"col"},[t("indicator-card",{attrs:{icon:"las la-graduation-cap","icon-color":"blue-4",color:"blue-1",caption:"New Students"}},[e._v("\n                23\n            ")])],1),t("div",{staticClass:"col"},[t("indicator-card",{attrs:{icon:"las la-campground","icon-color":"brown-4",color:"brown-1",caption:"New Households"}},[e._v("\n                8\n            ")])],1),t("div",{staticClass:"col"},[t("indicator-card",{attrs:{icon:"las la-address-card","icon-color":"red-4",color:"red-1",caption:"Pending Applications"}},[e._v("\n                3\n            ")])],1)])],1)},n=[],r=t("b0b9"),o=t("8d27"),l=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"indicator"},[t("q-avatar",{attrs:{color:e.color,"text-color":e.iconColor,size:"64px",icon:e.icon}}),t("h3",{staticClass:"indicator__title"},[e._t("default")],2),t("div",{staticClass:"indicator__caption"},[e._v(e._s(e.caption))])],1)},c=[],s={name:"IndicatorCard",props:{icon:{type:String,required:!0},color:{type:String,required:!0},iconColor:{type:String,required:!0},caption:{type:String,required:!0}}},u=s,d=(t("703c"),t("2877")),m=t("cb32"),p=t("eebe"),b=t.n(p),f=Object(d["a"])(u,l,c,!1,null,"ddb3b0b6",null),g=f.exports;b()(f,"components",{QAvatar:m["a"]});var v={name:"PageIndex",components:{IndicatorCard:g,PageTitle:o["a"],CenteredContent:r["a"]},data(){return{columns:[{name:"name",required:!0,label:"Dessert (100g serving)",align:"left",field:e=>e.name,format:e=>""+e,sortable:!0},{name:"calories",align:"center",label:"Calories",field:"calories",sortable:!0},{name:"fat",label:"Fat (g)",field:"fat",sortable:!0},{name:"carbs",label:"Carbs (g)",field:"carbs"},{name:"protein",label:"Protein (g)",field:"protein"},{name:"sodium",label:"Sodium (mg)",field:"sodium"},{name:"calcium",label:"Calcium (%)",field:"calcium",sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)},{name:"iron",label:"Iron (%)",field:"iron",sortable:!0,sort:(e,a)=>parseInt(e,10)-parseInt(a,10)}],data:[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,sodium:87,calcium:"14%",iron:"1%"},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,sodium:129,calcium:"8%",iron:"1%"},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,sodium:337,calcium:"6%",iron:"7%"},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,sodium:413,calcium:"3%",iron:"8%"},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,sodium:327,calcium:"7%",iron:"16%"},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,sodium:50,calcium:"0%",iron:"0%"},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,sodium:38,calcium:"0%",iron:"2%"},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,sodium:562,calcium:"0%",iron:"45%"},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,sodium:326,calcium:"2%",iron:"22%"},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,sodium:54,calcium:"12%",iron:"6%"}]}}},_=v,C=Object(d["a"])(_,i,n,!1,null,null,null);a["default"]=C.exports}}]);