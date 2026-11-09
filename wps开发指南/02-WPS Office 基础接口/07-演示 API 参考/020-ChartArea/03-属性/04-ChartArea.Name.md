# ChartArea.Name

返回对象的名称。只读 **String** 类型。



## 语法

express.**Name**

express   一个代表 **ChartArea** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第一个图表的图表区的名称。*/
function test() {
    let chartArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    alert(chartArea.Name)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一张图表的标题为“test”，则显示该图表的图表区的名称。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Text == "test") {
        alert(chart.ChartArea.Name)
    }
}
```
