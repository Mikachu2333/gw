# Range.CopyAsPicture

 **CopyAsPicture** 方法与 **Copy** 方法的工作方式相同。



## 语法

express.**CopyAsPicture()**

express   一个代表 **Range** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的内容复制为图片，并将其作为图片粘贴到文档的结尾。*/
function test() {
    let range = ActiveDocument.Range()
    range.CopyAsPicture()
    range.Collapse(wdCollapseEnd)
    range.PasteSpecial(null, null, null, null, wdPasteMetafilePicture)
}
```


```JavaScript
/*本示例在光标处插入文本，并将活动文档的主文档文章的内容复制为图片，然后将其作为图片粘贴到新建文档中。*/
function test() {
    Selection.TypeText("example")
    ActiveDocument.Content.CopyAsPicture()
    Documents.Add().Range().PasteSpecial(null, null, null, null, wdPasteMetafilePicture)
}
```
