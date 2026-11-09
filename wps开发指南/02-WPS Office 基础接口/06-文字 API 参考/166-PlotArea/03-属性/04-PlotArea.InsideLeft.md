# PlotArea.InsideLeft

以磅为单位返回或设置从图表边缘到绘图区内部左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**InsideLeft**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 说明


用于这种度量方式的绘图区不包含坐标轴标签。绘图区的 **[Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Left)** 属性使用包含坐标轴标签的封闭矩形。



## 示例


```JavaScript
/*本示例以活动文档上第一个内嵌图表的绘图区的InsideLeft、InsideTop、InsideWidth和InsideHeight的属性值在该文档上新建一个形状，并设置该形状的填充透明度和线条虚线样式。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart == msoTrue) {
        let plotArea = inlineShape.Chart.PlotArea
        let shape = ActiveDocument.Shapes.AddShape(msoShapeRectangle, plotArea.InsideLeft, plotArea.InsideTop, plotArea.InsideWidth, plotArea.InsideHeight)
        shape.Fill.Transparency = 1
        shape.Line.DashStyle = msoLineDashDot
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表边缘到绘图区左内边缘的距离。*/
function test() {
    let plotArea = Documents.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.InsideLeft += 5
}
```
