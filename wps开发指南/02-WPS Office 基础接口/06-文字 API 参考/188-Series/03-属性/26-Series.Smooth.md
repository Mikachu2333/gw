# Series.Smooth

如果对折线图或散点图应用了平滑线效果，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Smooth**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于折线图和散点图。



## 示例


```JavaScript
/*本示例对活动文档中第一个图表的第一个系列应用曲线平滑效果。应在 2D 折线图上运行示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Smooth = true
    }
}
```


```JavaScript
/*本示例显示选中的第一个图表的第三个系列是否应用曲线平滑效果。应在 2D 折线图上运行示例。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    alert(inlineShape.Chart.SeriesCollection(3).Smooth)
}
```
