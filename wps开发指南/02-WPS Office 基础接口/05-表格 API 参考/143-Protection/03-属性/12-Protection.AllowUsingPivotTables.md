# Protection.AllowUsingPivotTables

如果允许用户在受保护的工作表上处理数据透视表，则返回 **True** 。 **Boolean** 类型，只读。



## 语法

express.**AllowUsingPivotTables**

express   一个代表 **Protection** 对象的变量。

## 类型

boolean

## 说明


 **AllowUsingPivotTables** 属性应用于非 OLAP 源数据。

可以使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法参数设置 **AllowUsingPivotTables** 属性。



## 示例


```JavaScript
/*本示例允许用户访问数据透视表并通知用户。本示例假定非 OLAP 数据透视表位于活动的工作表上。*/
function test() {
    Application.ActiveSheet.Unprotect()
    // Allow pivot tables to be manipulated on a protected worksheet.
    if (Application.ActiveSheet.Protection.AllowUsingPivotTables == false) {
        Application.ActiveSheet.Protect(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, true)
    }
    alert("Pivot tables can be manipulated on the protected worksheet.")
}
```


```JavaScript
/*本示例显示是否允许在受保护的第二张工作表上处理数据透视表。*/
function test() {
    alert(Worksheets.Item(2).Protection.AllowUsingPivotTables)
}
```
