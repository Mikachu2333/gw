# ChartTitle.Caption

返回或设置表示图表标题文本的 **String** 值。



## 语法

express.**Caption**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 的标题设置为可见，并将标题文本设置为“成绩表”。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Caption = "成绩表"
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一个图表的标题文本是否为“信息表”。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    alert(charttitle.Caption == "信息表")
}
```
