(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d3645ec","chunk-2d210591","chunk-2d0b5f37"],{"1aa2":function(e,n){e.exports="通过 `ref` 调用 `D2 Crud` 的 `showDialog` 方法，并传入 `mode: 'add'`属性，可开启新增模式，需要定义 `add-template` 来为新增的表单添加模板，也可以向 `showDialog` 中传入 `template`对象来灵活定义新的模板，定义 `add-title` 来修改新增模态框的标题，向`form-options` 中传入 `labelWidth` 和 `labelPosition` 来控制表单中label的显示, `saveLoading` 则控制保存按钮的loading状态， `row-add` 事件控制数据新增，接收两个参数： `row` 是当前新增行的数据， `done` 用于控制保存成功，可以在 `done()` 之前加入自己的逻辑代码，`done()`可以传入包含表单字段的对象来覆盖提交的数据，`done(false)` 可以取消新增，通过 `ref` 调用 `D2 Crud` 的 `closeDialog` 方法可以关闭模态框。代码如下：\r\n"},"66e3":function(e,n,a){"use strict";a.r(n);var t=a("1aa2"),d=a.n(t),o=a("b805"),s={data:function(){return{doc:d.a,code:o.default,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],addTemplate:{date:{title:"日期",value:"2016-05-05"},name:{title:"姓名",value:"王小虎"},address:{title:"地址",value:"上海市普陀区金沙江路 1520 弄"}},formOptions:{labelWidth:"80px",labelPosition:"left",saveLoading:!1}}},methods:{handleDialogOpen:function(e){var n=e.mode;this.$message({message:"打开模态框，模式为："+n,type:"success"})},addRow:function(){this.$refs.d2Crud.showDialog({mode:"add"})},addRowWithNewTemplate:function(){this.$refs.d2Crud.showDialog({mode:"add",template:{name:{title:"姓名",value:""},value1:{title:"新属性1",value:""},value2:{title:"新属性2",value:""}}})},handleRowAdd:function(e,n){var a=this;this.formOptions.saveLoading=!0,setTimeout(function(){a.$message({message:"保存成功",type:"success"}),n({address:"我是通过done事件传入的数据！"}),a.formOptions.saveLoading=!1},300)},handleDialogCancel:function(e){this.$message({message:"取消保存",type:"warning"}),e()}}},l=a("2877"),i=function(e){e.options.__source="src/views/demo/d2-crud/demo16/index.vue"},r=Object(l.a)(s,function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("d2-container",[a("template",{slot:"header"},[e._v("新增数据")]),a("d2-crud",{ref:"d2Crud",attrs:{columns:e.columns,data:e.data,"add-title":"我的新增","add-template":e.addTemplate,"form-options":e.formOptions},on:{"dialog-open":e.handleDialogOpen,"row-add":e.handleRowAdd,"dialog-cancel":e.handleDialogCancel}},[a("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:e.addRow},slot:"header"},[e._v("新增")]),a("el-button",{staticStyle:{"margin-bottom":"5px"},attrs:{slot:"header"},on:{click:e.addRowWithNewTemplate},slot:"header"},[e._v("使用自定义模板新增")])],1),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-markdown",{attrs:{source:e.doc}})],1),a("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[a("d2-highlight",{attrs:{code:e.code}})],1),a("template",{slot:"footer"},[a("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof i&&i(r);n.default=r.exports},b805:function(e,n,a){"use strict";a.r(n),n.default="<template>\n  <div>\n    <d2-crud\n      ref=\"d2Crud\"\n      :columns=\"columns\"\n      :data=\"data\"\n      add-title=\"我的新增\"\n      :add-template=\"addTemplate\"\n      :form-options=\"formOptions\"\n      @dialog-open=\"handleDialogOpen\"\n      @row-add=\"handleRowAdd\"\n      @dialog-cancel=\"handleDialogCancel\">\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRow\">新增</el-button>\n      <el-button slot=\"header\" style=\"margin-bottom: 5px\" @click=\"addRowWithNewTemplate\">使用自定义模板新增</el-button>\n    </d2-crud>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n          {\n            date: '2016-05-02',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1518 弄'\n          },\n          {\n            date: '2016-05-04',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1517 弄'\n          },\n          {\n            date: '2016-05-01',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1519 弄'\n          },\n          {\n            date: '2016-05-03',\n            name: '王小虎',\n            address: '上海市普陀区金沙江路 1516 弄'\n          }\n      ],\n      addTemplate: {\n        date: {\n          title: '日期',\n          value: '2016-05-05'\n        },\n        name: {\n          title: '姓名',\n          value: '王小虎'\n        },\n        address: {\n          title: '地址',\n          value: '上海市普陀区金沙江路 1520 弄'\n        }\n      },\n      formOptions: {\n        labelWidth: '80px',\n        labelPosition: 'left',\n        saveLoading: false\n      }\n    }\n  },\n  methods: {\n    handleDialogOpen ({ mode }) {\n      this.$message({\n        message: '打开模态框，模式为：' + mode,\n        type: 'success'\n      })\n    },\n    // 普通的新增\n    addRow () {\n      this.$refs.d2Crud.showDialog({\n        mode: 'add'\n      })\n    },\n    // 传入自定义模板的新增\n    addRowWithNewTemplate () {\n      this.$refs.d2Crud.showDialog({\n        mode: 'add',\n        template: {\n          name: {\n            title: '姓名',\n            value: ''\n          },\n          value1: {\n            title: '新属性1',\n            value: ''\n          },\n          value2: {\n            title: '新属性2',\n            value: ''\n          }\n        }\n      })\n    },\n    handleRowAdd (row, done) {\n      this.formOptions.saveLoading = true\n      setTimeout(() => {\n        console.log(row)\n        this.$message({\n          message: '保存成功',\n          type: 'success'\n        });\n\n        // done可以传入一个对象来修改提交的某个字段\n        done({\n          address: '我是通过done事件传入的数据！'\n        })\n        this.formOptions.saveLoading = false\n      }, 300)\n    },\n    handleDialogCancel (done) {\n      this.$message({\n        message: '取消保存',\n        type: 'warning'\n      });\n      done()\n    }\n  }\n}\n<\/script>"}}]);