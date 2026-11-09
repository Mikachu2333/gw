# ErrorBars.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **ErrorBars** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档上第一个形状中图表的第一个系列的误差线的线条样式设置为点划线。*/
function test() {
    let errorBars = Application.ActiveDocument.Shapes.Item(1).Chart.SeriesCollection(1).ErrorBars
    errorBars.Format.Line.DashStyle = msoLineDashDot
}
```


```JavaScript
/*本示例显示活动文档上第一张图表中第一个系列的误差线的阴影是否可见。*/
function test() {
    let errorBars = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).ErrorBars
    alert(errorBars.Format.Shadow.Visible == msoTrue)
}
```
