(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{572:function(e,t,a){"use strict";a.r(t);a(13),a(164);var r=a(4),n=a(168),s=(a(163),a(75)),o=a(452),l=a.n(o),u={name:"",data:function(){return{tableData:[],total:0}},created:function(){},methods:{getTableData:function(e,t){var a=this;return Object(s.a)(regeneratorRuntime.mark((function s(){var o,u,c;return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o=e.tabName,u=Object(n.a)(e,["tabName"]),s.next=3,l.a.post("/search-table",Object(r.a)({job:o},u));case 3:200===(c=s.sent).status?(c=c.data,a.tableData=c.list,a.total=c.total,t({tableData:c.list,total:c.total})):t();case 5:case"end":return s.stop()}}),s)})))()},deleteUser:function(e){var t=this;return Object(s.a)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.post("/delete-user",{id:e.id});case 2:200===(r=a.sent).status&&1===(r=r.data).code&&(t.$message.success("删除用户成功"),t.refreshTable());case 4:case"end":return a.stop()}}),a)})))()},refreshTable:function(){this.$refs["pf-tab-table"].search()},getSex:function(e){return{1:"男",0:"女"}[e]},getJob:function(e){return{designer:"设计",programmer:"程序员",testers:"测试",product:"产品"}[e.cellValue]}},computed:{tabs:function(){return[{label:"设计",name:"designer"},{label:"程序员",name:"programmer"},{label:"测试",name:"testers"},{label:"产品",name:"product"}]},columns:function(){return[{prop:"id",label:"id"},{prop:"name",label:"姓名",attrs:{width:60}},{prop:"address",label:"地址",attrs:{minWidth:140}},{prop:"birth",label:"生日",formatter:"date"},{prop:"job",label:"职位",formatter:this.getJob},{slot:"sex",label:"性别"},{slot:"handle",label:"操作",attrs:{width:170}}]},formItems:function(){return[{type:"input",prop:"name",label:"姓名"},{type:"select",prop:"sex",label:"性别",options:[{label:"男",value:1},{label:"女",value:0}]}]}}},c=a(1),i=Object(c.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("pf-tab-table",{ref:"pf-tab-table",attrs:{tabs:e.tabs,columns:e.columns,"form-items":e.formItems},on:{"get-table-data":e.getTableData},scopedSlots:e._u([{key:"sex",fn:function(t){var r=t.row;return[a("el-tag",{attrs:{type:r.sex?"success":"danger"}},[e._v(e._s(e.getSex(r.sex)))])]}},{key:"handle",fn:function(t){var r=t.row;return[a("el-popconfirm",{attrs:{title:"请确认是否删除",width:"200",placement:"top-end"},on:{onConfirm:function(t){return e.deleteUser(r)}},scopedSlots:e._u([{key:"reference",fn:function(){return[a("el-button",{attrs:{size:"mini",type:"danger"}},[e._v("删除")])]},proxy:!0}],null,!0)})]}}])})}),[],!1,null,"43a9cf16",null);t.default=i.exports}}]);