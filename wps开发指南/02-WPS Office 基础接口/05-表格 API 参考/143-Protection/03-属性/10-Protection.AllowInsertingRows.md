# Protection.AllowInsertingRows

如果允许用户在受保护的工作表上插入行，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowInsertingRows**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowInsertingRows** 属性。



## 示例


```JavaScript
/*本示例允许用户在受保护的工作表上插入行，并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Allow rows to be inserted on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowInsertingRows == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, true)
    }
    alert("Rows can be inserted on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许在受保护的第二张工作表上插入行。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowInsertingRows)
}
```
