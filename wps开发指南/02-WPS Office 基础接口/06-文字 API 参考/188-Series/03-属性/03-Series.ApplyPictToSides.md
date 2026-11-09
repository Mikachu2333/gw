# Series.ApplyPictToSides

如果将图片应用于系列中的某个数据点或所有数据点的两侧，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ApplyPictToSides**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将图片应用于活动文档中第一个图表的第一个系列的所有数据点两侧。图片必须已应用于该系列（设置此属性将更改图片的方向）。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).ApplyPictToSides = true
    }
}
```


```JavaScript
/*本示例显示选中图表是否将图片应用于第二个系列的数据点两侧。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    alert(inlineShape.Chart.SeriesCollection(2).ApplyPictToSides)
}
```
