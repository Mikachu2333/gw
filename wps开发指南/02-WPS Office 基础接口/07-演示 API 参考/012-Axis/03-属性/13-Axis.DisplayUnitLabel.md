# Axis.DisplayUnitLabel

返回指定坐标轴的 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/obj)** 对象。如果 **[HasDisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/HasDisplayUnitLabel)** 属性设置为 **False** ，则返回 **null** 。只读。



## 语法

express.**DisplayUnitLabel**

express   一个代表 **Axis** 对象的变量。

## 类型

DisplayUnitLabel

## 示例


```JavaScript
/*本示例将活动演示文稿中第一张幻灯片的第一张图表的数值轴的标签标题设置为“Millions”，然后关闭自动字体缩放。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.DisplayUnitLabel.Caption = "Millions"
        axis.DisplayUnitLabel.AutoScaleFont = false
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二个图表的数值轴的单位标签在图表坐标轴上的位置是否为自动设置图表元素的位置。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.DisplayUnitLabel.Position == xlChartElementPositionAutomatic)
}
```
