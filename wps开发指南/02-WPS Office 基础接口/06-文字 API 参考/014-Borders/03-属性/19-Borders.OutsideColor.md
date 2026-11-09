# Borders.OutsideColor

返回或设置外部边框的 24 位颜色。



## 语法

express.**OutsideColor**

express   一个代表 **Borders** 对象的变量。

## 类型

WdColor

## 说明


此属性可以是任何有效的 **WdColor** 常量，也可以是 JavaScript 的 **RGB** 函数返回的值。

如果将 **OutsideLineStyle** 属性设置为 **wdLineStyleNone** 或 **False** ，则本属性的设置不会产生任何效果。



## 示例


```JavaScript
/*本示例在活动文档的第一个表格的行列之间添加边框，然后设置内部和外部边框的颜色。*/
function test() {
    if (Application.ActiveDocument.Tables.Count >= 1) {
        let table = ActiveDocument.Tables.Item(1)
        let borders = table.Borders
        borders.InsideLineStyle = true
        borders.InsideColor = wdColorBrightGreen
        borders.OutsideColor = wdColorDarkTeal
    }
}
```


```JavaScript
/*本示例在活动文档的第一段的周围添加深红色、0.75 磅宽的双边框。*/
function test() {
    let borders = Application.ActiveDocument.Paragraphs.Item(1).Borders
    borders.OutsideLineStyle = wdLineStyleDouble
    borders.OutsideLineWidth = wdLineWidth075pt
    borders.OutsideColor = wdColorDarkRed
}
```
