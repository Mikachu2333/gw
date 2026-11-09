# FullSeriesCollection.Item

从 **FullSeriesCollection** 对象返回单个对象。



## 语法

express.**Item(Index)**

express   一个代表 **FullSeriesCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

集合中包含的 **Series** 对象。

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 第二个系列设置为红色。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.FullSeriesCollection().Item(2).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例删除工作表 Sheet1 第一个内嵌图表的第三个系列。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.FullSeriesCollection().Item(3).Delete()
}
```
