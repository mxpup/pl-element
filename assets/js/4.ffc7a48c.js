(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9],{415:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return o}))},432:function(e,t,r){"use strict";var n=r(141),a=r(11),o=r(22),s=r(433),i=r(142);n("search",1,(function(e,t,r){return[function(t){var r=o(this),n=null==t?void 0:t[e];return void 0!==n?n.call(t,r):new RegExp(t)[e](String(r))},function(e){var n=r(t,e,this);if(n.done)return n.value;var o=a(e),l=String(this),u=o.lastIndex;s(u,0)||(o.lastIndex=0);var c=i(o,l);return s(o.lastIndex,u)||(o.lastIndex=u),null===c?-1:c.index}]}))},433:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},451:function(e,t,r){"use strict";r.r(t);r(140),r(139);var n=r(53),a=r(415),o=r(416),s=r.n(o),i={name:"edit-user",props:{info:{type:Object,default:function(){}}},data:function(){return{formData:{}}},created:function(){this.isEdit&&(this.formData=Object(a.a)({},this.info))},methods:{confirm:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o={},!r.isEdit){n.next=7;break}return n.next=4,s.a.post("/update-user",Object(a.a)({},e));case 4:o=n.sent,n.next=10;break;case 7:return n.next=9,s.a.post("/add-user",Object(a.a)({},e));case 9:o=n.sent;case 10:200===o.status&&1===(o=o.data).code&&(r.$message.success(r.isEdit?"编辑用户成功":"添加用户成功"),r.$emit("refresh-table"),r.$emit("close")),t();case 12:case"end":return n.stop()}}),n)})))()}},computed:{formItems:function(){return[{type:"input",label:"姓名",prop:"name",trim:!0,required:!0},{type:"radio",label:"性别",prop:"sex",options:[{label:"男",value:1},{label:"女",value:0}],required:!0},{type:"input",label:"地址",prop:"address"},{type:"date",label:"出生日期",prop:"birth",attrs:{"value-format":"timestamp"},required:!0},{slot:"describe",label:"描述",prop:"describe"}]},rules:function(){return{address:{required:!0,message:"请输入地址",trigger:"change"}}},isEdit:function(){return Object.keys(this.info).length}}},l=r(7),u=Object(l.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p-dialog-form",e._g({attrs:{title:e.isEdit?"编辑用户":"添加用户","form-items":e.formItems,width:"500px",rules:e.rules,originData:e.formData},on:{confirm:e.confirm},scopedSlots:e._u([{key:"describe",fn:function(t){var n=t.form,a=t.item;return[r("el-form-item",{attrs:{label:a.label,prop:a.prop}},[r("el-input",{attrs:{type:"textarea"},model:{value:n[a.prop],callback:function(t){e.$set(n,a.prop,t)},expression:"form[item.prop]"}})],1)]}}]),model:{value:e.formData,callback:function(t){e.formData=t},expression:"formData"}},e.$listeners))}),[],!1,null,"3ae17963",null);t.default=u.exports},503:function(e,t,r){"use strict";r.r(t);r(37),r(432);var n=r(415),a=(r(139),r(53)),o=r(416),s=r.n(o),i={name:"complex-table",data:function(){return{tableData:[],total:10,editDialogShow:!1,currentInfo:{}}},methods:{getTableData:function(e,t){var r=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var o,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=Object.assign({},e),a.next=3,s.a.post("/search-table",Object(n.a)({},o));case 3:200===(i=a.sent).status&&(i=i.data,r.tableData=i.list,r.total=i.total,console.log(i.list)),t();case 6:case"end":return a.stop()}}),a)})))()},addUser:function(){this.currentInfo={},this.editDialogShow=!0},editUser:function(e){this.currentInfo=e,this.editDialogShow=!0},deleteUser:function(e){var t=this;return Object(a.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.post("/delete-user",{id:e.id});case 2:200===(n=r.sent).status&&1===(n=n.data).code&&(t.$message.success("删除用户成功"),t.refreshTable());case 4:case"end":return r.stop()}}),r)})))()},refreshTable:function(){this.$refs.pfTable.search()},getSex:function(e){return{1:"男",0:"女"}[e]||"-"},getJob:function(e){return{designer:"设计",programmer:"程序员",testers:"测试",product:"产品"}[e.cellValue]}},computed:{columns:function(){return[{prop:"id",label:"id"},{prop:"name",label:"姓名",attrs:{width:60}},{prop:"address",label:"地址",attrs:{minWidth:140}},{prop:"birth",label:"生日",formatter:"date"},{prop:"job",label:"职位",formatter:this.getJob},{slot:"sex",label:"性别"},{slot:"handle",label:"操作",attrs:{width:170}}]},formItems:function(){return[{type:"input",prop:"name",label:"姓名"},{type:"select",prop:"sex",label:"性别",options:[{label:"男",value:1},{label:"女",value:0}]}]}},components:{editUser:r(451).default}},l=r(7),u=Object(l.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("pf-table",{ref:"pfTable",attrs:{columns:e.columns,data:e.tableData,total:e.total,"form-items":e.formItems},on:{"get-table-data":e.getTableData},scopedSlots:e._u([{key:"form-after",fn:function(){return[r("el-button",{staticStyle:{"margin-bottom":"20px"},attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.addUser}},[e._v("添加\n      ")])]},proxy:!0},{key:"sex",fn:function(t){var n=t.row;return[r("el-tag",{attrs:{type:n.sex?"success":"danger"}},[e._v(e._s(e.getSex(n.sex)))])]}},{key:"handle",fn:function(t){var n=t.row;return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.editUser(n)}}},[e._v("编辑")]),e._v(" "),r("el-popconfirm",{attrs:{title:"请确认是否删除",width:"200",placement:"top-end"},on:{onConfirm:function(t){return e.deleteUser(n)}}},[r("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1)]}}])}),e._v(" "),e.editDialogShow?r("edit-user",{attrs:{info:e.currentInfo},on:{close:function(t){e.editDialogShow=!1},"refresh-table":e.refreshTable}}):e._e()],1)}),[],!1,null,"7f75fe14",null);t.default=u.exports}}]);