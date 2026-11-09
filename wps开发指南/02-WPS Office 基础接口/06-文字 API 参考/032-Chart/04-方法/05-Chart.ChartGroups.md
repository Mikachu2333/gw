# Chart.ChartGroups

返回代表单个图表组或所有图表组集合的某个对象。



## 语法

express.**ChartGroups(Index)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 图表组编号。如果指定该参数，则返回单个 **ChartGroup** 对象。如果省略该参数，则返回一个 **ChartGroups** 对象，其中包含该图表的每个 **ChartGroup** 对象的集合。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例显示活动文档的第一个图表组的涨跌柱线，并对其颜色进行设置。本示例应在包含两个有一个或多个交叉数据点的系列的二维折线图上运行。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    chartGroup.HasUpDownBars = true
    chartGroup.DownBars.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
    chartGroup.UpBars.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例为活动文档的第一个图表组添加垂直线。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    chartGroup.HasDropLines = true
}
```
