# Chart.ClearToMatchStyle

清除图表元素格式以改为自动格式。



## 语法

express.**ClearToMatchStyle()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 说明


使用此方法将图表元素格式重置为自动格式。如果在图表上使用此方法，则将重置所有格式（包括替代项）。



## 示例


```JavaScript
/*本示例清除第一个文档上第一张图表的元素格式以改为自动格式。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    chart.ClearToMatchStyle()
}
```


```JavaScript
/*本示例清除活动文档上第一张图表的元素格式以改为自动格式。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    chart.ClearToMatchStyle()
}
```
