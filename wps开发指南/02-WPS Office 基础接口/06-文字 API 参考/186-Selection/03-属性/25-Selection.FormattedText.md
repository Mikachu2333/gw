# Selection.FormattedText

返回或设置一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象包含指定区域或选定内容中进行过格式编排的文字。可读写。



## 语法

express.**FormattedText**

express   一个代表 **Selection** 对象的变量。

## 类型

Range

## 说明


此属性返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，以及指定的区域或所选内容中的字符格式和文本。如果在区域或所选内容中有一个段落标记，则 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象中包含段落格式。

在设置此属性时，区域中的文本会被格式文本替换。如果不需要替换现有的文本，则在使用本属性之前使用 **Collapse** 方法。



## 示例


```JavaScript
/*本示例将所选内容的文本格式设置为加粗格式，并显示文本内容。*/
function test() {
    Selection.FormattedText.Bold = msoTrue
    alert(Selection.FormattedText.Text)
}
```


```JavaScript
/*本示例将选定内容的文字和格式复制到新文档。*/
function test() {
    let range = Selection.FormattedText
    Documents.Add().Content.FormattedText = range
}
```
