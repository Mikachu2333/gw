# Replacement.ParagraphFormat

返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定替换操作的段落设置。可读/写。



## 语法

express.**ParagraphFormat**

express   一个代表 **Replacement** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例查找活动文档中所有双倍行距的段落，并将其设置为 1.5 倍行距。*/
function test() {
    let find = ActiveDocument.Content.Find
    find.ClearFormatting()
    find.ParagraphFormat.Space2()
    find.Replacement.ClearFormatting()
    find.Replacement.ParagraphFormat.Space15()
    find.Execute("", null, null, null, null, null, null, null, null, "", wdReplaceAll)
}
```


```JavaScript
/*本示例查找第一个文档中段后间距为0磅的段落，并将其段后间距设置为4磅。*/
function test() {
    let find = Documents.Item(1).Content.Find
    find.ParagraphFormat.SpaceAfter = 0
    find.Replacement.ParagraphFormat.SpaceAfter = 4
    find.Execute("", null, null, null, null, null, null, null, null, "", wdReplaceAll)
}
```
