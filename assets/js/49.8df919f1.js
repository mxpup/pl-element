(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{577:function(t,e,a){"use strict";a.r(e);a(163);var r=a(75),n=a(452),o=a.n(n),l={name:"table-demo-05",created:function(){this.getTableData({},(function(){}))},methods:{getTableData:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function a(){var r,n,l;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=t.currentPage,n=t.pageSize,a.next=3,o.a.post("/page-table",{currentPage:r,pageSize:n});case 3:l=a.sent,console.log(l),200===l.status&&(l=l.data,console.log(l),e({data:l.list,total:l.total}));case 6:case"end":return a.stop()}}),a)})))()}},computed:{columns:function(){return[{prop:"index",label:"序号",type:"index"},{prop:"id",label:"id"},{prop:"name",label:"姓名",attrs:{width:60}},{prop:"address",label:"地址",attrs:{minWidth:140}},{prop:"birth",label:"生日",formatter:"date"},{prop:"job",label:"职位",formatter:{type:"dict",dict:{designer:"设计",programmer:"程序员",testers:"测试",product:"产品"}}},{slot:"sex",label:"性别"},{slot:"handle",label:"操作",attrs:{width:170}}]}}},s=a(1),i=Object(s.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("pl-table",{attrs:{columns:this.columns,fetch:this.getTableData,"auto-load":!0,"show-pager":""},on:{"get-table-data":this.getTableData}})}),[],!1,null,"8f07b3b0",null);e.default=i.exports}}]);