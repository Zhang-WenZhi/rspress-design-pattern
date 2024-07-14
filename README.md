## 文档站点框架

字节
https://rspress.dev/zh/
https://github.com/web-infra-dev/rspress
用到的站点：https://modernjs.dev/

VitePress
https://vitepress.vuejs.org/
https://github.com/vuejs/vitepress
用到的站点：


docsify
https://docsify.js.org/#/
https://github.com/docsifyjs/docsify/
用到的站点：https://github.com/chenjiandongx/pyecharts/pyecharts

## Rspress 脚手架命令来创建项目

```shell
pnpm create rspress@latest
pnpm install
pnpm run dev
# 生产环境构建
pnpm run build
# 本地预览产物
pnpm run preview # 要先编译！
# pnpm i http-server
# http-server ./doc_build # http-server 这个库多开几个app，重复关闭打开，它还会使用上一个app的缓存，有bug!!
```

## 微前端

```shell
微前端存在的问题，比如 样式冲突、消息通信、脚本互斥、公共依赖加载等问题

微前端框架解决这些问题：

应用隔离
CSS 样式隔离
Javascript 沙箱隔离
跨应用通信

```

```shell
# 微前端解决点：
微前端

JS沙箱
子应用之间互不影响，包括全局变量、事件等处理

子应用并行：
多个微前讓如何网时存在，进阶用法

CSS隔离：
子应用之间样式互不影响，切换时装载和知载





子应用嵌套
微前端如何嵌微前瑞
进阶用法

HTML Entry
Contg Entry的进阶版
简化开发者使用但把解析消耗留给了用户

父子应用通讯
子应用如何调父应用方法
父应用如何下发状态



Conng Entry
配置每个子应用的JS和css
包括内联的那些

预加载
空闲时加载子应用资源
用户行为数据支持

按需加载
切换到贡面时才加载
相应的HTML.、CSS和JS

公共依赖加载
大部分子应用都用到的资源怎么处理
```

```shell
UmiJS4

企业级前端开发框架

https://umijs.org/

A framework in react community

 

微前端：

https://qiankun.umijs.org/zh/guide

qiankun是一个基于single-spa的微前端实现库

qiankun孵化自蚂蚁金服科技基于微前端架构的云产品统一接入平台

解耦/技术栈无关

 

全栈：

https://github.com/midwayjs/midway

🍔 A Node.js Serverless Framework for front-end/full-stack developers. Build the application for next decade. Works on AWS, Alibaba Cloud, Tencent Cloud and traditional VM/Container. Super easy integrate with React and Vue. 🌈
```

## QianKun 微前端框架选择

```shell
总结:
后台管理系统且都是最新的 MV* 框架，那么 Qiankun、Micro App、Garfish、Liugi、Piral 你都可以选择；
项目需要聚合某些老旧框架（jQuery）的项目，那么 Qiankun、MicroApp 都可选择，可优先考虑 Micro App；
```

京东
https://micro-zoe.github.io/micro-app/
https://github.com/micro-zoe/micro-app

淘宝
https://qiankun.umijs.org/zh/guide
https://github.com/umijs/qiankun

字节
https://www.garfishjs.org/
https://github.com/bytedance/garfish

字节
https://github.com/web-infra-dev/modern.js
https://modernjs.dev/en/

## 文档站点框架

字节
https://rspress.dev/zh/
https://github.com/web-infra-dev/rspress

VitePress
https://vitepress.vuejs.org/
https://github.com/vuejs/vitepress

docsify
https://docsify.js.org/#/
https://github.com/docsifyjs/docsify/