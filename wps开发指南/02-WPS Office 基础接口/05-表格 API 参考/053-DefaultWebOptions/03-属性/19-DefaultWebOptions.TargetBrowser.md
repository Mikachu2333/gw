# DefaultWebOptions.TargetBrowser

返回或设置一个 **MsoTargetBrowser** 常量，它指明浏览器的版本。可读写。



## 语法

express.**TargetBrowser**

express   一个代表 **DefaultWebOptions** 对象的变量。

## 类型

MsoTargetBrowser

## 说明


| **MsoTargetBrowser** 可为以下这些 **MsoTargetBrowser** 常量之一。                                |
| ------------------------------------------------------------------------------------- |
| **msoTargetBrowserIE4** 。Internet Explorer 4.0 或更高版本。                       |
| **msoTargetBrowserIE5** 。Internet Explorer 5.0 或更高版本。                       |
| **msoTargetBrowserIE6** 。Internet Explorer 6.0 或更高版本。                       |
| **msoTargetBrowserV3** 。Internet Explorer 3.0、Netscape Navigator 3.0 或更高版本。 |
| **msoTargetBrowserV4** 。Internet Explorer 4.0、Netscape Navigator 4.0 或更高版本。 |



## 示例


```JavaScript
/*在本示例中，ET 确定 Web 选项的全局默认浏览器版本是否为 IE5，并通知用户。*/
function test() {
    //Determine if IE5 is the target browser.
    if (Application.DefaultWebOptions.TargetBrowser == msoTargetBrowserIE5) {
        alert("The target browser is IE5 or later.")
    } else {
        alert("The target browser is not IE5 or later.")
    }
}
```


```JavaScript
/*本示例设置 Web 选项的全局默认浏览器版本。*/
function test() {
    Application.DefaultWebOptions.TargetBrowser = msoTargetBrowserIE6
}
```
