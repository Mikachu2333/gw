# Axis.HasDisplayUnitLabel

如果由 **[DisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnit)** 或 **[DisplayUnitCustom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/DisplayUnitCustom)** 属性指定的标签显示在指定坐标轴上，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasDisplayUnitLabel**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中的第一张内嵌图表的数值轴上的单位设置为 500，但隐藏单位标签。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.DisplayUnit = xlCustom
        axis.DisplayUnitCustom = 500
        axis.AxisTitle.Caption = "Rebate Amounts"
        axis.HasDisplayUnitLabel = false
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴是否展示单位标签。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.HasDisplayUnitLabel)
}
```
