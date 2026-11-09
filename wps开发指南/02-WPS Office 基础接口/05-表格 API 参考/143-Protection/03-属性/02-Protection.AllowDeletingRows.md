# Protection.AllowDeletingRows

如果允许删除受保护工作表上的行，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowDeletingRows**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **[AllowDeletingRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/member/AllowDeletingRows)** 属性。

对于受保护的工作表，必须取消对包含要删除的单元格的行的锁定。



## 示例


```JavaScript
/*本示例取消对受保护的工作表上的第 1 行的锁定，然后允许用户删除第 1 行并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Unlock row 1.
    Rows.Item("1:1").Locked = false
    // Allow row 1 to be deleted on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowDeletingRows == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, null, null, null, true)
    }
    alert("Row 1 can be deleted on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许删除受保护工作表上的行。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowDeletingRows)
}
```
