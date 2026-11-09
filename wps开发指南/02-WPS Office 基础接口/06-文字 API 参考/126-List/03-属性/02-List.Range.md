# List.Range

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所包含的文档部分。



## 语法

express.**Range**

express   一个代表 **List** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例设置活动文档上第一个列表的字体的粗体格式和字号。*/
function test() {
    let range = ActiveDocument.Lists.Item(1).Range
    range.Font.Bold = msoTrue
    range.Font.Size = 15
}
```


```JavaScript
/*本示例设置活动文档的主文档文章的第一个带有格式的列表的文档部分的斜体格式，然后复制该文档部分，并将其粘贴到新文档中。*/
function test() {
    let range = ActiveDocument.Content.ListFormat.List.Range
    range.Italic = msoTrue
    range.Copy()
    Documents.Add().Range().Paste()
}
```
