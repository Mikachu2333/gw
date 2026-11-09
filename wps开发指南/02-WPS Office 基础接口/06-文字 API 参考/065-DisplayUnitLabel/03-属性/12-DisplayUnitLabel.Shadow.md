# DisplayUnitLabel.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中数值轴上的单位标签是否有阴影。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Shadow)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的数值轴的单位标签的阴影设置为可见。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Shadow = true
}
```
