# Chart.Refresh

立即重新绘制指定的图表。



## 语法

express.**Refresh()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将重新绘制活动文档上第一个图表。*/
function test() {
    ActiveDocument.InlineShapes(1).Chart.Refresh()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一张图表的标题为“成绩表”，则重新绘制该图表。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    if (chart.ChartTitle.Text == "成绩表") {
        chart.Refresh()
    }
}
```
