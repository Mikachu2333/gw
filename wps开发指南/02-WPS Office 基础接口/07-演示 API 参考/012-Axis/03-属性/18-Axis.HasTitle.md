# Axis.HasTitle

如果坐标轴或图表有可见标题，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasTitle**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


坐标轴标题由 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/obj)** 对象代表。



## 示例


```JavaScript
/*此示例为活动演示文稿的第一张幻灯片中第一张图表的分类轴添加坐标轴标签。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Text = "July Sales"
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第二个图表的数值轴的标题设置为不可见。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    axis.HasTitle = false
}
```
