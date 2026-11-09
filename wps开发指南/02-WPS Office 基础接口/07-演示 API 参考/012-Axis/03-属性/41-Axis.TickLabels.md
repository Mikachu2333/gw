# Axis.TickLabels

返回指定坐标轴的刻度线标签。只读 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TickLabels/obj)** 对象。



## 语法

express.**TickLabels**

express   一个代表 **Axis** 对象的变量。

## 类型

TickLabels

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个图表的数值轴刻度线标签的字体设置颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).TickLabels.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例为第一个演示文稿的第一张幻灯片中第二个图表的类别轴刻度线标签的字体设置加粗，并显示该轴各级别标签之间的距离。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlCategory)
    axis.TickLabels.Font.Bold = true
    alert(axis.TickLabels.Offset)
}
```
