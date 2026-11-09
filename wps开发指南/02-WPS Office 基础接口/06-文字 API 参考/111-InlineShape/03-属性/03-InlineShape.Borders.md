# InlineShape.Borders

返回一个 **Borders** 集合，该集合代表指定图形的所有边框。



## 语法

express.**Borders**

express   一个代表 **InlineShape** 对象的变量。

## 类型

Borders

## 说明


有关返回集合中单个成员的信息，请参阅 返回集合中的对象。



## 示例


```JavaScript
/*本示例在活动文档上第一张内嵌图片中添加深红色、0.75 磅宽的双外边框。*/
function test() {
    let borders = Application.ActiveDocument.InlineShapes.Item(1).Borders
    borders.OutsideLineStyle = wdLineStyleDouble
    borders.OutsideLineWidth = wdLineWidth075pt
    borders.OutsideColor = wdColorDarkRed
}
```


```JavaScript
/*本示例显示第一个文档上第一张内嵌图片的外边框样式是否为wdLineStyleSingle。*/
function test() {
    let borders = Application.Documents.Item(1).InlineShapes.Item(1).Borders
    alert(borders.OutsideLineStyle == wdLineStyleSingle)
}
```
