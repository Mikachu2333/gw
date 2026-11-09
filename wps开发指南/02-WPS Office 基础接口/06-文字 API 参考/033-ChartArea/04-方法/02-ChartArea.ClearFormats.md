# ChartArea.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **ChartArea** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动文档中第一个图表的图表区域的格式设置。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartArea.ClearFormats()
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表的标题为“成绩表”，则清除该图表的图表区的格式设置。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.ChartTitle.Text == "成绩表") {
        chart.ChartArea.ClearFormats()
    }
}
```
