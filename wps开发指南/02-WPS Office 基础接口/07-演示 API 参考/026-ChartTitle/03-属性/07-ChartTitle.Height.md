# ChartTitle.Height

返回或设置一个 **Double** 值，该值代表对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的标题文本，并显示该标题的高度。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "example"
    alert(`图表标题的高度为：${chart.ChartTitle.Height} 磅`)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则显示该标题的高度。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "test") {
        alert(chartTitle.Height)
    }
}
```
