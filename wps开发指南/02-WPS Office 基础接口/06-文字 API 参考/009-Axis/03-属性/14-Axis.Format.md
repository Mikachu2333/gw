# Axis.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Axis** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档中第一张图表的数值轴的背景填充色设置为蓝色。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue)
    axis.Format.Fill.BackColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例将第一个文档中第一张图表类别轴的线条宽度设置为3磅。*/
function test() {
    let axis = Documents.Item(1).InlineShapes.Item(1).Chart.Axes(xlCategory)
    axis.Format.Line.Weight = 3
}
```
