# Workbook.KeepChangeHistory

如果对共享工作簿启用了修订记录功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**KeepChangeHistory**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例用于设置追踪天数：当共享工作簿的修订记录功能处于打开状态时，为活动工作簿的修订记录功能设置跟踪天数。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing && ActiveWorkbook.KeepChangeHistory) {
        ActiveWorkbook.ChangeHistoryDuration = 7
    }
}
```


```JavaScript
/*本示例演示将活动工作簿另存为共享工作簿，并关闭修订记录功能通知用户。*/
function test() {
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, undefined, undefined, undefined, xlShared)
    ActiveWorkbook.KeepChangeHistory = false
    alert("已关闭修订记录功能")
}
```
