#  WPS 加载项开发说明

---

## WPS 加载项结构

 WPS 加载项由 [自定义功能区](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/overview)和网页两部分组成。自定义功能区只需要一个配置文件，对应 WPS 加载项目录中的ribbon.xml文件； 网页部分负责执行自定义功能区对应的逻辑功能。因为不需要显示网页，所以省略了 HTML 文件，并用main.js来引入所有的外部 JavaScript 文件； 在这些 JavaScript 文件中通常包含了一系列用 JavaScript 实现的函数，这些函数与自定义功能区的功能一一对应，我们称之为接口函数。

## 启动流程

 WPS 加载项启动时，首先在 WPS 加载项对应文件夹中自动创建index.html网页并打开，index.html从当前路径引入main.js，从而能够在接下来的过程中执行接口函数。 当网页打开成功之后，开始解析ribbon.xml生成自定义功能区，解析过程中会调用若干次接口函数，最终完成加载。 **注意**，开发者应当避免在该目录下创建index.html。

## WPS 加载项 API 使用

 WPS 加载项 API 通过对 JavaScript 功能进行的扩展，实现了网页与 WPS 应用程序交互的能力。这些 API 被集中在window.wps对象下，而我们在开发中通常会省略掉window，直接以wps开始。

## 调试

 WPS 加载项调试是对其中的一个网页单独进行的调试。调试时会弹出一个独立调试器对话框，除此之外和网页调试基本一致。 可以在调试器的 Console 中直接查看任意的 API 属性和调用 API 方法。调试自动生成的index.html网页，使用快捷键 ALT + F12。 注意调试过程中需要先关闭alert或其它同步弹框，才能继续向下调试。

![](https://cloudcdn.qwps.cn/open/_img/146f764106.png) 

## 系统集成

 用户可以在自己的浏览器中调用 WPS 加载项的 JavaScript 方法。 [wps\_sdk.js](wps_sdk.js)对调用进行了封装，让开发者可以快速调用， wps\_sdk.js对Chrome、Edge、IE8及IE8以上浏览器进行了支持。其它方式的集成请参考wps\_sdk.js实现。 点击 这里试一下吧。

  
```javascript
WpsInvoke.InvokeAsHttp(WpsInvoke.ClientType.wps, 'JsDemo', 'OnbtnShowDialogClick', {},  
   function (res) {
      if (res.status == 0)
	alert('finish')
      else
	alert(res.message)
})
```

**接口定义** 

 WpsInvoke.InvokeAsHttp(type, name, func, params, callBack)

**参数** 

 其中 WpsInvoke 是wps\_sdk.js封装的对象，InvokeAsHttp是启动 WPS 应用程序的接口。

* type ： WPS 应用程序的类型，类型的定义在ClientType中，ClientType.wps代表文字、ClientType.et代表表格、ClientType.wpp代表演示。
* name ： WPS 加载项名称。
* func ： 执行的 JavaScript 方法。
* params ： 传递给方法func的参数。
* callBack ： WpsInvoke.InvokeAsHttp执行的回调函数。

**说明** 

 启动 WPS 应用程序需要用户在浏览器点击允许启动 WPS Office。WpsInvoke.InvokeAsHttp执行是异步的，调用后立刻返回。 等到WpsInvoke.InvokeAsHttp执行完成后，执行callBack回调函数，并给回调函数传参

```javascript
{
	status: 0,  //返回状态。0 代表成功；1 代表上次请求没有完成；2 代表没有允许执行。
	message: "" //返回状态描述信息
}
```

## 发布部署{#release}

 加载项开发完成后，很多开发者可能会有这样的一些问题：加载项如何部署呢、用户如何访问部署后的加载项呢？

 我们提供两种部署方式：publish.xml模式和jsplugins.xml模式。其中publish.xml模式为推荐方式，jsplugins.xml模式从 12.1.0.16910 版本开始已被限制，仅适用于需要进行二次打包的业务场景。

### 1、publish模式

####  1.1 模式介绍  
 publish模式是通过wpsjs工具包的wpsjs publish命令打包，将生成的文件夹下的所有文件部署到打包时填写服务器地址去。告知用户publish.html地址，业务系统开发商可将publish.html的功能按需整合到自己的页面中，便于做基础环境监测。也可以复用此页面给到用户，用户可自己控制启用和禁用哪些加载项。
####  1.2 部署  
   * 使用wpsjs包的wpsjs publish命令进行打包  
   * 将目录wps-addon-build下的文件署到服务器  
   * 将wps-addon-publish下的publish.html文件部署到服务器上，一般与加载项分开部署。  
   * 告知用户publish.html文件地址。  
   [ wpsjs工具包使用](https://kdocs.cn/l/cASCu9B0G)
####  1.3 加载项加载流程  
   * 用户在浏览器中打开publish.html文件  
   * 校验加载项是否正常  
         * 在线模式：去请求地址+/ribbon.xml和 地址+/index.html  
         * 离线模式：校验改地址是否能够访问到压缩包  
   * 点击安装或卸载的加载项  
   * 本地自动生成publish.xml文件  
         * window：%appdata%/kingsoft/wps/jsaddons  
         * linux: \~/.local/share/Kingsoft/wps/jsaddons  
   * 启动WPS  
   * 读取本地publish.xml文件  
   * 加载对应组件的所有加载项  
   * 根据业务系统指定的加载项名称，使用该加载项来接收参数  
   * 业务开发方可将此页面的方法按需整合到自己的需要调起WPS的业务场景中，从而达到自动化的环境配置。
####  1.4 适用场景  
   * 只交付WPS基础包，无需二次打包  
   * 实现集成松耦合  
   * 便于业务开发方按需定义集成场景
####  1.5 版本支持情况  
   * Windows：企业版20200425分支之后版本  
   * Linux：企业版20200530分支之后版本

###  2、jsplugins.xml模式

####  2.1 模式介绍  
 jsplugins.xml模式是通过设置oem.ini配置文件的JSPluginsServer的值为加载项管理文件jsplugins.xml来控制加载项的加载（相当于WPS加载项列表文件），二次打包时，业务开发商需要告知我们JSPluginsServer的配置地址，将其配置到oem.ini文件中，业务开发商再做安装包分发。后续业务开发商可以自由的更改jsplugins.xml文件，实现加载项的新增、修改。  
[jsplugins.xml文件的配置](https://kdocs.cn/l/cBk8tsBIf)
####  2.2 部署  
   * 使用wpsjs包的wpsjs build进行加载项打包  
   * 将目录wps-addon-build下的文件署到服务器  
   * 配置jsplugins.xml文件  
   * 部署jsplugins.xml文件，一般和加载项项目分开部署  
   * 告知WPS获取jsplugins.xml的网络地址，即JSPluginsServer。（只需要打一次包，后续更改jsplugins.xml的内容不需要再次打包）  
   [ wpsjs工具包使用](https://kdocs.cn/l/cASCu9B0G)
####  2.3 加载项加载流程  
   * 启动WPS  
   * 读取oem.ini，去下载JSPluginsServer对应地址的jsplugins.xml文件  
         * window：%appdata%/kingsoft/wps/jsaddons  
         * linux: \~/.local/share/Kingsoft/wps/jsaddons  
   * 读取jsplugins.xml文件  
   * 加载对应组件的所有加载项  
   * 根据业务系统指定的加载项名称，使用该加载项来接收参数
####  2.4 适用场景  
   * 本来就需要做二次打包的项目
####  2.5 版本支持情况  
   * Windows：2019版本，2020发的版本  
   * Linux：2019版本，2020年3月后发的版本  
   * 从 12.1.0.16910 版本开始受到限制
