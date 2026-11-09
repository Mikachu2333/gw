# Point.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Point** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一个图表中第一个系列的第三个数据点的前景填充色和边框线粗细。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    point.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    point.Format.Line.Weight = 5
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个系列的第二个数据点的填充类型是否为msoFillSolid。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(2)
    alert(point.Format.Fill.Type == msoFillSolid)
}
```
