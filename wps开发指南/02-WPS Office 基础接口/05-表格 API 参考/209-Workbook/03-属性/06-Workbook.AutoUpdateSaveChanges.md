# Workbook.AutoUpdateSaveChanges

如果共享工作簿自动更新时，对其所做的更改将传送到其他用户，则该值为 **True** 。如果不传送所做的更改（该工作簿还须与其他用户所做的更改保持同步），则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AutoUpdateSaveChanges**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


必须将 **[AutoUpdateFrequency](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/AutoUpdateFrequency)** 属性设置为从 5 至 1440 的值，才能使该属性起作用。



## 示例


```JavaScript
/*本示例演示如果是共享工作簿，使其自动更新时将对其所做的更改传送到其他用户。*/
function test() {
    if (ActiveWorkbook.MultiUserEditing) {
        ActiveWorkbook.AutoUpdateSaveChanges = true
    }
}
```


```JavaScript
/*本示例演示将活动工作簿另存为共享工作簿，并设置每五分钟自动更新一次将对其所做的更改传送到其他用户。*/
function test() {
    ActiveWorkbook.SaveAs(ActiveWorkbook.FullName, undefined, undefined, undefined, undefined, undefined, xlShared)
    ActiveWorkbook.AutoUpdateFrequency = 5
    ActiveWorkbook.AutoUpdateSaveChanges = true
}
```
