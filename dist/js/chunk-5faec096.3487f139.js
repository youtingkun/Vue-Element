(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5faec096","chunk-18d19fef","chunk-2d0d6312","chunk-2d217dd2"],{"1e2b":function(n,r,e){"use strict";e.r(r);var t=e("81af").a,o=e("2877"),s=function(n){n.options.__source="src/views/demo/components/container/ghost-slot.vue"},i=Object(o.a)(t,function(){var n=this,r=n.$createElement,e=n._self._c||r;return e("d2-container",{attrs:{type:"ghost"}},[e("template",{slot:"header"},[n._v("Header")]),e("div",{staticClass:"d2-pt d2-pb"},[e("el-card",{staticClass:"d2-card",staticStyle:{width:"400px"},attrs:{shadow:"never"}},[e("d2-demo-article")],1)],1),e("template",{slot:"footer"},[n._v("Footer")])],2)},[],!1,null,null,null);"function"==typeof s&&s(i);r.default=i.exports},"33fb":function(n,r,e){"use strict";e.r(r);var t=e("7201"),o=e.n(t),s=e("c917"),i=e.n(s),a={props:{long:{type:Boolean,required:!1,default:!1}},data:function(){return{sourceLong:o.a,sourceShort:i.a,isLong:!1}},created:function(){this.isLong=this.long}},c=(e("5d9b"),e("2877")),u=function(n){n.options.__source="src/views/demo/components/container/components/d2-demo-article.vue"},l=Object(c.a)(a,function(){var r=this,n=r.$createElement,e=r._self._c||n;return e("div",{staticClass:"d2-demo-article"},[r.long?r._e():e("div",{staticClass:"d2-demo-article__control"},[e("el-switch",{attrs:{"active-text":"长内容","inactive-text":"短内容"},model:{value:r.isLong,callback:function(n){r.isLong=n},expression:"isLong"}})],1),e("d2-markdown",{directives:[{name:"show",rawName:"v-show",value:r.isLong,expression:"isLong"}],attrs:{source:r.sourceLong}}),e("d2-markdown",{directives:[{name:"show",rawName:"v-show",value:!r.isLong,expression:"!isLong"}],attrs:{source:r.sourceShort}})],1)},[],!1,null,"54e3f897",null);"function"==typeof u&&u(l);r.default=l.exports},"4a5b":function(n,r,e){},"5d9b":function(n,r,e){"use strict";var t=e("4a5b");e.n(t).a},7201:function(n,r){n.exports="## vue.js\r\n\r\n**易用**\r\n\r\n已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！\r\n\r\n**灵活**\r\n\r\n不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。\r\n\r\n**高效**\r\n\r\n20kB min+gzip 运行大小\r\n\r\n超快虚拟 DOM\r\n\r\n最省心的优化\r\n\r\n**Vue.js 是什么**\r\n\r\nVue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。\r\n\r\n如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。\r\n\r\n## Element\r\n\r\nElement，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库\r\n\r\n**一致性** Consistency\r\n\r\n- 与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；\r\n\r\n- 在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。\r\n\r\n**反馈** Feedback\r\n\r\n- 控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；\r\n\r\n- 页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。\r\n\r\n**效率** Efficiency\r\n\r\n- 简化流程：设计简洁直观的操作流程；\r\n\r\n- 清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；\r\n\r\n- 帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。\r\n\r\n**可控** Controllability\r\n\r\n- 用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；\r\n\r\n- 结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。"},"81af":function(n,e,t){"use strict";(function(n){var r=t("33fb");e.a={components:{"d2-demo-article":r.default},data:function(){return{filename:n}}}}).call(this,"/index.js")},c917:function(n,r){n.exports="## vue.js\r\n\r\n**易用**\r\n\r\n已经会了 HTML、CSS、JavaScript？即刻阅读指南开始构建应用！\r\n\r\n**灵活**\r\n\r\n不断繁荣的生态系统，可以在一个库和一套完整框架之间自如伸缩。\r\n\r\n**高效**\r\n\r\n20kB min+gzip 运行大小\r\n\r\n超快虚拟 DOM\r\n\r\n最省心的优化"}}]);