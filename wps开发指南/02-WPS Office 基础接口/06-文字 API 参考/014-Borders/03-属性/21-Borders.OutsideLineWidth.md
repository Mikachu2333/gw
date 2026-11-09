# Borders.OutsideLineWidth

返回或设置对象外部边框的线条宽度。可读写。



## 语法

express.**OutsideLineWidth**

express   一个代表 **Borders** 对象的变量。

## 类型

WdLineWidth

## 说明


如果对象的外部边框具有多个线条宽度，则该属性返回 **wdUndefined** ；否则，返回 **False** 或 **WdLineWidth** 常量。可将该属性值设置为 **True** 、 **False** 或 **WdLineWidth** 常量。



## 示例


```JavaScript
/*本示例为活动文档的第一个表格添加波浪形边框。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let borders = ActiveDocument.Tables.Item(1).Borders
        borders.OutsideLineStyle = wdLineStyleSingleWavy
        borders.OutsideLineWidth = wdLineWidth075pt
    }
}
```


```JavaScript
/*本示例在活动文档的前 4 段四周添加点线型边框。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(1).Range.Start, paragraphs.Item(4).Range.End)
    range.Borders.OutsideLineStyle = wdLineStyleDot
    range.Borders.OutsideLineWidth = wdLineWidth075pt
}
```
