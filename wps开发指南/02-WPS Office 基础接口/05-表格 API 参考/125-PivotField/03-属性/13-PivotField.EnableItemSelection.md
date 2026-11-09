# PivotField.EnableItemSelection

如果为 **False** ，则在用户界面中禁止使用下拉字段的功能。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableItemSelection**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 说明


如果 OLAP 数据透视表字段不是层次结构中的最高级别，则将出现运行时错误。



## 示例


```JavaScript
/*本示例确定使用下拉字段的选定项目的设置，并且在必要时启用该功能。本示例假定数据透视表位于活动工作表上。*/
function test() {
    let pvtField = ActiveSheet.PivotTables(1).RowFields(1)
    // Determine setting for property and enable if necessary.
    if (pvtField.EnableItemSelection == false) {
        pvtField.EnableItemSelection = true
        alert("Item selection enabled for fields.")
    } else {
        alert("Item selection is already enabled for fields.")
    }
}
```


```JavaScript
/*本示例在用户界面禁止使用工作表 Sheet1 中第一个数据透视表的字段“name”的下拉字段功能*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("name")
    pvtField.EnableItemSelection = false
}
```
