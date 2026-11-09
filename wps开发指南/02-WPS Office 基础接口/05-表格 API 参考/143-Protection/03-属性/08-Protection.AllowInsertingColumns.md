# Protection.AllowInsertingColumns

如果允许在受保护的工作表上插入列，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowInsertingColumns**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


默认情况下，插入的列继承了其左边的列的格式设置，这意味着该列可能包含锁定的单元格。也就是说，用户可能不能删除插入的列。

可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowInsertingColumns** 属性。



## 示例


```JavaScript
/*本示例允许用户在受保护的工作表上插入列，并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()

    // Allow columns to be inserted on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowInsertingColumns == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, true)
    }
    alert("Columns can be inserted on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许在受保护的第二张工作表上插入列。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowInsertingColumns)
}
```
