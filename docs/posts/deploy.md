---
title: Node+PM2项目部署
tags: [项目部署, Node, PM2]
categories: [项目部署]
---
## Node开启服务器
  ### 创建Node项目
  1. 项目初始化

    $ npm init -y
  
  2. 安装 `express` 和 `compression`

    $ npm install express
    $ npm install compression
  
  3. 在入口文件配置
  ``` js
  // app.js
  const express = require('express')
  const compression = require('compression')
  const app = express()
  // 一定要把这一行代码，写到 静态资源托管之前
  app.use(compression())
  app.use(express.static('./dist')) // 开放打包后的项目
  app.listen(3000, () => {// 3000为端口
    console.log('请输入 http://127.0.0.1:3000/ 进行访问')
  })
  ```
### 开启HTTPS服务
  配置HTTPS服务
  ```js
  const express = require('express')
  const compression = require('compression')
  const https = require('https')
  const fs = require('fs')
  
  const app = express()

  //申请得到的cert和key文件
  const options = {
    cert: fs.readFileSync('./full_chain.pem'),
    key: fs.readFileSync('./private.key')
  }

  // 一定要把这一行代码，写到 静态资源托管之前
  app.use(compression())
  app.use(express.static('./dist'))

  https.createServer(opctions,app).listen(443);
  ```

## 使用PM2管理项目
  1、 pm2需要全局安装
    
    npm install -g pm2

  2、进入项目根目录

  2.1 启动进程/应用

    pm2 start bin/www 或 pm2 start app.js

  2.2 重命名进程/应用

    pm2 start app.js --name wb123

  2.3 添加进程/应用 watch
  
    pm2 start bin/www --watch

  2.4 结束进程/应用
  
    pm2 stop www

  2.5 结束所有进程/应用
    
    pm2 stop all

  2.6 删除进程/应用
  
    pm2 delete www

  2.7 删除所有进程/应用
  
    pm2 delete all

  2.8 列出所有进程/应用
  
    pm2 list

  2.9 查看某个进程/应用具体情况
  
    pm2 describe www

  2.10 查看进程/应用的资源消耗情况
  
    pm2 monit

  2.11 查看pm2的日志
  
    pm2 logs

  2.12 若要查看某个进程/应用的日志,使用
  
    pm2 logs www

  2.13 重新启动进程/应用
  
    pm2 restart www

  2.14 重新启动所有进程/应用
  
    pm2 restart all