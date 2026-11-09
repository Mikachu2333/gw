# ChartGroup.CategoryCollection

返回一个对象，该对象表示图表组中 CategoryCollection 集合 (所有可见类别的集合) 。



## 语法

express.**CategoryCollection(Index)**

express   一个代表 **ChartGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 类别的名称或编号。 |

## 返回值

Object

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组的第三个类别是否筛选出序列。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.CategoryCollection(3).IsFiltered)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 第一个图表组类别的数量是否为 4 。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.CategoryCollection().Count == 4)
}
```
