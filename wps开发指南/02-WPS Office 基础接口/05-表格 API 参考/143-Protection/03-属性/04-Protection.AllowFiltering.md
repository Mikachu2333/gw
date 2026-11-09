# Protection.AllowFiltering

如果允许用户使用工作表受保护之前设置的“自动筛选”，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowFiltering**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowFiltering** 属性。

 **AllowFiltering** 属性允许用户更改已有的“自动筛选”上的筛选条件。用户不能创建或删除受保护的工作表上的“自动筛选”。

若要筛选受保护的工作表上的单元格，则必须先取消对这些单元格的锁定。



## 示例


```JavaScript
/*本示例允许用户筛选受保护的工作表上的第 1 行并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Unlock row 1.
    Rows.Item("1:1").Locked = false
    // Allow row 1 to be filtered on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowFiltering == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, null, null, null, null, null, true)
    }
    alert("Row 1 can be filtered on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许用户使用工作表受保护之前设置的“自动筛选”。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowFiltering)
}
```
