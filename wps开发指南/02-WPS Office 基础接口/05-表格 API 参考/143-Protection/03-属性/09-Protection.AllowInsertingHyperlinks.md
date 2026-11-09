# Protection.AllowInsertingHyperlinks

如果允许在受保护的工作表上插入超链接，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowInsertingHyperlinks**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


在受保护的工作表上，只能将超链接插入未锁定或未保护的单元格中。

可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowInsertingHyperlinks** 属性。



## 示例


```JavaScript
/*本示例允许用户在受保护的工作表上的单元格 A1 中插入超链接，并通知用户。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Unlock cell A1.
    Range("A1").Locked = false
    // Allow hyperlinks to be inserted on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowInsertingHyperlinks == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, null, true)
    }
    alert("Hyperlinks can be inserted on this protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许在受保护的第二张工作表上插入超链接。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowInsertingHyperlinks)
}
```
