# Series.XValues

返回或设置图表系列中 x 值的数组。可读/写 **Variant** 类型。



## 语法

express.**XValues**

express   一个代表 **Series** 对象的变量。

## 类型

any

## 说明


可以将 **XValues** 属性设置为工作表区域或数值数组，但不能为二者的组合。

对于数据透视图，该属性为只读。



## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的第一个系列的 x 值。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).XValues = "=Sheet1!B1:B5"
    }
}
```
若要为每个单独的数据点赋以常量值，则必须使用数组。



```JavaScript
/*本示例为活动文档中第一个图表的第一个系列数据点的 x 值赋以常量值。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).XValues = [5.0, 6.3, 12.6, 28, 50]
    }
}
```
