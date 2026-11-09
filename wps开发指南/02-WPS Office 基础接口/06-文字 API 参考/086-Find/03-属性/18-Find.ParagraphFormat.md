# Find.ParagraphFormat

返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定查找操作的段落设置。可读/写。



## 语法

express.**ParagraphFormat**

express   一个代表 **Find** 对象的变量。

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
/*本示例查找所选内容中所有左对齐的段落，并将其替换为居中对齐。*/
function test() {
    let find = Selection.Find
    find.ParagraphFormat.Alignment = wdAlignParagraphLeft
    find.Replacement.ParagraphFormat.Alignment = wdAlignParagraphCenter
    find.Execute("", null, null, null, null, null, null, null, null, "", wdReplaceAll)
}
```
