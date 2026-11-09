# Chart.Title

获取或设置一个代表图表标题的 **String** 。可读/写。



## 语法

express.**Title**

express   一个代表 **Chart** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一张图表的标题。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    alert(chart.Title)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第二张图表的标题设置为“First Quarter Sales”。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.Title = "First Quarter Sales"
}
```
