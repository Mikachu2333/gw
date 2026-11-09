# Application.Browser

返回一个 **[Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Browser/obj)** 对象，该对象代表垂直滚动条上的 **“选择浏览对象”** 工具。只读。



## 语法

express.**Browser**

express   一个代表 **Application** 对象的变量。

## 类型

Browser

## 示例


```JavaScript
/*本示例跳转到活动文档的下一个脚注引用标记。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseFootnote
    browser.Next()
}
```


```JavaScript
/*本示例跳转到活动文档的上一个域。*/
function test() {
    let browser = Application.Browser
    browser.Target = wdBrowseField
    browser.Previous()
}
```
