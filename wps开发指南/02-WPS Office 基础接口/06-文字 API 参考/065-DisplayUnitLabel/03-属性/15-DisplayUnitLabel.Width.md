# DisplayUnitLabel.Width

返回对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中数值轴的单位标签的宽度。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Width)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的单位标签的宽度。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Width + " 磅")
}
```
