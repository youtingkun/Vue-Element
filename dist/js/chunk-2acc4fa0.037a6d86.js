(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2acc4fa0","chunk-2d0c8f8a","chunk-2d0c9594"],{2442:function(n,t,e){"use strict";e.r(t);e("c5f6"),e("ac6a");var a=e("5982"),u=e.n(a),o=e("56c6"),m={data:function(){return{doc:u.a,code:o.default,columns:[{title:"ID",key:"id"},{title:"姓名",key:"name"},{title:"数值 1",key:"amount1"},{title:"数值 2",key:"amount2"},{title:"数值 3",key:"amount3"}],data:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}],options:{showSummary:!0,summaryMethod:function(n){var t=n.columns,a=n.data,u=[];return t.forEach(function(t,n){if(0!==n){var e=a.map(function(n){return Number(n[t.property])});e.every(function(n){return isNaN(n)})?u[n]="N/A":(u[n]=e.reduce(function(n,t){var e=Number(t);return isNaN(e)?n:n+t},0),u[n]+=" 元")}else u[n]="总价"}),u}}}}},r=e("2877"),s=function(n){n.options.__source="src/views/demo/d2-crud/demo13/index.vue"},i=Object(r.a)(m,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("d2-container",[e("template",{slot:"header"},[n._v("表尾合计行")]),e("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options}}),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-markdown",{attrs:{source:n.doc}})],1),e("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[e("d2-highlight",{attrs:{code:n.code}})],1),e("template",{slot:"footer"},[e("d2-link-btn",{attrs:{title:"文档",link:"https://doc.d2admin.fairyever.com/zh/ecosystem-d2-crud/"}})],1)],2)},[],!1,null,null,null);"function"==typeof s&&s(i);t.default=i.exports},"56c6":function(n,t,e){"use strict";e.r(t),t.default="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: 'ID',\n          key: 'id'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '数值 1',\n          key: 'amount1'\n        },\n        {\n          title: '数值 2',\n          key: 'amount2'\n        },\n        {\n          title: '数值 3',\n          key: 'amount3'\n        }\n      ],\n      data: [\n        {\n          id: '12987122',\n          name: '王小虎',\n          amount1: '234',\n          amount2: '3.2',\n          amount3: 10\n        },\n        {\n          id: '12987123',\n          name: '王小虎',\n          amount1: '165',\n          amount2: '4.43',\n          amount3: 12\n        },\n        {\n          id: '12987124',\n          name: '王小虎',\n          amount1: '324',\n          amount2: '1.9',\n          amount3: 9\n        },\n        {\n          id: '12987125',\n          name: '王小虎',\n          amount1: '621',\n          amount2: '2.2',\n          amount3: 17\n        },\n        {\n          id: '12987126',\n          name: '王小虎',\n          amount1: '539',\n          amount2: '4.1',\n          amount3: 15\n        }\n      ],\n      options: {\n        showSummary: true,\n        summaryMethod (param) {\n          const { columns, data } = param\n          const sums = []\n          columns.forEach((column, index) => {\n            if (index === 0) {\n              sums[index] = '总价'\n              return\n            }\n            const values = data.map(item => Number(item[column.property]))\n            if (!values.every(value => isNaN(value))) {\n              sums[index] = values.reduce((prev, curr) => {\n                const value = Number(curr)\n                if (!isNaN(value)) {\n                  return prev + curr\n                } else {\n                  return prev\n                }\n              }, 0)\n              sums[index] += ' 元'\n            } else {\n              sums[index] = 'N/A'\n            }\n          })\n\n          return sums\n        }\n      }\n    }\n  }\n}\n<\/script>"},5982:function(n,t){n.exports="将 `options` 中的 `showSummary` 设置为 `true` 就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过 `sumText` 配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用 `summaryMethod` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中。代码如下：\r\n"}}]);