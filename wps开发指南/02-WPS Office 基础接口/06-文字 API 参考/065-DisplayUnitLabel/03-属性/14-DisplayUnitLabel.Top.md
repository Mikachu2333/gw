# DisplayUnitLabel.Top

返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中数值轴的单位标签上边缘到图表区顶部的距离。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Top)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的数值轴的单位标签上边缘到图表区顶部的距离设置为50磅。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Top = 50
}
```
