# Series.ErrorBars

返回一个 **ErrorBars** 对象，该对象表示数据系列中的误差线。只读。



## 语法

express.**ErrorBars**

express   一个代表 **Series** 对象的变量。

## 类型

ErrorBars

## 示例


```JavaScript
/*本示例对 Chart1 中第一个系列的误差线颜色进行设置。本示例应在其第一个系列有误差线的二维折线图上运行。*/
function test() {
    let Ser = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    Ser.ErrorBars.Border.ColorIndex = 8
}
```


```JavaScript
/*此示例显示活动工作表中的第一个数据系列的误差线名称。*/
function test() {
    alert(ActiveSheet.ChartObjects(1).Chart.SeriesCollection(1).ErrorBars.Name)
}
```
