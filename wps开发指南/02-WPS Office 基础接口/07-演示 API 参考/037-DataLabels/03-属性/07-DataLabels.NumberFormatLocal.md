# DataLabels.NumberFormatLocal

以用户语言返回或设置对象的格式代码字符串。可读/写 **Variant** 类型。



## 语法

express.**NumberFormatLocal**

express   一个代表 **DataLabels** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabels/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例设置以用户语言的字符串形式表示的活动演示文稿的第一张幻灯片中第一张图表的第一个数据系列的数据标签的格式代码。*/
function test() {
    let dataLabels = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.NumberFormatLocal = "0%"
}
```


```JavaScript
/*本示例显示以用户语言的字符串形式表示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的数据标签的格式。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(`数据标签的格式代码：${dataLabels.NumberFormatLocal}`)
}
```
