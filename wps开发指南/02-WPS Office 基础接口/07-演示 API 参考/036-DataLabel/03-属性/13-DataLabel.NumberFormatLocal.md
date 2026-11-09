# DataLabel.NumberFormatLocal

以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。



## 语法

express.**NumberFormatLocal**

express   一个代表 **DataLabel** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例以用户语言的字符串形式设置活动演示文稿的第一张幻灯片中第一张图表的第一个系列的第四个数据标签的格式代码。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(1).HasDataLabels = true
    chart.SeriesCollection(1).DataLabels(4).NumberFormatLocal = "0.00"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第一个数据点的数据标签以用户语言的字符串形式表示的格式代码。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(1)
    alert(point.DataLabel.NumberFormatLocal)
}
```
