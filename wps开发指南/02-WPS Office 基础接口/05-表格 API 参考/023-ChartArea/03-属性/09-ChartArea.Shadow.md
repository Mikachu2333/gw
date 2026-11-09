# ChartArea.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **ChartArea** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 的图表区设置为有阴影。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Shadow = true
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一个内嵌图表的图表区是否有阴影。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    alert(chartarea.Shadow)
}
```
