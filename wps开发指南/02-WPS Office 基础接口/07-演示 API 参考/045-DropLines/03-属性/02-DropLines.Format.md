# DropLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 对象。



## 语法

express.**Format**

express   一个代表 **DropLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的垂直线的线条样式设置为点划线。*/
function test() {
    let dropLines = ActivePresentation.Slides.Item(1).Shapes(1).Chart.ChartGroups(1).DropLines
    dropLines.Format.Line.DashStyle = msoLineDashDot
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的垂直线的线条粗细。*/
function test() {
    let dropLines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DropLines
    alert(dropLines.Format.Line.Weight + " 磅")
}
```
