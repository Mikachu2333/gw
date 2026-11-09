# PivotFilters.Item

根据 **PivotFilters** 集合对象特定元素在集合中的位置返回该特定元素。只读。



## 语法

express.**Item(Index)**

express   一个代表 **PivotFilters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 指定集合的元素的位置。 |

## 返回值

PivotFilter

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表字段“score”的第一个筛选器应用的筛选器类型是否为“xlCaptionIsGreaterThan”。*/
function test() {
    let pvtFilter = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("score").PivotFilters.Item(1)
    alert(pvtFilter.FilterType == xlCaptionIsGreaterThan)
}
```


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段“id”的第一个筛选器的参数。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id")
    alert(pvtField.PivotFilters.Item(1).Value1)
}
```
