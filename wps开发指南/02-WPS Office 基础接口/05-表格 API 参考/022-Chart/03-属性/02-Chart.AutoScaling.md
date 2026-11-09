# Chart.AutoScaling

如果 ET 对三维图表进行缩放，使之与等效的二维图表的大小相近，则该属性值为 **True** 。 **[RightAngleAxes](#TODO)** 属性必须为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoScaling**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例自动对图表工作表Chart1 进行缩放。本示例应在三维图表上运行。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.AutoScaling = true
}
```


```JavaScript
/*本示例关闭对 Sheet1 工作表第一个内嵌图表的自动缩放。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.AutoScaling = false
}
```
