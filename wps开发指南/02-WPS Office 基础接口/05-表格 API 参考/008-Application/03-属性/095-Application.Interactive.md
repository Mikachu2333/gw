# Application.Interactive

如果 ET 处于交互模式，则该属性值为 **True** ；该属性值通常为 **True** 。如果设置该属性为 **False** ，则 ET 将禁止所有的键盘输入和鼠标输入（由代码显示的对话框的输入除外）。 **Boolean** 类型，可读写。



## 语法

express.**Interactive**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


禁止用户输入将使用户不能干预宏移动或者激活 ET 对象。

如果正使用 DDE 或者“OLE 自动化”从其他应用程序和 ET 进行通信，则该属性很有用。

如果将该属性设为 **False** ，记注要将它设回 **True** 。ET 并不会在你的宏停止运行时将它自动设回 **True** 。



## 示例


```JavaScript
/*本示例先将Interactive属性设置为False，并在运行结束时将此属性设回True。这样以防用户干预宏的运行。*/
function test() {
    Application.Interactive = false
    Application.DisplayAlerts = false
    alert("ET 将阻止键盘和鼠标的所有输入")
    // 此处执行的代码不受用户干扰
    Application.DisplayAlerts = true
    Application.Interactive = true
    alert("已切换为交互模式")
}
```


```JavaScript
/*本示例判断如果ET处于交互模式，则通知用户。*/
function test() {
    if (Application.Interactive) {
        alert("ET处于交互模式")
    }
}
```
