(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{183:function(t,e,s){},219:function(t,e,s){"use strict";var a=s(183);s.n(a).a},289:function(t,e,s){"use strict";s.r(e);var a=[["2020-07",{excerpt:" let和const    > let和const为块级作用域，var为全局变量，const声明一个只读的常量。一旦声明，常量的值就不能改变。   Arrow Function 箭头函数    ``` js    const number = [5, 16, 80, 4]    number.map(function(num, index){      console.log(num,......",tags:["学习笔记","es6"],id:0,title:"【学习笔记】之es6",lastUpdated:"2020-07-15 15:33:24",path:"/posts/es6.html"},{excerpt:"[一份完整的vue-cli3项目基础配置项](https://github.com/hangjob/vue-admin)  vue.config.js  完整的架构配置  ``` js  const path = require('path');  const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 去掉注释  const......",tags:["vue-cli3","webpack3","config"],id:1,title:"vue-cli3项目常用项配置",lastUpdated:"2020-07-15 15:30:48",path:"/posts/configuration.html"}],["2020-05",{excerpt:" 插件   [element-ui](https://element.eleme.cn//zh-CN)    > 基于 Vue 2.0 的桌面端组件库     [vant](https://youzan.github.io/vant//zh-CN/intro)    > 轻量、可靠的移动端 Vue 组件库     [echarts](https://www.echarts......",tags:["资源汇总"],id:2,title:"资源汇总",lastUpdated:"2020-05-08 14:40:45",path:"/posts/assets.html"},{excerpt:' 初始化    ``` css    @charset "utf-8";    /* CSS Document */    html,body{height: 100%;}    html,body,div,form,img,ul,ol,li,dl,dt,dd{margin:0px; padding:0px;}    body{margin:0 auto;padding:0;border:0......',tags:["学习笔记","css"],id:3,title:"【学习笔记】之css",lastUpdated:"2020-05-07 17:45:28",path:"/posts/css.html"},{excerpt:" Git介绍    - Git是分布式版本控制系统  - 集中式VS分布式：        1. 集中式版本控制系统，版本库集中存放在中央服务器，必须要联网才能工作,没有历史版本库。        2. 分布式版本控制系统，版本控制系统没有“中央服务器”，每个人电脑上都是一个完整的版本库。        3. 分布式系统优势：安全性更高，不需要联网，如果中央服务器故障，任何其他一个开发人员的本......",tags:["学习笔记","git"],id:4,title:"【学习笔记】之git",lastUpdated:"2020-05-06 17:31:48",path:"/posts/git.html"}],["2020-04",{excerpt:" 注册全局  `require.context(搜索的目录，是否还搜索其子目录，匹配文件的正则表达式)`   注册全局组件  ``` js  // index.js  import Vue from 'vue'    // 获取该文件夹下所有 .vue 后缀的文件  const files = require.context('.', false, /\\.vue$/)  files.ke......",tags:["学习笔记","vue"],id:5,title:"【学习笔记】之vue",lastUpdated:"2020-04-28 09:01:32",path:"/posts/vue.html"},{excerpt:" NPM   npm命令   初始化      npm init -y      自动生成`package.json`和`package-lock.json`文件，该文件保存依赖项信息并锁定依赖项版本   安装依赖包      npm install 包名      npm i 包名   删除依赖项      npm uninstall 包名      加上`--......",tags:["学习笔记","node","npm","mongodb"],id:6,title:"【学习笔记】之node",lastUpdated:"2020-04-03 11:34:35",path:"/posts/node.html"},{excerpt:" 使用   方法一  ``` js  import Vue from 'vue'  import echarts from 'echarts'    Vue.prototype.$echarts = echarts  ```  ``` vue  <template>    <div ref=\"pieChart\"></div>  </template>  <script>  export ......",tags:["学习笔记","echart"],id:7,title:"【学习笔记】之echart",lastUpdated:"2020-04-03 11:34:35",path:"/posts/echart.html"}],["2019-12",{excerpt:" Node开启服务器     创建Node项目    1. 项目初始化        $ npm init -y        2. 安装 `express` 和 `compression`        $ npm install express      $ npm install compression        3. 在入口文件配置    ``` js    // app.j......",tags:["项目部署","Node","PM2"],id:8,title:"Node+PM2项目部署",lastUpdated:"2019-12-10 10:53:41",path:"/posts/deploy.html"},{excerpt:' 安装   vuex    在 Vue 之后引入 vuex 会进行自动安装：    ``` html    <script src="/path/to/vue.js"><\/script>    <script src="/path/to/vuex.js"><\/script>    ```    **npm**    ``` sh    npm install vuex --save   ......',tags:["学习笔记","vuex"],id:9,title:"【学习笔记】之vuex",lastUpdated:"2019-12-10 10:53:34",path:"/posts/vuex.html"}],["2019-11",{excerpt:' 起步    ``` html    \x3c!-- 使用 router-link 组件来导航，通过传入 `to` 属性指定链接，<router-link> 默认会被渲染成一个 `<a>` 标签 --\x3e    <router-link to="/foo">Go to Foo</router-link>    <router-link to="/bar">Go to Bar</router-link......',tags:["学习笔记","router"],id:10,title:"【学习笔记】之router",lastUpdated:"2019-11-08 16:02:39",path:"/posts/vueRouter.html"},{excerpt:' 初始化    ``` html    <!DOCTYPE html>    <html lang="zh-CN">    <head>      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />      <meta http-equiv="X-UA-Compatible" content="IE=e......',tags:["学习笔记","html"],id:11,title:"【学习笔记】之html",lastUpdated:"2019-11-05 15:14:10",path:"/posts/html.html"}],["2019-10",{excerpt:' 点击选中    ``` js    $(function() {      $(".eui-btn a").click(function() {        if ($(this).hasClass("active")) {          $(this).removeClass("active");        } else {          $(this).addClass(......',tags:["学习笔记","jQuery"],id:12,title:"【学习笔记】之jQuery",lastUpdated:"2019-10-31 16:18:46",path:"/posts/jQuery.html"},{excerpt:" 一级标题     二级标题    这是一级标题  ==========     这是二级标题  ----------     一级标题    二级标题      无序列表    * 1    * 2    * 3    + 1    + 2    + 3    - 1    - 2    - 3     有序列表    1. 列表1    2. 列表2    3. ......",tags:["学习笔记","markdown"],id:13,title:"【学习笔记】之markdown",lastUpdated:"2019-10-31 09:53:01",path:"/posts/markdown.html"}]],i={name:"All",data:function(){return{poList:a}},props:{content:{type:Array,default:function(){return[]}}},methods:{toTaglist:function(t){this.$router.push("/tags/"+t.target.innerText)}}},o=(s(219),s(17)),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"all-warp"},t._l(t.poList,(function(e,a){return s("div",{key:a},[s("h3",[t._v(t._s(e[0]))]),t._v(" "),s("el-row",{staticClass:"post-warp",attrs:{type:"flex",justify:"center",align:"middle"}},[t._l(e,(function(e,a){return[0!==a?s("el-col",{key:a,staticClass:"post post-card",attrs:{span:20,xs:{span:23},sm:{span:23},md:{span:23},lg:{span:20}}},[s("el-card",{staticClass:"box-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("p",{staticClass:"post-title-time"},[t._v(t._s(e.lastUpdated))]),t._v(" "),s("router-link",{staticClass:"post-title-link",attrs:{to:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt||e.tags.length?s("div",[e.excerpt?s("div",[s("div",{staticClass:"post-excerpt",domProps:{innerHTML:t._s(e.excerpt)}})]):t._e(),t._v(" "),e.tags.length?s("div",{staticClass:"post-footer"},t._l(e.tags,(function(e,a){return s("el-tag",{key:a,attrs:{size:"medium",hit:!0},on:{click:t.toTaglist}},[t._v(t._s(e))])})),1):t._e()]):t._e()])],1):t._e()]}))],2)],1)})),0)}),[],!1,null,"239f8a51",null);e.default=l.exports}}]);