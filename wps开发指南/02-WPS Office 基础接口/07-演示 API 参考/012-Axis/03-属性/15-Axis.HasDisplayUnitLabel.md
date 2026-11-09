# Axis.HasDisplayUnitLabel

如果由 **[DisplayUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/DisplayUnit)** 或 **[DisplayUnitCustom](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/DisplayUnitCustom)** 属性指定的标签显示在指定坐标轴上，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasDisplayUnitLabel**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的数值轴上的单位设置为 500，但隐藏单位标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.DisplayUnit = xlCustom
        axis.DisplayUnitCustom = 500
        axis.AxisTitle.Caption = "Rebate Amounts"
        axis.HasDisplayUnitLabel = false
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴是否展示单位标签。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.HasDisplayUnitLabel)
}
```
