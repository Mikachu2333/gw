# Axes.Item

从 **Axes** 集合中返回一个 **[Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/obj)** 对象。



## 语法

express.**Item(Type, AxisGroup)**

express   一个代表 **Axes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlAxisType | 用于指定坐标轴类型的其中一个枚举值。 |
| AxisGroup | 可选 | XlAxisGroup | 用于指定坐标轴组的其中一个枚举值。 |

## 返回值

Axis

## 示例


```JavaScript
/*本示例为活动文档中的第一张内嵌图表设置分类轴标题文本。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes().Item(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Caption = "1994"
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的数值轴的主坐标轴组的线条的虚线样式和宽度。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes().Item(xlValue, xlPrimary)
    axis.Format.Line.DashStyle = msoLineDashDotDot
    axis.Format.Line.Width = 1.5
}
```
