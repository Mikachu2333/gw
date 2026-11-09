# Selection.TextRange

返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表选定文本（ **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Selection/obj)** 对象）。只读。



## 语法

express.**TextRange**

express   一个代表 **Selection** 对象的变量。

## 类型

TextRange

## 说明


当演示文稿在幻灯片视图、普通视图、大纲视图、备注页视图或任何母版视图时，可从选定的内容中创建文本范围。



## 示例


```JavaScript
/*以下示例将第一个窗口中的选定文本加粗。*/
function test() {
    Windows.Item(1).Selection.TextRange.Font.Bold = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选择文本的边界框的高度。*/
function test() {
    alert(ActiveWindow.Selection.TextRange.BoundHeight + " 磅")
}
```
