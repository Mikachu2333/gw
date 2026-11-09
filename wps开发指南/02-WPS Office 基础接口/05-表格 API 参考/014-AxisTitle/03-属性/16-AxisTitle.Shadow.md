# AxisTitle.Shadow

返回或设置一个 **Boolean** 值，它确定对象是否有阴影。



## 语法

express.**Shadow**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例关闭图表工作表 Chart1 中图表的类别轴标题的阴影。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Shadow = false
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一张图表的数值轴标题设置为有阴影。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    axistitle.Shadow = true
}
```
