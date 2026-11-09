# Protection.AllowFormattingColumns

如果允许对受保护的工作表上的列进行格式设置，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowFormattingColumns**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowFormattingColumns** 属性。



## 示例


```JavaScript
/*本示例允许用户对受保护的工作表上的列进行格式设置，并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Allow columns to be formatted on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowFormattingColumns == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, true)
    }
    alert("Columns can be formatted on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许对受保护的工作表上的列进行格式设置。*/
function test() {
    alert(Worksheets.Item(1).Protection.AllowFormattingColumns)
}
```
