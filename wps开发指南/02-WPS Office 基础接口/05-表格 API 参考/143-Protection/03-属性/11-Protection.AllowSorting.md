# Protection.AllowSorting

如果允许在受保护的工作表上使用排序选项，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowSorting**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


在受保护的工作表中，只能对未锁定或未保护的单元格进行排序。

可以使用 [ **Protect** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect) 方法参数设置 **AllowSorting** 属性。



## 示例


```JavaScript
/*本示例允许用户对受保护的工作表上未锁定或未保护的单元格进行排序，并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Unlock cells A1 through B5.
    Range("A1:B5").Locked = false
    // Allow sorting to be performed on the protected worksheet.
    if (Application.ActiveSheet.Protection.AllowSorting == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, null, null, null, null, true)
    }
    alert("For cells A1 through B5, sorting can be performed on the protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许在受保护的第二张工作表上使用排序选项。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowSorting)
}
```
