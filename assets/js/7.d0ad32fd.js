(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{464:function(e,t,r){},523:function(e,t,r){"use strict";var o=r(464);r.n(o).a},546:function(e,t,r){"use strict";r.r(t);r(10);var o={name:"form-demo-01",data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{submit:function(e){console.log(e),this.$message.success("表单数据为:".concat(JSON.stringify(e))),console.log(this.$refs.form.$refs.name.resetField())}},computed:{formItems:function(){return[{comp:"pl-input",label:"活动名称",prop:"name"},{comp:"pl-select",label:"活动区域",prop:"region",options:this.regionOptions,required:!0},{slot:"date"},{comp:"pl-switch",label:"即时配送",prop:"delivery",required:!0},{comp:"pl-checkbox",label:"活动性质",prop:"type",options:["美食/餐厅线上活动","地推活动","线下主题活动","单纯品牌曝光"],required:!0},{comp:"pl-radio",label:"特殊资源",prop:"resource",options:["线上品牌商赞助","线下场地免费"],required:!0},{comp:"pl-input",label:"说明",prop:"desc",type:"textarea",required:!0}]},regionOptions:function(){return[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]},rules:function(){return{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}]}}}},l=(r(523),r(1)),a=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pl-form",{ref:"form",staticClass:"form-demo-01",attrs:{"form-items":e.formItems,"label-position":"right","label-suffix":"：","label-width":"120px",rules:e.rules},on:{submit:e.submit},scopedSlots:e._u([{key:"date",fn:function(t){var o=t.form;t.item;return[r("el-form-item",{attrs:{label:"活动时间"}},[r("el-col",{attrs:{span:11}},[r("pl-date",{attrs:{prop:"date1","value-format":"timestamp"},model:{value:o.date1,callback:function(t){e.$set(o,"date1",t)},expression:"form.date1"}})],1),e._v(" "),r("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),r("el-col",{attrs:{span:11}},[r("pl-date",{staticStyle:{width:"100%"},attrs:{prop:"date2"},model:{value:o.date2,callback:function(t){e.$set(o,"date2",t)},expression:"form.date2"}})],1)],1)]}}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})}),[],!1,null,null,null);t.default=a.exports}}]);