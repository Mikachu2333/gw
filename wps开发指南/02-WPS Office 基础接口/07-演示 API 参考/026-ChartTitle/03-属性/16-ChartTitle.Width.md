# ChartTitle.Width

返回或设置一个 **Double** 值，该值代表对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一张图表的标题的宽度。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    alert("图表标题的宽度为：" + chart.ChartTitle.Width + "磅")
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则显示该标题的宽度。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "test") {
        alert(chartTitle.Width)
    }
}
```
