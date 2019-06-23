(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4c285be4","chunk-2d21726c","chunk-2d0d9f63"],{"6a24":function(e,n){e.exports="向 `columns` 的 `component` 对象传入 `name` 属性来控制渲染的组件，默认为 `el-input` ，支持的组件有 `el-input-number` `el-radio` `el-checkbox` `el-select` `el-cascader` `el-switch` `el-slider` `el-time-select` `el-time-picker` `el-date-picker` `el-rate` `el-color-picker` ，也可以使用 `render函数` 自己渲染组件，只需在 `component` 中传入 `renderFuntion` ，接收两个参数： `h`是render函数的固定参数， `scope` 是单元格中的数据，[render函数使用方法](https://cn.vuejs.org/v2/guide/render-function.html)。通过 `cell-data-change`事件可以监听单元格内的数据变化，监听在crud内部是通过change事件触发的（这意味着input类组件失去焦点才会触发事件，单纯输入不会触发），接收一个对象参数 `{rowIndex, key, value, row}`， `rowIndex` 为改变所在行，`key` 为改变的字段，`value` 为改变后的值，`row` 是改变所在行的所有数据。代码如下：\r\n"},"6dd7":function(e,n,a){"use strict";a.r(n);var t=a("6a24"),l=a.n(t),d=a("c603"),o={data:function(){return{doc:l.a,code:d.default,columns:[{title:"日期",key:"date",component:{name:"el-date-picker",size:"small"}},{title:"姓名",key:"name",component:{name:"el-select",options:[{value:"王小虎",label:"王小虎"},{value:"王中虎",label:"王中虎"},{value:"王老虎",label:"王老虎"}],size:"small"}},{title:"地址",key:"address",component:{name:"el-input",size:"small"}}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleCellDataChange:function(e){e.rowIndex,e.key,e.value,e.row}}},s=a("2877"),c=function(e){e.options.__source="src/views/demo/d2-crud/demo23/index.vue"},r=Object(s.a)(o,function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("d2-container",[a("template",{slot:"header"},[e._v("表格内编辑")]),a("d2-crud",{attrs:{columns:e.columns,data:e.data},on:{"cell-data-change":e.handleCellDataChange}}),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-markdown",{attrs:{source:e.doc}})],1),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-highlight",{attrs:{code:e.code}})],1),a("template",{slot:"footer"},[a("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof c&&c(r);n.default=r.exports},c603:function(e,n,a){"use strict";a.r(n),n.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      @cell-data-change=\"handleCellDataChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          component: {\n            name: 'el-date-picker',\n            size: 'small'\n          }\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          component: {\n            name: 'el-select',\n            options: [\n              {\n                value: '王小虎',\n                label: '王小虎'\n              },\n              {\n                value: '王中虎',\n                label: '王中虎'\n              },\n              {\n                value: '王老虎',\n                label: '王老虎'\n              }\n            ],\n            size: 'small'\n          }\n        },\n        {\n          title: '地址',\n          key: 'address',\n          component: {\n            name: 'el-input',\n            size: 'small'\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ]\n    }\n  },\n  methods: {\n    handleCellDataChange ({ rowIndex, key, value, row }) {\n      console.log(rowIndex)\n      console.log(key)\n      console.log(value)\n      console.log(row)\n    }\n  }\n}\n<\/script>"}}]);