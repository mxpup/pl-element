(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{471:function(t,e,a){},529:function(t,e,a){"use strict";var i=a(471);a.n(i).a},555:function(t,e,a){"use strict";a.r(e);var i={data:function(){return{tableData:[{id:1104,giftName:"测试礼品",giftType:"prepaid_card",giftGiveWay:"entity",giftDescribe:"昂封账煎炸",giftStatus:"FORBIDDEN",operatorId:27011,operatorName:"彭迪",createTime:1575009116e3,giftArea:null,giftAreaCityList:null},{id:1001,giftName:"测试1",giftType:"cash",giftGiveWay:"coupon",giftDescribe:"我就佛风捉放",giftStatus:"USING",operatorId:27011,operatorName:"彭迪",createTime:1574768726e3,giftArea:null,giftAreaCityList:null}],total:54,loading:""}},methods:{getTableData:function(t){console.log(t)},getDetail:function(t,e,a){console.log("双击了行"),console.log(t)},addGift:function(){console.log("添加礼品")},editGift:function(){console.log("编辑礼品信息")},changeStatus:function(t){console.log("修改状态")},configGift:function(t){console.log(t)},getGiveType:function(t){var e=t.cellValue;return this.giftTypeMap[e]||"-"},getGiveWay:function(t){var e=t.cellValue;return this.giftGivingWayMap[e]||"-"},getGiftStatusType:function(t){return{USING:"success",FORBIDDEN:"warning"}[t]},getGiftStatusText:function(t){return{USING:"使用中",FORBIDDEN:"已禁用"}[t]||"-"}},computed:{formItems:function(){return[{type:"input",label:"礼品名称",prop:"giftName"},{type:"select",label:"礼品类型",prop:"giftType",options:[{label:"现金",value:"cash"},{label:"预付卡",value:"prepaid_card"},{label:"实物",value:"entity"},{label:"保养",value:"maintenance"},{label:"美容",value:"cosmetology"},{label:"洗车",value:"car_wash"}]},{type:"select",label:"赠送方式",prop:"giftGiveWay",options:[{label:"优惠券",value:"coupon"},{label:"现金",value:"cash"},{label:"实物",value:"entity"},{label:"代金券",value:"cash_coupon"},{label:"兑换码",value:"redeem_code"}]},{type:"select",label:"状态",prop:"giftStatus",options:[{label:"使用中",value:"USING"},{label:"已禁用",value:"FORBIDDEN"}]}]},columns:function(){return[{label:"ID",prop:"id"},{label:"礼品名称",prop:"giftName"},{label:"类型",prop:"giftType",formatter:this.getGiveType},{label:"赠送方式",prop:"giftGiveWay",formatter:this.getGiveWay},{label:"说明",prop:"giftDescribe",attrs:{minWidth:200}},{label:"创建时间",prop:"createTime",formatter:"time",attrs:{minWidth:140}},{label:"创建人",prop:"operatorName"},{label:"状态",prop:"giftStatus",slot:"status"},{label:"使用地区",slot:"giftArea",attrs:{minWidth:400}},{label:"操作",slot:"handle",attrs:{minWidth:120,fixed:"right"}}]},giftTypeMap:function(){return{cash:"现金",prepaid_card:"预付卡",entity:"实物",maintenance:"保养",cosmetology:"美容",car_wash:"洗车"}},giftGivingWayMap:function(){return{coupon:"优惠券",cash:"现金",entity:"实物",cash_coupon:"代金券",redeem_code:"兑换码"}}}},l=(a(529),a(1)),o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pf-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tpTable",staticClass:"test-pf-table",attrs:{"form-items":t.formItems,data:t.tableData,columns:t.columns,total:t.total},on:{"get-table-data":t.getTableData,"row-dblclick":t.getDetail},scopedSlots:t._u([{key:"status",fn:function(e){var i=e.scope;return[a("el-tag",{attrs:{type:t.getGiftStatusType(i.row.giftStatus)}},[t._v("\n      "+t._s(t.getGiftStatusText(i.row.giftStatus))+"\n    ")])]}},{key:"giftArea",fn:function(e){var i=e.scope;return[i.row.giftArea?a("el-tooltip",{attrs:{width:"400",placement:"top"}},[a("div",{staticStyle:{width:"auto","max-width":"300px"},attrs:{slot:"content"},slot:"content"},[t._v(t._s(i.row.giftArea))]),t._v(" "),a("span",{staticClass:"cellOverflow"},[t._v(t._s(i.row.giftArea))])]):t._e()]}},{key:"handle",fn:function(e){var i=e.scope;return["USING"===i.row.giftStatus?a("span",{staticClass:"operatespan",on:{click:function(e){return t.configGift(i.row)}}},[t._v("配置")]):t._e()]}}])},[a("div",{staticStyle:{"margin-bottom":"10px"},attrs:{slot:"form-after"},slot:"form-after"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.addGift}},[t._v("\n      添加礼品\n    ")])],1)])}),[],!1,null,"5f35c9bc",null);e.default=o.exports}}]);