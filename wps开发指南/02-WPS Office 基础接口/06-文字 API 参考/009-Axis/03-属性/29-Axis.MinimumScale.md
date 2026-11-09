# Axis.MinimumScale

返回或设置数值轴上的最小值。可读/写 **Double** 类型。



## 语法

express.**MinimumScale**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **[MinimumScaleIsAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/MinimumScaleIsAuto)** 属性设置为 **False** 。



## 示例


```JavaScript
/*本示例为活动文档中第一张内嵌图表的数值轴设置最小和最大值。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MinimumScale = 10
        axis.MaximumScale = 120
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴上的最小值。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.MinimumScale)
}
```
