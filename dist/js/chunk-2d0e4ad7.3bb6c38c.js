(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e4ad7"],{"90f0":function(e,t,a){"use strict";a.r(t);var r,l,n=a("cebc"),o=(a("96cf"),a("3b8d")),s=a("2f62"),c={data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},created:(l=Object(o.a)(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pageGet({instance:this});case 2:for(a in t=e.sent)t.hasOwnProperty(a)&&(this[a]=t[a]);case 4:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)}),watch:{$data:{handler:function(){this.pageSet({instance:this})},deep:!0}},methods:Object(n.a)({},Object(s.b)("d2admin/db",["pageSet","pageGet","pageClear"]),{handleClear:(r=Object(o.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.pageClear({instance:this});case 2:this.$message.success("此页面快照已经删除，请重新进入该页面或者关闭选项卡重新打开");case 3:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})})},i=a("2877"),m=function(e){e.options.__source="src/views/demo/playground/db/page-snapshot-public/index.vue"},p=Object(i.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("template",{slot:"header"},[a("el-alert",{attrs:{type:"success",closable:!1,title:"路由快照相当于路由存储一种快捷操作，\n        会将传入的 vue instance 携带的 $data 全部持久化，\n        下面的表单来自 Element 的表单示例，\n        在 D2Admin 的本页示例中你可以随意填写这个表单，\n        表单内容会自动实时持久化，\n        无论是切换标签页、重新打开标签页、刷新浏览器、重开浏览器、重开浏览器标签页等，\n        该页面数据都会自动恢复到上次填写的状态，\n        这些都只需要你使用 D2Admin 提供的两个方法，\n        总共只需要多写十几行代码"}})],1),a("el-form",{ref:"form",staticStyle:{"max-width":"600px",margin:"0px auto"},attrs:{model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"活动名称"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.region,callback:function(e){t.$set(t.form,"region",e)},expression:"form.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"活动时间"}},[a("el-col",{attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.form.date1,callback:function(e){t.$set(t.form,"date1",e)},expression:"form.date1"}})],1),a("el-col",{staticStyle:{"text-align":"center"},attrs:{span:2}},[t._v("-")]),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{type:"fixed-time",placeholder:"选择时间"},model:{value:t.form.date2,callback:function(e){t.$set(t.form,"date2",e)},expression:"form.date2"}})],1)],1),a("el-form-item",{attrs:{label:"即时配送"}},[a("el-switch",{model:{value:t.form.delivery,callback:function(e){t.$set(t.form,"delivery",e)},expression:"form.delivery"}})],1),a("el-form-item",{attrs:{label:"活动性质"}},[a("el-checkbox-group",{model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[a("el-checkbox",{attrs:{label:"线上活动",name:"type"}}),a("el-checkbox",{attrs:{label:"地推活动",name:"type"}}),a("el-checkbox",{attrs:{label:"线下活动",name:"type"}}),a("el-checkbox",{attrs:{label:"品牌曝光",name:"type"}})],1)],1),a("el-form-item",{attrs:{label:"特殊资源"}},[a("el-radio-group",{model:{value:t.form.resource,callback:function(e){t.$set(t.form,"resource",e)},expression:"form.resource"}},[a("el-radio",{attrs:{label:"线上品牌商赞助"}}),a("el-radio",{attrs:{label:"线下场地免费"}})],1)],1),a("el-form-item",{attrs:{label:"活动形式"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[t._v("立即创建")]),a("el-button",[t._v("取消")])],1)],1),a("el-button",{attrs:{slot:"footer",type:"danger"},on:{click:t.handleClear},slot:"footer"},[a("d2-icon",{attrs:{name:"trash-o"}}),t._v("\n    删除当前页面快照\n  ")],1)],2)},[],!1,null,null,null);"function"==typeof m&&m(p);t.default=p.exports}}]);