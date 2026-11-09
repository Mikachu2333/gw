# Chart.FullSeriesCollection

返回指定图表或指定序列中所有系列的集合。



## 语法

express.**FullSeriesCollection(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要返回的序列的系列集合中的索引号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第二个系列的类型设置为xlLine。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.FullSeriesCollection(2).ChartType = xlLine
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片的第一张图表的第一个系列的前景填充色设置为红色。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart
    chart.FullSeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
