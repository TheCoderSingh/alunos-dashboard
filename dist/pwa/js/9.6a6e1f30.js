(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"1aef":function(t,e,a){"use strict";var l=a("692f"),n=a.n(l);n.a},"33ac":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("centered-content",[a("page-title",{attrs:{subtitle:"Manage system access"}},[t._v("\n        Admins\n    ")]),a("div",{staticClass:"row q-col-gutter-lg"},[a("div",{staticClass:"col col-12 cold-sm-6 col-md-4 col-lg-3"},[a("admin-card",{attrs:{role:"Owner",name:"Walter Galvão",avatar:"https://lh3.googleusercontent.com/ogw/ADGmqu8_T25h9p7SA5aEJBdWNbQnGWgscqDVUPhiLv9m=s83-c-mo",email:"admin@langara.ca",to:{name:"alunos"}}})],1),a("div",{staticClass:"col col-12 cold-sm-6 col-md-4 col-lg-3"},[a("admin-card",{attrs:{role:"Homestay Coordinator",name:"Karen Filipelli",email:"karen@langara.ca",avatar:"https://i.redd.it/sgirqwcx58i01.jpg",to:{name:"alunos"}}})],1)])],1)},n=[],r=a("8d27"),s=a("b0b9"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",{staticClass:"q-pt-md text-center"},[a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.role))]),a("q-card-section",[a("q-avatar",{attrs:{size:"120px"}},[a("img",{attrs:{src:t.avatar}})])],1),a("q-card-section",[a("div",{staticClass:"text-h5"},[t._v(t._s(t.name))]),a("div",[t._v(t._s(t.email))])])],1)},o=[],c={name:"AdminCard",props:{name:{type:String,required:!0},avatar:{type:String,required:!0},email:{type:String,required:!0},role:{type:String,required:!0},to:{type:Object,required:!0}}},u=c,d=a("2877"),m=a("f09f"),p=a("0170"),g=a("a370"),f=a("cb32"),b=a("9c40"),v=a("eebe"),h=a.n(v),_=Object(d["a"])(u,i,o,!1,null,null,null),q=_.exports;h()(_,"components",{QCard:m["a"],QItemLabel:p["a"],QCardSection:g["a"],QAvatar:f["a"],QBtn:b["a"]});var x={name:"StudentList",components:{AdminCard:q,CenteredContent:s["a"],PageTitle:r["a"]},data:()=>({columns:[{name:"name",label:"Student",align:"left",field:t=>t.name},{name:"originCountry",label:"From",align:"left",field:t=>t.originCountry},{name:"household",label:"Household",align:"left",field:t=>t.household},{name:"status",label:"Status",align:"center",field:t=>t.status},{name:"actions",align:"right"}],data:[{name:"Walter Barros Galvão Neto"}]})},C=x,y=Object(d["a"])(C,l,n,!1,null,null,null);e["default"]=y.exports},"692f":function(t,e,a){},"8d27":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"page-title text-h5"},[t._t("default"),t._t("subtitle",[t.subtitle?a("p",{staticClass:"text-body2 page-title__sub"},[t._v(t._s(t.subtitle))]):t._e()])],2)},n=[],r={name:"PageTitle",props:{subtitle:{type:String,required:!1,default:null}}},s=r,i=(a("1aef"),a("2877")),o=Object(i["a"])(s,l,n,!1,null,null,null);e["a"]=o.exports},b0b9:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{class:["q-mx-auto",{"q-px-md":t.$q.screen.lt.lg},{"flex flex-center column":this.vertical}],style:t.styles},[t._t("default")],2)},n=[],r={name:"CenteredContent",props:{maxWidth:{type:Number,default:1e3},vertical:{type:Boolean,default:!1}},computed:{styles(){return{"max-width":this.maxWidth+"px","padding-bottom":"24px"}}}},s=r,i=a("2877"),o=a("9989"),c=a("eebe"),u=a.n(c),d=Object(i["a"])(s,l,n,!1,null,null,null);e["a"]=d.exports;u()(d,"components",{QPage:o["a"]})}}]);