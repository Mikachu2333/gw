# DataTable.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **DataTable** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的模拟运算表的前景色。*/
function test() {
    let datatable = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.DataTable
    datatable.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的模拟运算表的线条设置为点划线。*/
function test() {
    let dataTable = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.DataTable
    dataTable.Format.Line.DashStyle = msoLineDashDot
}
```
