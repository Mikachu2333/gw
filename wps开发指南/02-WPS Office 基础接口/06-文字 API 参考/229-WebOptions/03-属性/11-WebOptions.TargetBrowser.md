# WebOptions.TargetBrowser

设置或返回一个 **MsoTargetBrowser** 常量，该常量代表在 Web 浏览器中查看文档的目标浏览器。可读写。



## 语法

express.**TargetBrowser**

express   一个代表 **WebOptions** 对象的变量。

## 类型

MsoTargetBrowser

## 示例


```JavaScript
/*本示例为活动文档设置目标浏览器，如果当前目标浏览器是较早版本，则将目标浏览器设为 Internet Explorer 6。*/
function test() {
    let webOptions = ActiveDocument.WebOptions
    if (webOptions.TargetBrowser !== msoTargetBrowserIE6) {
        webOptions.TargetBrowser = msoTargetBrowserIE6
    }
}
```


```JavaScript
/*本示例显示当第一个文档另存为网页时在 Web 浏览器中查看该文档的目标浏览器是否为msoTargetBrowserIE5。*/
function test() {
    alert(Documents.Item(1).WebOptions.TargetBrowser == msoTargetBrowserIE5)
}
```
