# Selection.Document

返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象与指定的选定内容相关。只读。



## 语法

express.**Document**

express   一个代表 **Selection** 对象的变量。

## 类型

Document

## 示例


```JavaScript
/*本示例显示选定内容所在的文档名称和路径。*/
function test() {
    alert(Selection.Document.FullName)
}
```


```JavaScript
/*本示例将选定内容所在文档的页面方向设置为横向。*/
function test() {
    Selection.Document.PageSetup.Orientation = wdOrientLandscape
}
```
