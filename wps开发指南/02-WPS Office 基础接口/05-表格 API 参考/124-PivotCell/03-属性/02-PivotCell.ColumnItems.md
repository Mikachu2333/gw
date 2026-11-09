# PivotCell.ColumnItems

返回一个 **PivotItemList** 集合，该集合对应于表示选定区域的列轴上的项目。



## 语法

express.**ColumnItems**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotItemList

## 示例


```JavaScript
/*本示例判断单元格 J5 中的数据项是否在列字段“name”之下，并通知用户。本示例假定数据透视表位于活动工作表上，并且第 J 列包含数据透视表的列字段。*/
function test() {
    // Determine if there is a match between the item and column field.
    if (Application.Range("J5").PivotCell.ColumnItems.Item(1).Parent.Name == "name") {
        alert("Item in J5 is a member of the 'name' column field.")
    } else {
        alert("Item in J5 is not a member of the 'name' column field.")
    }
}
```


```JavaScript
/*本示例显示包含活动单元格的数据透视表项列轴上第二个数据项的位置。*/
function test() {
    alert(ActiveCell.PivotCell.ColumnItems.Item(2).Position)
}
```
