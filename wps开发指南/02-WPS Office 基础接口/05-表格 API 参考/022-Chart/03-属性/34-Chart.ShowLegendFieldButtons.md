# Chart.ShowLegendFieldButtons

返回或设置是否要在数据透视图上显示图例字段按钮。可读/写。



## 语法

express.**ShowLegendFieldButtons**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


将 **ShowLegendFieldButtons** 属性设置为 **True** 将在指定的数据透视图上显示图例字段按钮。将该属性设置为 **False** 将隐藏这些按钮。

 **ShowLegendFieldButtons** 属性对应于 **“分析”** 选项卡（在选择数据透视图时可用）的 **“字段按钮”** 下拉列表中的 **“显示图例字段按钮”** 命令。



## 示例


```JavaScript
/*本示例将图表工作表 Chart 1 设置为显示图例字段按钮。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.ShowLegendFieldButtons = true
}
```


```JavaScript
/*本示例显示工作表 Sheet2 中第一个内嵌图表是否显示图例字段按钮。*/
function test() {
    let chart = Application.Sheets.Item("Sheet2").ChartObjects(1).Chart
    alert(chart.ShowLegendFieldButtons)
}
```
