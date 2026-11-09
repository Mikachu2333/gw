# Range.ParagraphFormat

返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定范围的段落设置。可读/写。



## 语法

express.**ParagraphFormat**

express   一个代表 **Range** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*本示例将第一个文档的主文档文章的段落格式设置为2倍行距，并且在 0.25 英寸的位置设置一个自定义制表位。*/
function test() {
    let paragraphFormat = Documents.Item(1).Content.ParagraphFormat
    paragraphFormat.Space2()
    paragraphFormat.TabStops.Add(InchesToPoints(0.25))
}
```


```JavaScript
/*本示例为所选段落添加双线下边框。*/
function test() {
    let border = Selection.Range.ParagraphFormat.Borders.Item(wdBorderBottom)
    border.LineStyle = wdLineStyleDouble
    border.LineWidth = wdLineWidth025pt
}
```
