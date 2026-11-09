# Chart.SaveChartTemplate

将自定义图表模板保存到可用图表模板的列表中。



## 语法

express.**SaveChartTemplate(FileName)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图表模板的名称。 |

## 返回值

void

## 说明


默认情况下，此方法将活动图表保存到用户的图表模板库中。如果指定了 UNC 或 URL，则图表将保存到指定位置。



## 示例


```JavaScript
/*本示例基于活动演示文稿的第一张幻灯片的第一个图表添加新图表模板。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SaveChartTemplate("Presentation Chart")
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片的第二个图表的标题设置为不可见，并基于该图表添加新图表模板。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.HasTitle = false
    chart.SaveChartTemplate("example")
}
```
