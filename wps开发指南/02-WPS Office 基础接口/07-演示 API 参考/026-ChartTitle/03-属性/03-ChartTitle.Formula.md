# ChartTitle.Formula

使用 A1 样式表示法返回或设置对象的公式。可读写。



## 语法

express.**Formula**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表以 A1 样式表示标题的公式。*/
function test() {
    let chartTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    chartTitle.Formula = "example"
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表使用 A1 样式表示标题的公式。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.Formula)
}
```
