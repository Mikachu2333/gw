# Application.BrowseExtraFileTypes

如果将该属性设置为“text/html”，则用 WPS （而不是默认的 Internet 浏览器）可以打开超链接的 HTML 文件。 **String** 类型，可读写。



## 语法

express.**BrowseExtraFileTypes**

express   一个代表 **Application** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例使 WPS（而不是默认的 Internet 浏览器）打开超链接的 HTML 文件。*/
function test() {
    Application.BrowseExtraFileTypes = "text/html"
}
```


```JavaScript
/*本示例判断如果使用 WPS（而不是默认的 Internet 浏览器）打开超链接的 HTML 文件，则通知用户。*/
function test() {
    if (Application.BrowseExtraFileTypes == "text/html") {
        alert("使用WPS打开超链接的 HTML 文件")
    }
}
```
