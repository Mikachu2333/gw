# Chart.HasTitle

如果坐标轴或图表有可见标题，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasTitle**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


图表标题由 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/obj)** 对象代表。



## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片中第一个图表有可见标题，则显示第一张图表的标题文本。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    if (chart.HasTitle) {
        alert(chart.ChartTitle.Text)
    }
}
```


```JavaScript
/*本示例遍历第一个演示文稿的第一张幻灯片内所有图表，判断如果图表标题为“test”，则删除该图表。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        if (shapes.Item(i).HasChart) {
            let chart = shapes.Item(i).Chart
            if (chart.HasTitle && chart.ChartTitle.Text == "test") {
                chart.Delete()
            }
        }
    }
}
```
