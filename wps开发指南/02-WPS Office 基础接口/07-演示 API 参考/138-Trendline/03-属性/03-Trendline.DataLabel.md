# Trendline.DataLabel

返回与趋势线关联的数据标签。只读 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/obj)** 。



## 语法

express.**DataLabel**

express   一个代表 **Trendline** 对象的变量。

## 类型

DataLabel

## 说明


若要为趋势线启用数据标签，需要将 **[DisplayEquation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/member/DisplayEquation)** 属性或 **[DisplayRSquared](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/member/DisplayRSquared)** 属性设置为 **True** 。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第一条趋势线的 R 平方值设置为可见，并设置数据标签的前景填充色。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.DisplayRSquared = true
    trendline.DataLabel.Format.Fill.ForeColor.RGB = RGB(0, 128, 128)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一条趋势线上数据标签的名称。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    alert(trendline.DataLabel.Name)
}
```
