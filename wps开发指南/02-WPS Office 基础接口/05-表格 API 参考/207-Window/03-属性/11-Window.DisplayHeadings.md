# Window.DisplayHeadings

如果同时显示行标题和列标题，则为 **True** ；如果未显示标题，则为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayHeadings**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于工作表和宏工作表。

此属性仅影响显示的标题。使用 **[PrintHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/member/PrintHeadings)** 属性可以控制标题的打印。



## 示例


```JavaScript
/*本示例隐藏Book1.xls活动窗口中的行列标题。*/
function test() {
    Application.Workbooks.Item("BOOK1.xls").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.DisplayHeadings = false
}
```


```JavaScript
/*本示例演示 DisplayHeadings 属性的数据类型，并将 DisplayHeadings 属性的值设置为true。*/
function test() {
    alert("DisplayHeadings属性的数据类型为：" + typeof ActiveWindow.DisplayHeadings)
    Windows.Item.DisplayHeadings = true
}
```
