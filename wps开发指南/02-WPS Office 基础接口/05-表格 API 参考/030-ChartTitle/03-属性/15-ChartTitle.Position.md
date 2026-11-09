# ChartTitle.Position

返回或设置图表上图表标题的位置。可读/写 **XlChartElementPosition** 类型。



## 语法

express.**Position**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

XlChartElementPosition

## 示例


```JavaScript
/*本示例将工作表 Sheet1 中图表 Chart 2 的图表标题设置为指定特定位置。*/
function test() {
    let chtitle = Application.Sheets.Item("Sheet1").ChartObjects("Chart 2").Chart.ChartTitle
    chtitle.Position = xlChartElementPositionCustom
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 上图表是否自动设置图表标题的位置。*/
function test() {
    let chtitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartTitle
    alert(chtitle.Position == xlChartElementPositionAutomatic)
}
```
