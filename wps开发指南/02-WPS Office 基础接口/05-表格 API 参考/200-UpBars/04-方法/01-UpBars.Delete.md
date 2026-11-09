# UpBars.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **UpBars** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例删除工作表 Sheet1 中第一个图表的第一个图表组的涨跌柱线。*/
function test() {
    let upbars = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    upbars.Delete()
}
```


```JavaScript
/*本示例删除图表工作表 Chart1 中图表的第一个图表组的涨跌柱线。*/
function test() {
    let upbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).UpBars
    upbars.Delete()
}
```
