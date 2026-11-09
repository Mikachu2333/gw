# Style.ParagraphFormat

返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定样式的段落设置。可读/写。



## 语法

express.**ParagraphFormat**

express   一个代表 **Style** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例修改活动文档的“标题 2”样式。应用该样式的段落将根据第一个制表位缩进，并且采用 2 倍行距。*/
function test() {
    let paragraphFormat = ActiveDocument.Styles.Item(wdStyleHeading2).ParagraphFormat
    paragraphFormat.TabIndent(1)
    paragraphFormat.Space2()
}
```


```JavaScript
/*本示例显示所选内容的样式的段落的对齐方式是否为wdAlignParagraphJustify。*/
function test() {
    alert(Selection.Style.ParagraphFormat.Alignment == wdAlignParagraphJustify)
}
```
