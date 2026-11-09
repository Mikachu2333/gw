# Application.DisplayFunctionToolTips

如果可以显示函数的 “工具提示”，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayFunctionToolTips**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*在本示例中，ET 将显示函数的“工具提示”的状态通知用户。*/
function test() {
    //通知用户能否显示函数工具提示。
    if (Application.DisplayFunctionToolTips) {
        MsgBox("显示函数工具提示的功能已打开。")
    } else {
        MsgBox("显示函数工具提示的功能已关闭。")
    }
}
```


```JavaScript
/*本示例演示DisplayFunctionToolTips的数据类型，当提示框关闭后将DisplayFunctionToolTips属性设置为false。*/
function test() {
    alert("DisplayFunctionToolTips 属性的数据类型为：" + typeof Application.DisplayFunctionToolTips)
    Application.DisplayFunctionToolTips = false
}
```
