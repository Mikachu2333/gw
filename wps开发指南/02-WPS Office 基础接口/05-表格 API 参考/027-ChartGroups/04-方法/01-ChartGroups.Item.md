# ChartGroups.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ChartGroups** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的索引号。 |

## 返回值

ChartGroup

## 示例


```JavaScript
/*此示例为图表工作表 Chart1 中的第一个图表组添加垂直线。*/
function test() {
    let chartgroups = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups()
    chartgroups.Item(1).HasDropLines = true
}
```


```JavaScript
/*本示例将工作表 Sheet1 第一个内嵌图表中第一个图表组中的列簇间距设置为 250 。*/
function test() {
    let chartgroups = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups()
    chartgroups.Item(1).GapWidth = 250
}
```
