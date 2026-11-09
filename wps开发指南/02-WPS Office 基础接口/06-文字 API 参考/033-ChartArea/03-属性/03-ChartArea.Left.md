# ChartArea.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的图表区至左边缘的距离。*/
function test() {
    let chartArea = ActiveDocument.InlineShapes.Item(1).Chart.ChartArea
    alert(chartArea.Left)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中的图表的图表区至左边缘的距离设置为20磅。*/
function test() {
    let chartArea = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Left = 20
}
```
