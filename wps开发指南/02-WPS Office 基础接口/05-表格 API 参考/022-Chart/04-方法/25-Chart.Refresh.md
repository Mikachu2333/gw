# Chart.Refresh

立即重新绘制指定的图表。



## 语法

express.**Refresh()**

express   一个代表 **Chart** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例以工作表 Sheet1 区域B1:D3中用户给定的数据为数据源，在图表工作表 Chart1 中重新绘制图表。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.SetSourceData(Sheets.Item("Sheet1").Range("B1:D3"), xlColumns)
    chart.Refresh()
}
```


```JavaScript
/*本示例激活工作表Sheet1，并为区域A1:A4单元格分别赋值，然后以该区域为数据源区域重新绘制第一张内嵌图表。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Range("A1").Value2 = 20
    Range("A2").Value2 = 30
    Range("A3").Value2 = 35
    Range("A4").Value2 = 15
    let chart = ActiveSheet.ChartObjects(1).Chart
    chart.SetSourceData(ActiveSheet.Range("A1:A4"))
    chart.Refresh()
}
```
