# Axis.Left

以磅为单位返回从对象左边缘至图表区左边缘之间的距离。只读 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的分类坐标轴到图表区左边缘的距离。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes(1).Chart.Axes(xlCategory)
    alert(axis.Left)
}
```


```JavaScript
/*本示例显示第一个文档中第一张图表的数值坐标轴到图表区左边缘的距离。*/
function test() {
    let axis = Documents.Item(1).InlineShapes(1).Chart.Axes(xlValue)
    alert(axis.Left)
}
```
