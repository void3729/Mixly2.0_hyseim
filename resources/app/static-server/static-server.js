/**
 * 静态资源服务器
 *  * 图片
 *  * html
 *  * css
 *  * js
 *  * ...文件
 
* 其他语言
    * PHP（后端语言） + Apache（服务器）
    * Java + Tomcat
    * .net + IIS
    * ...

* 在Nodejs中实现静态资源服务器
    * 所需模块
        * http
        * fs
        * url
        * path
* 一次http请求的过程
    * 请求：request   请求对象
        * 客户端->服务器
    * 响应：response  响应对象
        * 服务器 -> 客户端
        * 
* Express 但是一般用这个做静态资源管理器
 */

const http = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");

// 引入自己的模块 路径下查找
const mime = require("./mime.js");

let StaticServer = {};

let debug = false;

StaticServer.init = () => {
    StaticServer.obj = http.createServer((req, res) => {
        // 静态资源服务器根据不同的请求地址响应不同的内容

        // 1、获取访问路径 ，req.url是请求的路径
        let {
            pathname
        } = url.parse(req.url); //解构赋值 可以看下url.parse的返回值 是对象
        // 2、把路径转换为系统的绝对路径
        if (pathname === '/') pathname = 'index.html';
        const dirPath = path.resolve(__dirname, '../');
        const realpath = path.join(dirPath + '/', pathname);
        // console.log("realpath=", realpath);

        // 3、获取请求资源文件的后缀 用于编码格式
        const extname = path.extname(pathname).substring(1); // .html => html 去掉.

        // 4、利用fs模块读取静态资源
        fs.readFile(realpath, (err, data) => {
            if (err) {
                return res.end("404")
            }
            // res.writeHead(200, "content-type:text/html;charset=utf-8")
            // 利用 mime模块 设置不同资源的文件的编码格式
            res.writeHead(200, "Content-Type:" + mime[extname] + ";charset=utf-8")
            // res.write(data)
            res.end(data)
        })
    })
}

StaticServer.run = (port, serverDebug = false) => {
    debug = serverDebug;
    StaticServer.init();
    //开启服务器，设置端口号
    StaticServer.obj.listen(port, () => {
        console.log('Static服务器正在运行 [端口 - ' + port + ']...');
    });
}

module.exports = StaticServer;
