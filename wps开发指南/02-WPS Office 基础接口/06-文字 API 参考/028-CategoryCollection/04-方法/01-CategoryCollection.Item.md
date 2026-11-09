# CategoryCollection.Item

返回单个图表类别。



## 语法

express.**Item(Index)**

express   一个代表 **CategoryCollection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

ChartCategory

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表中第一个图表组是否筛选出第一个可见类别。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.CategoryCollection().Item(1).IsFiltered)
}
```


```JavaScript
/*本示例筛选出第一个文档上第一个形状中的图表的第一个图表组的第一个可见类别。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.CategoryCollection().Item(1).IsFiltered = true
}
```
