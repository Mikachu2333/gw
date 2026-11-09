# DisplayUnitLabel.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档上第一个内嵌图表中数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Select()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的数值轴的单位标签的名称为“DispUnitLabel ”，则选中该单位标签。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    if (displayUnitLabel.Name == "DispUnitLabel ") {
        displayUnitLabel.Select()
    }
}
```
