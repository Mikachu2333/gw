# Series.Values

返回或设置系列中所有值的集合。可读/写 **Variant** 类型。



## 语法

express.**Values**

express   一个代表 **Series** 对象的变量。

## 类型

any

## 说明


该属性的值可以是图表的工作表中某一区域的地址或常量值数组，但不能是两者的组合。有关详细信息，请参阅示例。



## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的第一个系列值。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Values = "=Sheet1!F2:F5"
    }
}
```


```JavaScript
/*本示例为选中的第一个图表的第二个系列的数据点赋以常量值。若要为每个单独的数据点赋以常量值，则必须使用数组。*/
function test() {
    let inlineShape = Selection.InlineShapes.Item(1)
    inlineShape.Chart.SeriesCollection(2).Values = [1, 2, 3, 4]
}
```
