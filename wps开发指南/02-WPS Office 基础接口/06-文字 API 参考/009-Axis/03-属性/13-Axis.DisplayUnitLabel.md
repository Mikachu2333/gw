# Axis.DisplayUnitLabel

返回指定坐标轴的 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DisplayUnitLabel/obj)** 对象。如果 **[HasDisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasDisplayUnitLabel)** 属性设置为 **False** ，则返回 **null** 。只读。



## 语法

express.**DisplayUnitLabel**

express   一个代表 **Axis** 对象的变量。

## 类型

DisplayUnitLabel

## 示例


```JavaScript
/*本示例将活动文档中的第一张内嵌图表的数值轴的标签标题设置为“Millions”，然后关闭自动字体缩放。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.DisplayUnitLabel.Caption = "Millions"
        axis.DisplayUnitLabel.AutoScaleFont = false
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的单位标签在图表坐标轴上的位置是否为xlChartElementPositionAutomatic。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.DisplayUnitLabel.Position == xlChartElementPositionAutomatic)
}
```
