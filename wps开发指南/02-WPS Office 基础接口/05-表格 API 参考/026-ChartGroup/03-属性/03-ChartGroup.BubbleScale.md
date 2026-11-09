# ChartGroup.BubbleScale

返回或设置指定图表组中气泡的缩放比例。可为从 0（零）到 300 之间的整数，表示相对于默认大小的百分率。仅适用于气泡图。 **Long** 类型，可读写。



## 语法

express.**BubbleScale**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中第一个内嵌图表中第一个图表组中的气泡大小设置为默认大小的 200%。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.BubbleScale = 200
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 第一个图表组中的气泡缩放比例。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.BubbleScale)
}
```
