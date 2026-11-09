# DataLabel.NumberFormat

返回或设置对象的格式代码。可读/写 **String** 类型。



## 语法

express.**NumberFormat**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 说明


格式代码与 **“设置单元格格式”** 对话框中的 **“格式代码”** 选项是同一个字符串。 **Format** 函数使用的格式代码字符串与 **NumberFormat** 和 **[NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/member/NumberFormatLocal)** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一张图表的第一个系列中第一个数据标签的格式代码。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(1).HasDataLabels = true
    chart.SeriesCollection(1).DataLabels(1).NumberFormat = "0.00"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第三个数据点的数据标签的格式代码。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(`数据标签的格式代码：${point.DataLabel.NumberFormat}`)
}
```
