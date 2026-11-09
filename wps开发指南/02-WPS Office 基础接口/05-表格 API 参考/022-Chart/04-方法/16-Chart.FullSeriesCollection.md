# Chart.FullSeriesCollection

启用检索 由 Index 参数指定的筛选出序列。



## 语法

express.**FullSeriesCollection(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 筛选出的 Series 对象的索引号。 |

## 返回值

Object

## 说明


除非用户在“选择数据”对话框中启用了“在隐藏行和列中显示数据”选项，否则隐藏行或列中的序列对象不会显示在当前系列集合中。

还可以在引号中使用系列名称：

expression.FullSeriesCollection("系列名称")



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 “系列1”设置为红色。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.FullSeriesCollection("系列1").Format.Fill.ForeColor.RGB = rgbRed
}
```


```JavaScript
/*本示例删除工作表 Sheet1 第一个内嵌图表的第二个系列。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    chart.FullSeriesCollection(2).Delete()
}
```
