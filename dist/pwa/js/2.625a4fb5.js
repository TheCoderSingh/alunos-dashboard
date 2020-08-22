(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1aef":function(t,e,a){"use strict";var n=a("692f"),l=a.n(n);l.a},"692f":function(t,e,a){},"8d27":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",{staticClass:"page-title text-h5"},[t._t("default"),t._t("subtitle",[t.subtitle?a("p",{staticClass:"text-body2 page-title__sub"},[t._v(t._s(t.subtitle))]):t._e()])],2)},l=[],s={name:"PageTitle",props:{subtitle:{type:String,required:!1,default:null}}},i=s,o=(a("1aef"),a("2877")),c=Object(o["a"])(i,n,l,!1,null,null,null);e["a"]=c.exports},aa51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("centered-content",[a("page-title",{attrs:{subtitle:"List of homestays and student houses"}},[t._v("\n        Households\n    ")]),a("q-card",[a("q-card-section",[a("q-table",{attrs:{flat:"",data:t.data,columns:t.columns,loading:t.isLoading,"row-key":"name"},scopedSlots:t._u([{key:"body-cell-name",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-avatar",{staticClass:"q-mr-sm"},[a("q-img",{attrs:{src:e.row.avatar.url}})],1),t._v("\n                        "+t._s(e.value)+"\n                    ")],1)]}},{key:"body-cell-actions",fn:function(e){return[a("q-td",{attrs:{props:e}},[a("q-btn",{attrs:{round:"",color:"icon",flat:"",icon:"las la-ellipsis-v"}},[a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:"",to:{name:"households.details",params:{id:e.row.id}}}},[a("q-item-section",[t._v("View Details")])],1)],1)],1)],1)],1)]}}])})],1)],1)],1)},l=[],s=(a("fb6a"),a("ded3")),i=a.n(s),o=a("c973"),c=a.n(o),r=a("8d27"),u=a("b0b9"),d=a("2f62"),m=a("5fb0"),f={name:"HouseholdList",components:{CenteredContent:u["a"],PageTitle:r["a"]},created(){var t=this;return c()((function*(){yield t.paginate(),t.isLoading=!1}))()},data:()=>({columns:[{name:"name",label:"Name",align:"left",field:t=>t.name},{name:"type",label:"Type",align:"left",field:t=>t.type.charAt(0).toUpperCase()+t.type.slice(1).toLowerCase()},{name:"city",label:"City",align:"left",field:t=>t.city},{name:"rooms",label:"Rooms Available",align:"left",field:t=>"1/3"},{name:"actions",align:"right"}],isLoading:!0}),methods:i()({},Object(d["b"])({paginate:m["n"]})),computed:i()({},Object(d["c"])({data:"getHouseholdPaginationData"}))},p=f,b=a("2877"),g=a("f09f"),h=a("a370"),y=a("eaac"),v=a("db86"),_=a("cb32"),q=a("068f"),x=a("9c40"),w=a("4e73"),C=a("1c1c"),Q=a("66e5"),L=a("4074"),k=a("eebe"),j=a.n(k),O=Object(b["a"])(p,n,l,!1,null,null,null);e["default"]=O.exports;j()(O,"components",{QCard:g["a"],QCardSection:h["a"],QTable:y["a"],QTd:v["a"],QAvatar:_["a"],QImg:q["a"],QBtn:x["a"],QMenu:w["a"],QList:C["a"],QItem:Q["a"],QItemSection:L["a"]})},b0b9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{class:["q-mx-auto",{"q-px-md":t.$q.screen.lt.lg},{"flex flex-center column":this.vertical}],style:t.styles},[t._t("default")],2)},l=[],s={name:"CenteredContent",props:{maxWidth:{type:Number,default:1e3},vertical:{type:Boolean,default:!1}},computed:{styles(){return{"max-width":this.maxWidth+"px","padding-bottom":"24px"}}}},i=s,o=a("2877"),c=a("9989"),r=a("eebe"),u=a.n(r),d=Object(o["a"])(i,n,l,!1,null,null,null);e["a"]=d.exports;u()(d,"components",{QPage:c["a"]})}}]);