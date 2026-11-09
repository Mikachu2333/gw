# WebOptions.OptimizeForBrowser

如果 WPS 为由 **[BrowserLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/WebOptions/member/BrowserLevel)** 属性指定的 Web 浏览器优化指定的网页，则该属性值为 **True** 。可读写 **Boolean** 类型。



## 语法

express.**OptimizeForBrowser**

express   一个代表 **WebOptions** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例新建一个网页，并为 Internet Explorer 5 优化该网页。*/
function test() {
    let document = Documents.Add(null, null, wdNewWebPage)
    let webOptions = document.WebOptions
    webOptions.BrowserLevel = wdBrowserLevelMicrosoftInternetExplorer5
    webOptions.OptimizeForBrowser = true
}
```


```JavaScript
/*本示例显示是否由 BrowserLevel 属性指定的 Web 浏览器优化活动文档另存的网页。*/
function test() {
    alert(ActiveDocument.WebOptions.OptimizeForBrowser)
}
```
