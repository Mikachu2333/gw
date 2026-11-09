# Chart.Location

将图表移动到新位置。



## 语法

express.**Location(Where, Name)**

express   一个代表 **Chart** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Where | 必选 | XlChartLocation | 图表移动的目标位置。 |
| Name | 可选 | any | 如果 Where 为 xlLocationAsObject，则该参数为必选参数。如果 Where 为 xlLocationAsObject，则该参数为嵌入该图表的工作表的名称。如果 Where 为 xlLocationAsNewSheet，则该参数为新工作表的名称。 |

## 返回值

位于新位置的新图表。请注意，Location 方法删除旧图表，并在新位置创建一个新图表。 因此，旧图表失效，并且对它的后续操作定义不明确。

## 示例


```JavaScript
/*本示例将第二张工作表第一张嵌入图表移至新图表工作表“Monthly Sales”。*/
function test() {
    let chart = Application.Worksheets.Item(2).ChartObjects(1).Chart
    chart.Location(xlLocationAsNewSheet, "Monthly Sales")
}
```


```JavaScript
/*本示例将图表工作表Chart1嵌入已有的工作表Sheet1中。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.Location(xlLocationAsObject, "Sheet1")
}
```
