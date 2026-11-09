# Series.HasErrorBars

如果系列有误差线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasErrorBars**

express   一个代表 **Series** 对象的变量。

## 类型

boolean

## 说明


该属性不适用于三维图表。



## 示例


```JavaScript
/*本示例从活动文档中第一个图表的第一个系列删除误差线。应在第一系列有误差线的 2D 折线图上运行示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).HasErrorBars = false
    }
}
```


```JavaScript
/*本示例显示选中图表的第二个系列是否具有误差线。应在第二系列有误差线的 2D 折线图上运行示例。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    alert(inlineShape.Chart.SeriesCollection(2).HasErrorBars)
}
```
