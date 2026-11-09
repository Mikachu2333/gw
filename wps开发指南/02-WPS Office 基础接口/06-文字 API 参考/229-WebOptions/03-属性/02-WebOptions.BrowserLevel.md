# WebOptions.BrowserLevel

返回或设置 **WdBrowserLevel** 类型的值，该值代表指定的网页要指向的 Web 浏览器级别。可读写。



## 语法

express.**BrowserLevel**

express   一个代表 **WebOptions** 对象的变量。

## 类型

WdBrowserLevel

## 说明


如果 **OptimizeForBrowser** 属性被设为 **False** ，则该属性将被忽略。

设置 **DefaultWebOptions** 对象的 **BrowserLevel** 属性后，在 WPS 中创建的任何新网页的 **BrowserLevel** 属性都将与全局设置相同。



## 示例


```JavaScript
/*本示例显示当活动文档另存为网页时指向的 Web 浏览器级别是否为wdBrowserLevelV4。*/
function test() {
    alert(ActiveDocument.WebOptions.BrowserLevel == wdBrowserLevelV4)
}
```


```JavaScript
/*本示例将第一个文档另存为网页时指向的 Web 浏览器级别设置为wdBrowserLevelMicrosoftInternetExplorer6。*/
function test() {
    Documents.Item(1).WebOptions.BrowserLevel = wdBrowserLevelMicrosoftInternetExplorer6
}
```
