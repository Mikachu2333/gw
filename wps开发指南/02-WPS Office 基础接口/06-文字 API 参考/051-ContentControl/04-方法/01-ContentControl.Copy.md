# ContentControl.Copy

将活动文档中的内容控件复制到剪贴板。



## 语法

express.**Copy()**

express   一个代表 **ContentControl** 对象的变量。

## 返回值

void

## 说明


使用 **Copy** 方法时，原始内容控件仍保留在活动文档中，但控件的副本（包括所有文本和属性设置）将移动到剪贴板中。然后，可以将内容控件粘贴到活动文档的其他部分。可以使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **Paste** 方法或 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象的 **Paste** 方法插入复制的内容控件，也可以使用 WPS 中的 **“粘贴”** 功能。



## 示例


```JavaScript
/*本示例将所选内容中第一个内容控件复制到剪贴板，并粘贴到新建文档上。*/
function test() {
    Selection.ContentControls.Item(1).Copy()
    Documents.Add()
    Selection.Paste()
}
```


```JavaScript
/*本示例将活动文档中第三个内容控件复制到剪贴板，并粘贴到新建段落处。*/
function test() {
    ActiveDocument.ContentControls.Item(3).Copy()
    ActiveDocument.Paragraphs.Add().Range.Paste()
}
```
