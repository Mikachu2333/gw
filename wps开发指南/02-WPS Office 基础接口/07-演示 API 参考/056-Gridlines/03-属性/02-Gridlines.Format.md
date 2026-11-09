# Gridlines.Format

返回对象的线条，填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 对象。



## 语法

express.**Format**

express   一个代表 **Gridlines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一张图表的数值轴拥有主要网格线，则将其线条粗细设置为 3 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Format.Line.Weight = 3
        }
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的类别轴的次要网格线的阴影的透明度。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Format.Shadow.Transparency)
}
```
