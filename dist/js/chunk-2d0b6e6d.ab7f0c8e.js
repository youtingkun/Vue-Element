(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b6e6d"],{"1ead":function(t,e,n){"use strict";n.r(e);n("ac6a"),n("456d");var a={data:function(){return{table:{columns:[],data:[],size:"mini",stripe:!0,border:!0}}},methods:{handleUpload:function(t){var e=this;return this.$import.csv(t).then(function(t){e.table.columns=Object.keys(t.data[0]).map(function(t){return{label:t,prop:t}}),e.table.data=t.data}),!1},download:function(){window.location.href="http://fairyever.qiniudn.com/d2-admin-import-csv-demo.csv"}}},o=n("2877"),l=function(t){t.options.__source="src/views/demo/plugins/import/csv.vue"},c=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("d2-container",{attrs:{type:"card"}},[n("template",{slot:"header"},[t._v("导入 csv")]),n("div",{staticClass:"d2-mb"},[n("el-button",{on:{click:t.download}},[n("d2-icon",{attrs:{name:"download"}}),t._v("\n      下载演示 .csv 表格\n    ")],1)],1),n("div",{staticClass:"d2-mb"},[n("el-upload",{attrs:{"before-upload":t.handleUpload,action:"default"}},[n("el-button",{attrs:{type:"success"}},[n("d2-icon",{attrs:{name:"file-o"}}),t._v("\n        选择要导入的 .csv 表格\n      ")],1)],1)],1),n("el-table",t._b({},"el-table",t.table,!1),t._l(t.table.columns,function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.prop,label:t.label}})}),1)],2)},[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports}}]);