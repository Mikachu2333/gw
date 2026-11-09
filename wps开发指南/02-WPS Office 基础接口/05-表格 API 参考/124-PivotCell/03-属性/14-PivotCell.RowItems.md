# PivotCell.RowItems

返回一个 **PivotItemList** 集合，该集合对应于分类轴上表示选定单元格的项目。



## 语法

express.**RowItems**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotItemList

## 示例


```JavaScript
/*本示例判断单元格 L9 中的数据项是否在第一个行字段中的“name”项之下，并通知用户。本示例假定数据透视表位于活动工作表上，并且工作表的列 L 包含数据透视表的行项目。*/
function test() {
    // Determine if there is a match between the item and column field.
    if (Application.Range("L9").PivotCell.RowItems.Item(1).Parent.Name == "name") {
        alert("Cell L9 is a member of the 'name' row field.")
    } else {
        alert("Cell L9 is not a member of the 'name' row field.")
    }
}
```


```JavaScript
/*本示例显示包含活动单元格的数据透视项行轴上第二个数据项的值。*/
function test() {
    alert(ActiveCell.PivotCell.RowItems.Item(2).Value)
}
```
