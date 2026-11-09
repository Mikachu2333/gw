# ChartGroup.CategoryCollection

返回图表组中的所有可见类别或指定的可见类别。



## 语法

express.**CategoryCollection(Index)**

express   一个代表 **ChartGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要返回的类别的可见类别集合中的索引号。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表中第一个图表组的第一个可见类别是否筛选出序列。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection(1).IsFiltered)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中的图表的第一个图表组的可见类别的数量。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection().Count)
}
```
