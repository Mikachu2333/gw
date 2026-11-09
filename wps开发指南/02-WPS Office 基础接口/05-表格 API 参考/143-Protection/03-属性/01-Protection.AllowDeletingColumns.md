# Protection.AllowDeletingColumns

如果允许删除受保护工作表上的列，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowDeletingColumns**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowDeletingColumns** 属性。

对于受保护的工作表，必须取消对包含要删除的单元格的列的锁定。



## 示例


```JavaScript
/*本示例取消对受保护的工作表上的列 A 的锁定，然后允许用户删除列 A 并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Unlock column A.
    Columns.Item("A:A").Locked = false
    // Allow column A to be deleted on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowDeletingColumns == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, null, null, true)
    }
    alert("Column A can be deleted on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许删除受保护工作表上的列。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowDeletingColumns)
}
```
