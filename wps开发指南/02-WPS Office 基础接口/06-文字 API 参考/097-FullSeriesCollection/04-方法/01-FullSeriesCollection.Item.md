# FullSeriesCollection.Item

从集合中返回单个完整系列项。



## 语法

express.**Item(Index)**

express   一个代表 **FullSeriesCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 名称或要返回的项的索引号。 |

## 返回值

Series

## 示例


```JavaScript
/*本示例将活动文档上第一个图表的第二个系列的类型设置为 xlLine。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    chart.FullSeriesCollection().Item(2).ChartType = xlLine
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第一个系列的前景填充色设置为红色。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    chart.FullSeriesCollection().Item(1).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
