(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0b9fa2"],{"34f1":function(n,e,a){"use strict";a.r(e),e.default="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      @d2-data-change=\"handleDataChange\"/>\n  </div>\n</template>\n\n<script>\nimport MyTag from './MyTag'\n\nexport default {\n  components: {\n    MyTag\n  },\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date',\n          width: '180'\n        },\n        {\n          title: '姓名',\n          key: 'name',\n          width: '180'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        },\n        {\n          title: '检查状态（点击可修改）',\n          key: 'check',\n          component: {\n            name: MyTag,\n            props: {\n              myProps: '我是通过props传过来的数据！'\n            }\n          }\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄',\n          check: true\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄',\n          check: false\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄',\n          check: true\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄',\n          check: true\n        }\n      ]\n    }\n  },\n  methods: {\n    handleDataChange (data) {\n      console.log(data)\n    }\n  }\n}\n<\/script>"}}]);