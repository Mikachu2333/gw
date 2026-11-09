# PivotField.DataType

返回一个 **XlPivotFieldDataType** 值，它代表数据透视表字段中的数据类型。



## 语法

express.**DataType**

express   一个代表 **PivotField** 对象的变量。

## 类型

XlPivotFieldDataType

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表的字段“name”的数据类型。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I1").PivotTable
    switch (pvtTable.PivotFields("name").DataType) {
        case xlText:
            MsgBox("The field contains text data")
            break
        case xlNumber:
            MsgBox("The field contains numeric data")
            break
        case xlDate:
            MsgBox("The field contains date data")
    }
}
```


```JavaScript
/*本示例显示活动工作表中第一个数据透视表的字段“grades”的数据类型是否为“xlNumber”。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("grades").DataType == xlNumber)
}
```
