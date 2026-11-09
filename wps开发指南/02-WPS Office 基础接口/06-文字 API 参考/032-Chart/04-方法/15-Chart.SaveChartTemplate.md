# Chart.SaveChartTemplate

向可用图表模板的列表中添加自定义图表模板。



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
/*本示例基于活动文档的第一个图表添加新图表模板。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SaveChartTemplate("Presentation Chart")
    }
}
```


```JavaScript
/*本示例将活动文档的第一个图表的标题设置为不可见，并基于该图表添加新图表模板。*/
function test() {
    let chart = ActiveDocument.InlineShapes(1).Chart
    chart.HasTitle = false
    chart.SaveChartTemplate("example")
}
```
