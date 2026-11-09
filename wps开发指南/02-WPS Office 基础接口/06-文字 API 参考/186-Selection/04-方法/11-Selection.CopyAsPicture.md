# Selection.CopyAsPicture

 **CopyAsPicture** 方法与 **Copy** 方法的工作方式相同。



## 语法

express.**CopyAsPicture()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的内容复制为图片，并将其作为图片粘贴到文档的结尾。*/
function test() {
    ActiveDocument.Content.Select()
    Selection.CopyAsPicture()
    Selection.Collapse(wdCollapseEnd)
    Selection.PasteSpecial(null, null, null, null, wdPasteMetafilePicture)
}
```


```JavaScript
/*本示例将第一个文档的第四个段落选中，并将选定内容复制为图片。*/
function test() {
    Documents.Item(1).Paragraphs.Item(4).Range.Select()
    Selection.CopyAsPicture()
}
```
