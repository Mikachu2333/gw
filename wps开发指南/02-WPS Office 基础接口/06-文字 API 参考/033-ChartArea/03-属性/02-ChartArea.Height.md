# ChartArea.Height

以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个图表的图表区的高度。*/
function test() {
    let chartArea = ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    alert(`图表区的高度：${chartArea.Height} 磅`)
}
```


```JavaScript
/*本示例将第一个文档上第一张图表的图表区的高度设置为260磅。*/
function test() {
    let chartArea = Application.Documents.Item(1).InlineShapes(1).Chart.ChartArea
    chartArea.Height = 260
}
```
