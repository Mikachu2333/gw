# Axis.AxisTitle

返回指定坐标轴的标题。只读 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/obj)** 对象。



## 语法

express.**AxisTitle**

express   一个代表 **Axis** 对象的变量。

## 类型

AxisTitle

## 示例


```JavaScript
/*本示例将坐标轴标签添加到活动演示文稿中第一张幻灯片的第一个图表的分类轴。*/
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
/*本示例设置第一篇演示文稿的第一张幻灯片的第二个图表的数值轴的标题文本和标题字号。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    axis.HasTitle = true
    axis.AxisTitle.Text = "test"
    axis.AxisTitle.Font.Size = 20
}
```
