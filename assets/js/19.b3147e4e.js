(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{522:function(t,e,a){"use strict";a.r(e);var r=a(45),l=(a(147),a(62)),n=a(430),s=a.n(n),o={name:"search-table",data:function(){return{tableData:[],total:10}},methods:{getTableData:function(t,e){var a=this;return Object(l.a)(regeneratorRuntime.mark((function l(){var n,o;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object.assign({},t),l.next=3,s.a.post("/search-table",Object(r.a)({},n));case 3:200===(o=l.sent).status&&(o=o.data,a.tableData=o.list,a.total=o.total,console.log(o.list)),e();case 6:case"end":return l.stop()}}),l)})))()},getSex:function(t){return{1:"男",0:"女"}[t.cellValue]||"-"}},computed:{columns:function(){return[{prop:"id",label:"id",attrs:{width:260}},{prop:"name",label:"姓名",attrs:{width:60}},{prop:"address",label:"地址",attrs:{minWidth:160}},{prop:"age",label:"年龄",attrs:{width:60}},{prop:"birth",label:"生日"},{prop:"sex",label:"性别",formatter:this.getSex}]},formItems:function(){return[{type:"input",prop:"name",label:"姓名"},{type:"select",prop:"sex",label:"性别",options:[{label:"男",value:1},{label:"女",value:0}]}]}}},i=a(3),u=Object(i.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("pl-table",{attrs:{columns:this.columns,data:this.tableData,total:this.total,"form-items":this.formItems},on:{"get-table-data":this.getTableData}})}),[],!1,null,"2a762624",null);e.default=u.exports}}]);