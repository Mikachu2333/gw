# PlotArea.InsideLeft

以磅为单位返回或设置从图表边缘到绘图区内部左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**InsideLeft**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 说明


用于这种度量方式的绘图区不包含坐标轴标签。绘图区的 **[Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlotArea/member/Left)** 属性使用包含坐标轴标签的封闭矩形。



## 示例


```JavaScript
/*本示例在活动演示文稿中第一张幻灯片的第一个图表的绘图区的内部绘制一个点式矩形。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart == msoTrue) {
        let plotArea = shape.Chart.PlotArea
        let shape2 = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, plotArea.InsideLeft, plotArea.InsideTop, plotArea.InsideWidth, plotArea.InsideHeight)
        shape2.Fill.Transparency = 1
        shape2.Line.DashStyle = msoLineDashDot
    }
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表边缘到绘图区左内边缘的距离。*/
function test() {
    let plotArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.InsideLeft += 5
}
```
