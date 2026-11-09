# Workbook.ShowPivotTableFieldList

如果该属性值为 **True** （默认），则能显示数据透视表字段列表。 **Boolean** 类型，可读写。



## 语法

express.**ShowPivotTableFieldList**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 判断是否能显示数据透视表字段列表，并通知用户。*/
function test() {
    let wkbOne = Application.ActiveWorkbook
    //Determine PivotTable field list setting.
    if (wkbOne.ShowPivotTableFieldList) {
        MsgBox("The PivotTable field list can be viewed.")
    } else {
        MsgBox("The PivotTable field list cannot be viewed.")
    }
}
```


```JavaScript
/*本示例隐藏数据透视表字段列表，并通知用户。*/
function test() {
    ActiveWorkbook.ShowPivotTableFieldList = false
    alert("已隐藏数据透视表字段列表！")
}
```
