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