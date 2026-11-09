# Window.FreezePanes

如果拆分窗格被冻结，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FreezePanes**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


 **FreezePanes** 可能为 **True** ， **[Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Split)** 可能为 **False** ，反之亦然。

该属性仅应用于工作表和宏工作表。



## 示例


```JavaScript
/*本示例冻结 Book1.xls 当前窗口的拆分窗格。*/
function test() {
    Application.Workbooks.Item("BOOK1.xls").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.FreezePanes = true
}
```


```JavaScript
/*本示例演示 FreezePanes 属性的数据类型，并将第一个窗口的 FreezePanes 属性的值设置为false。*/
function test() {
    alert("FreezePanes属性的数据类型为：" + typeof Windows.Item(1).FreezePanes)
    Windows.Item(1).FreezePanes = false
}
```
