# AxisTitle.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中图表的数值轴标题对象的名称。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).AxisTitle
    alert(axistitle.Name)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张图表的分类轴标题对象的名称。*/
function test() {
    let axistitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    alert(axistitle.Name)
}
```
