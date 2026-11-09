# ChartTitle.Text

返回或设置指定对象中的文本。 **String** 型，可读写。



## 语法

express.**Text**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*此示例设置图表工作表 Chart1 的图表标题文本。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "First Quarter Sales"
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 的标题文本是否为“成绩表”。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.ChartTitle.Text == "成绩表")
}
```
