# Document.Select

选择指定文档的内容。



## 语法

express.**Select()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


使用该方法后，可用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 属性来处理选定项目。有关详细信息，请参阅处理 Selection 对象。



## 示例


```JavaScript
/*本示例选中第二个文档的内容，并将所选内容的字体设置为加粗格式的红色字体。*/
function test() {
    Documents.Item(2).Select()
    Selection.Font.Bold = msoTrue
    Selection.Font.Color = wdColorRed
}
```


```JavaScript
/*本示例选中名为”“example.docx”的文档的内容，并显示所选内容的文本。*/
function test() {
    Documents.Item("example.docx").Select()
    alert(Selection.Range.Text)
}
```
