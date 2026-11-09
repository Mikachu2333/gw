# Chart.ApplyChartTemplate

将标准图表类型或自定义图表类型应用于图表。



## 语法

express.**ApplyChartTemplate(FileName)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 图表模板的文件名。 |

## 返回值

void

## 说明


此方法不支持采用原图表或组合图的常量。



## 示例


```JavaScript
/*本示例将自定义图表类型应用于活动文档上第一张图表。*/
function test() {
    let chart = ActiveDocument.InlineShapes(1).Chart
    chart.ApplyChartTemplate("D:\\example.crtx")
}
```


```JavaScript
/*本示例将自定义图表类型应用于第一个文档上第一张图表，并将图表标题设置为不可见。*/
function test() {
    let chart = Application.Documents.Item(1).InlineShapes(1).Chart
    chart.ApplyChartTemplate("D:\\example.crtx")
    chart.HasTitle = false
}
```
