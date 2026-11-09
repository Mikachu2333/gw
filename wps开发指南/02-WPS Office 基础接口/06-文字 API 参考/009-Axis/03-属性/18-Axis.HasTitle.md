# Axis.HasTitle

如果坐标轴或图表有可见标题，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasTitle**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


坐标轴标题由 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/obj)** 对象代表。



## 示例


```JavaScript
/*此示例为活动文档中的第一张内嵌图表的分类轴添加坐标轴标签。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.HasTitle = true
        axis.AxisTitle.Text = "July Sales"
    }
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的数值轴的标题设置为不可见。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.HasTitle = false
}
```
