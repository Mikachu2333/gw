# Axis.MinorUnitIsAuto

如果 WPS文字 计算数值轴的次要刻度单位，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MinorUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **[MinorUnit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinorUnit)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例自动计算活动文档的第一张内嵌图表的数值轴的主要和次要刻度单位。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MajorUnitIsAuto = true
        axis.MinorUnitIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的次要刻度单位是否由WPS计算。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.MinorUnitIsAuto)
}
```
