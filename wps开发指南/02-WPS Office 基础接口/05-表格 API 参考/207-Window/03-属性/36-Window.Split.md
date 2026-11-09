# Window.Split

如果指定窗口被拆分，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Split**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 说明


 **[FreezePanes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/FreezePanes)** 可能为 **True** ， **Split** 可能为 **False** ，反之亦然。

该属性仅应用于工作表和宏工作表。



## 示例


```JavaScript
/*本示例在 工作簿1 中活动窗口的 B2 单元格处拆分此窗口，但不冻结窗格。 此拆分使 Split 属性返回 True。*/
function test() {
    Workbooks.Item("工作簿1").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.SplitColumn = 2
    ActiveWindow.SplitRow = 2
    alert(ActiveWindow.Split)
}
```


```JavaScript
/*本示例示范了两种取消由上一示例所进行的拆分的方法。*/
function test() {
    Workbooks.Item("工作簿1").Worksheets.Item("Sheet1").Activate()
    //method one
    ActiveWindow.Split = false

    Workbooks.Item("工作簿1").Worksheets.Item("Sheet1").Activate()
    //method two
    ActiveWindow.SplitColumn = 0
    ActiveWindow.SplitRow = 0
}
```


```JavaScript
/*本示例取消指定的窗口拆分。 在取消窗口拆分之前，需先将 FreezePanes 属性设为 False，以便取消冻结窗格。*/
function test() {
    Workbooks.Item("工作簿1").Worksheets.Item("Sheet1").Activate()
    ActiveWindow.FreezePanes = false
    ActiveWindow.Split = false
}
```
