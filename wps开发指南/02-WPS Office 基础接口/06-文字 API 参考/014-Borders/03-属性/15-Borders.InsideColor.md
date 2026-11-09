# Borders.InsideColor

返回或设置内部边框的 24 位颜色。可读写。



## 语法

express.**InsideColor**

express   一个代表 **Borders** 对象的变量。

## 类型

WdColor

## 说明


该属性可以是任何有效的 **WdColor** 常量或 JavaScript 的 **RGB** 函数返回的值。如果将 **InsideLineStyle** 属性设置为 **wdLineStyleNone** 或 **False** ，则本属性的设置不产生任何效果。



## 示例


```JavaScript
/*本示例在活动文档的前四个段落之间添加深红色边框。*/
function test() {
    let range = ActiveDocument.Range(ActiveDocument.Paragraphs.Item(1).Range.Start, ActiveDocument.Paragraphs.Item(4).Range.End)
    let borders = range.Borders
    borders.InsideLineStyle = wdLineStyleSingle
    borders.InsideLineWidth = wdLineWidth150pt
    borders.InsideColor = wdColorDarkRed
}
```


```JavaScript
/*本示例显示所选内容的内部边框颜色是否为 wdColorDarkRed。*/
function test() {
    alert(Selection.Borders.InsideColor == wdColorDarkRed)
}
```
