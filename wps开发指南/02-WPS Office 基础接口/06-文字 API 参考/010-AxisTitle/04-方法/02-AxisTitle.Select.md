# AxisTitle.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **AxisTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个内嵌图表的分类轴标题。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.Select()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的数值轴标题的文本方向为90度，则选中该数值轴标题。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    if (axisTitle.Orientation == 90) {
        axisTitle.Select()
    }
}
```
