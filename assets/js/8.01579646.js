(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{450:function(e,t,o){},508:function(e,t,o){"use strict";var a=o(450);o.n(a).a},528:function(e,t,o){"use strict";o.r(t);var a={name:"form-demo-02",data:function(){return{form:{}}},computed:{formItems:function(){return[{comp:"grid",cols:[{span:12,comp:"pl-input",label:"活动名称",prop:"name"},{span:12,comp:"pl-select",label:"活动区域",prop:"region",options:this.regionOptions,required:!0}]},{comp:"grid",cols:[{span:12,slot:"date"},{span:12,comp:"pl-switch",label:"即时配送",prop:"delivery",required:!0}]},{comp:"pl-checkbox",label:"活动性质",prop:"type",options:["美食/餐厅线上活动","地推活动","线下主题活动","单纯品牌曝光"],required:!0},{comp:"pl-radio",label:"特殊资源",prop:"resource",options:["线上品牌商赞助","线下场地免费"],required:!0},{comp:"grid",cols:[{span:16,comp:"pl-input",label:"说明",prop:"desc",type:"textarea",maxlength:300,"show-word-limit":!0,required:!0,autosize:{minRows:2,maxRows:4}}]}]},regionOptions:function(){return[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"广州",value:"guangzhou"},{label:"深圳",value:"shenzhen"}]}}},l=(o(508),o(1)),r=Object(l.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("pl-form",{staticClass:"form-demo-02",attrs:{"label-position":"right","label-suffix":"：","label-width":"120px","form-items":e.formItems},scopedSlots:e._u([{key:"date",fn:function(t){var a=t.form;t.item;return[o("el-form-item",{staticClass:"form-demo-02-date-item",attrs:{label:"活动时间"}},[o("el-col",{attrs:{span:11}},[o("pl-date",{attrs:{prop:"date1","value-format":"timestamp"},model:{value:a.date1,callback:function(t){e.$set(a,"date1",t)},expression:"form.date1"}})],1),e._v(" "),o("el-col",{staticClass:"line",staticStyle:{"text-align":"center"},attrs:{span:2}},[e._v("-")]),e._v(" "),o("el-col",{attrs:{span:11}},[o("pl-date",{attrs:{prop:"date2"},model:{value:a.date2,callback:function(t){e.$set(a,"date2",t)},expression:"form.date2"}})],1)],1)]}}]),model:{value:e.form,callback:function(t){e.form=t},expression:"form"}})}),[],!1,null,null,null);t.default=r.exports}}]);