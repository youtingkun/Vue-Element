(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a2176888","chunk-2d0b9df0","chunk-2d0ddd94"],{"062c":function(n,e,t){"use strict";var a=t("70e6");t.n(a).a},3591:function(n,e,t){"use strict";t.r(e),e.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      options: {\n        rowClassName ({row, rowIndex}) {\n          if (rowIndex === 1) {\n            return 'warning-row'\n          } else if (rowIndex === 3) {\n            return 'success-row'\n          }\n          return ''\n        }\n      }\n    }\n  }\n}\n<\/script>\n\n<style>\n.el-table .warning-row {\n  background: oldlace;\n}\n\n.el-table .success-row {\n  background: #f0f9eb;\n}\n</style>"},"70e6":function(n,e,t){},"82ae":function(n,e){n.exports="可以通过指定 `D2 Crud` 组件 `options` 对象中的 `rowClassName` 属性来为 `D2 Crud` 中的某一行添加 `class` ，表明该行处于某种状态。代码如下：\r\n"},f5b7:function(n,e,t){"use strict";t.r(e);var a=t("82ae"),d=t.n(a),s=t("3591"),r={data:function(){return{doc:d.a,code:s.default,columns:[{title:"日期",key:"date",width:"180"},{title:"姓名",key:"name",width:"180"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],options:{rowClassName:function(n){n.row;var e=n.rowIndex;return 1===e?"warning-row":3===e?"success-row":""}}}}},o=(t("062c"),t("2877")),c=function(n){n.options.__source="src/views/demo/d2-crud/demo4/index.vue"},i=Object(o.a)(r,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("带状态表格")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof c&&c(i);e.default=i.exports}}]);