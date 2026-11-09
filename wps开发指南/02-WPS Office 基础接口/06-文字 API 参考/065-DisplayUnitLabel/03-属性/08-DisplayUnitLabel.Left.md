# DisplayUnitLabel.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中数值轴上的单位标签左边缘到图表区左边缘的距离。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Left)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的数值轴的单位标签左边缘到图表区左边缘的距离设置为10磅。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Left = 10
}
```
