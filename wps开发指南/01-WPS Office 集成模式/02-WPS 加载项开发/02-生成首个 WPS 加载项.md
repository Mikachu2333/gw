#  生成首个 WPS 加载项

---

在本教程中，将创建一个 WPS 加载项，该加载项将：  

* 设计自定义功能区
* 打开对话框
* 创建自定义任务窗格

## 准备开发环境

* 安装wps
* 安装Node.js
* 安装代码编辑器 Visual Studio Code

## 新建 WPS 加载项

1、**管理员权限(如果安装的是wps个人版，不需要管理员权限)**启动命令行，通过npm全局安装**wpsjs**开发工具包:  
 安装命令： **npm install -g wpsjs**, 如果之前已经安装了，可以检查下wpsjs版本，更新wpsjs的命令为:**npm update -g wpsjs** ![](https://cloudcdn.qwps.cn/open/_img/011914411b.png)

 2、新建一个wps加载项，假设这个wps加载项取名为"HelloWps"。  
 输入命令： **wpsjs create HelloWps**, 会出现如下图的几个选项:

![](https://cloudcdn.qwps.cn/open/_img/88e76299f5.png) 

 通过上下方向键可以选择要创建的wps加载项的类型，如果选择“文字”，则创建的加载项会在wps文字程序中加载并运行，  
同理选择“电子表格”，则会在wps表格中运行，这里假设我们选择的是“文字”，按Enter健确定。

![](https://cloudcdn.qwps.cn/open/_img/288f1565f2.png) 

 3、选择示例代码的代码风格类型  
 wpsjs工具包提供了两种不同代码风格的示例，“无”代表示例代码中都是原生的js及html代码，没有集成vue\\react等流行的前端框架。   
"Vue"代表生成的示例代码集成了Vue相关的脚手架，在实际的项目中选用Vue基于示例代码可能更适合做工程化的开发，感兴趣的同学可以两种都尝试一下。   
 这里我们选择“无”，按Enter健确认。   
 确认后wpsjs工具包会在当前目录下生成一个HelloWps的文件夹，我们进入到此文件夹，可以看到HelloWps的相关代码已经生成：

![](https://cloudcdn.qwps.cn/open/_img/d523696394.png) 

 4、开始调试并愉快的写代码  
 执行命令： **wpsjs debug**  
 执行此命令后即可开始调试，wpsjs工具包会自动启动wps并加载HelloWps这个加载项，同时wpsjs工具包启了一个http服务,此服务主要提供两方面的能力:   
 a.提供前端页的的热更新服务，wpsjs工具包检测到网页数据变化时，自动刷新页面。   
 b.提供wps加载项的在线服务，wpsjs生成的代码示例是一个在线模式，wps客户端程序实际上是通过http服务来请求在线的wps加载项相关代码和资源的。  
 最后，可以用visual studio code打开示例代码，开始愉快的写代码了。

![](https://cloudcdn.qwps.cn/open/_img/36b7b3c680.png) 

![](https://cloudcdn.qwps.cn/open/_img/490893f430.png) 

 备注：wpsjs工具包为示例代码中有一个package.json文件，这是node工具标准的配置文件，其中有一个依赖包为wps-jsapi,   
这个依赖包是wps支持的全部接口的TypeScript描述，方便在vscode中敲代码时，提供代码联想功能，由于wps接口会跟随业务   
需求不断更新，因此当发现代码联想对于有些接口不支持时，通过 **npm update --save-dev wps-jsapi**命令定期更新这个包。

---

 以上展示了如何开始第一个wps加载项的制作，在实际用况中，如果需要让企业的业务系统与wps加载项进行集成，可以参考以下示例:   
[OA助手示例](https://gitee.com/zouyf/wps)
