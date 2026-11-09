# ChartTitle.Caption

返回或设置图表标题文本。可读/写 **String** 类型。



## 语法

express.**Caption**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的标题设置为可见，并将标题文本设置为“成绩表”。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Caption = "成绩表"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的标题文本。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Caption)
}
```
