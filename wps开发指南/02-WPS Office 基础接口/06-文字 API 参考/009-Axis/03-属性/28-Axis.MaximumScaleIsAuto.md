# Axis.MaximumScaleIsAuto

如果 WPS文字 计算数值轴的最大值，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MaximumScaleIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **[MaximumScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MaximumScale)** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例自动设置活动文档的第一张内嵌图表的数值轴的最小刻度和最大刻度。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MinimumScaleIsAuto = true
        axis.MaximumScaleIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的最大值是否由WPS计算。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.MaximumScaleIsAuto)
}
```
