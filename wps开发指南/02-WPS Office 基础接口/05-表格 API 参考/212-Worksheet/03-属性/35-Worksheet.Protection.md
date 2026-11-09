# Worksheet.Protection

返回一个 [Protection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/obj) 对象，该对象表示工作表的保护选项。



## 语法

express.**Protection**

express   一个代表 **Worksheet** 对象的变量。

## 类型

Protection

## 示例


```JavaScript
/*本示例对活动工作表进行保护，并判断是否能在受保护的工作表中插入列，然后将此状态通知用户。*/
function test() {
    Application.ActiveSheet.Protect()
    // Check the ability to insert columns on a protected sheet.
    // Notify the user of this status.
    if (Application.ActiveSheet.Protection.AllowInsertingColumns == true) {
        alert("The insertion of columns is allowed on this protected worksheet.")
    } else {
        alert("The insertion of columns is not allowed on this protected worksheet.")
    }
}
```


```JavaScript
/*本示例允许用户对受保护的工作表 Sheet1 上的单元格进行格式设置，并通知用户。*/
function test() {
    Worksheets.Item("Sheet1").Protect(null, null, null, null, null, true)
    if (Worksheets.Item("Sheet1").Protection.AllowFormattingCells) {
        alert("可以在此受保护的工作表 Sheet1 上设置单元格的格式。")
    } else {
        alert("不能在此受保护的工作表 Sheet1 上设置单元格的格式。")
    }
}
```
