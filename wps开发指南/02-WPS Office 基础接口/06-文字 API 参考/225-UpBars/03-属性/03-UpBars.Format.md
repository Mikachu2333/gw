# UpBars.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **UpBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档上第一个形状中图表的第一个图表组的涨柱线的前景色设置为绿色。*/
function test() {
    let upbars = Application.ActiveDocument.Shapes.Item(1).Chart.ChartGroups(1).UpBars
    upbars.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将第一个文档中第一个内嵌图表的第一个图表组的涨柱线的线条设置为点划线。*/
function test() {
    let upbars = Application.Documents.Item(1).InlineShapes(1).Chart.ChartGroups(1).UpBars
    upbars.Format.Line.DashStyle = msoLineDashDot
}
```
