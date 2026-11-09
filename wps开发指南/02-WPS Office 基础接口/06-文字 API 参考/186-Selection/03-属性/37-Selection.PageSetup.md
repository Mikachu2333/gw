# Selection.PageSetup

返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象，该对象与指定选定内容相关联。



## 语法

express.**PageSetup**

express   一个代表 **Selection** 对象的变量。

## 类型

PageSetup

## 示例


```JavaScript
/*本示例将页眉与页面顶端、页脚与页面底端的距离分别设置为 18 磅（0.25 英寸)。此操作有效范围为所选内容所在的节。*/
function test() {
    Selection.PageSetup.FooterDistance = 18
    Selection.PageSetup.HeaderDistance = 18
}
```


```JavaScript
/*本示例将选定内容的页面方向设置为横向。*/
function test() {
    Selection.PageSetup.Orientation = wdOrientLandscape
}
```
