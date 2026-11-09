# Axis.AxisTitle

返回指定坐标轴的标题。只读 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/obj)** 对象。



## 语法

express.**AxisTitle**

express   一个代表 **Axis** 对象的变量。

## 类型

AxisTitle

## 示例


```JavaScript
/*本示例设置活动文档上第一张内嵌图表的分类轴的标题文本。*/
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
/*本示例设置第一个文档上第一个形状中图表的数值轴的标题文本和标题字号。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    axis.AxisTitle.Text = "example"
    axis.AxisTitle.Font.Size = 10
}
```
