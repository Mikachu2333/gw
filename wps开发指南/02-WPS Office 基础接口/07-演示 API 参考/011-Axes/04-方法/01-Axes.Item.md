# Axes.Item

从 **Axes** 集合返回一个 **[Axis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/obj)** 对象。



## 语法

express.**Item(Type, AxisGroup)**

express   一个代表 **Axes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlAxisType | 坐标轴类型。 |
| AxisGroup | 可选 | XlAxisGroup | 坐标轴。 |

## 返回值

Axis

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片的第一张图表设置分类轴的标题文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes().Item(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Caption = "1994"
    }
}
```


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片的第一个图表的数值轴的主坐标轴组的线条的虚线样式和宽度。*/
function test() {
    let axis = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.Axes().Item(xlValue, xlPrimary)
    axis.Format.Line.DashStyle = msoLineDashDotDot
    axis.Format.Line.Width = 1.5
}
```
