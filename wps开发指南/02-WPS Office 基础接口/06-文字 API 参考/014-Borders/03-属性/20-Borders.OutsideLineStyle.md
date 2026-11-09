# Borders.OutsideLineStyle

返回或设置指定对象的外部边框。



## 语法

express.**OutsideLineStyle**

express   一个代表 **Borders** 对象的变量。

## 类型

WdLineStyle

## 说明


如果指定对象应用了多种边框，则该属性返回 **wdUndefined** ；否则，返回 **False** 或 **WdLineStyle** 常量。可将该属性值设置为 **True** 、 **False** 或 **WdLineStyle** 常量。

如果为 **True** ，则会将线条样式设置为默认线条样式，将线条宽度设置为默认线条宽度。可用 **DefaultBorderLineWidth** 和 **DefaultBorderLineStyle** 属性设置默认线条样式和宽度。

使用下列两条指令中的任何一条，都可删除活动文档中第一个表格的外部边框。

```JavaScript
ActiveDocument.Tables(1).Borders.OutsideLineStyle = wdLineStyleNone
ActiveDocument.Tables(1).Borders.OutsideLineStyle = false
```



## 示例


```JavaScript
/*本示例在活动文档的第一段的周围添加 0.75 磅宽的双边框。*/
function test() {
    let borders = ActiveDocument.Paragraphs.Item(1).Borders
    borders.OutsideLineStyle = wdLineStyleDouble
    borders.OutsideLineWidth = wdLineWidth075pt
}
```


```JavaScript
/*本示例在活动文档的第一个表格周围添加边框。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let table = ActiveDocument.Tables.Item(1)
        table.Borders.OutsideLineStyle = wdLineStyleSingle
    }
}
```
