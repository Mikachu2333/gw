# Axis.MajorUnit

返回或设置数值轴的主要单位。可读/写 **Double** 类型。



## 语法

express.**MajorUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **[MajorUnitIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MajorUnitIsAuto)** 属性设置为 **False** 。

可以使用 **[TickMarkSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/TickMarkSpacing)** 属性设置分类轴上的刻度线间距。



## 示例


```JavaScript
/*本示例为活动文档中的第一张内嵌图表的数值轴设置主要和次要刻度单位。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MajorUnit = 100
        axis.MinorUnit = 20
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的主要单位。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.MajorUnit)
}
```
