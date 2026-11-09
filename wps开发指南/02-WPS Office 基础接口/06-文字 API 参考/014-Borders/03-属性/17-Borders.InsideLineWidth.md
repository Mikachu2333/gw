# Borders.InsideLineWidth

返回或设置对象内部边框的线条宽度。



## 语法

express.**InsideLineWidth**

express   一个代表 **Borders** 对象的变量。

## 类型

WdLineWidth

## 说明


如果对象的内部边框具有多个线条宽度，则该属性返回 **wdUndefined** ；否则，返回 **False** 或 **[WdLineWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLineWidth)** 常量。可将该属性值设置为 **True** 、 **False** 或 **[WdLineWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLineWidth)** 常量之一。



## 示例


```JavaScript
/*本示例在活动文档的第一个表格中的行列之间添加边框。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let table = ActiveDocument.Tables.Item(1)
        table.Borders.InsideLineStyle = wdLineStyleDot
        table.Borders.InsideLineWidth = wdLineWidth050pt
    }
}
```


```JavaScript
/*本示例在活动文档中的前 4 段之间添加点线型边框。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(1).Range.Start, ActiveDocument.Paragraphs.Item(4).Range.End)
    range.Borders.InsideLineStyle = wdLineStyleDot
    range.Borders.InsideLineWidth = wdLineWidth075pt
}
```
