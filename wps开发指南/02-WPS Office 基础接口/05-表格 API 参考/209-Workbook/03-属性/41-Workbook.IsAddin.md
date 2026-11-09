# Workbook.IsAddin

如果指定工作簿作为加载宏运行，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IsAddin**

express   一个代表 **Workbook** 对象的变量。

## 类型

boolean

## 说明


如果将该属性设置为 **True** ，则指定工作簿将具有下列特征：

* 如果打开该工作簿时发生了更改，将不提示保存该工作簿。
* 工作簿窗口不可见。
* 该工作簿中的任何宏都不在“宏”对话框中显示（指向“工具”菜单中的“宏”项，并单击“宏”命令可显示该对话框）。
* 尽管该工作簿中的宏在“宏”对话框中不可见，仍然可以通过“宏”对话框运行该工作簿中的宏。另外，宏名无须使用工作簿名称进行标识。
* 在打开工作簿时按住 Shift 键不起作用。



## 示例


```JavaScript
/*本示例检查活动工作簿是否为加载宏，如果是则运行选定的代码。*/
function test() {
    if (Application.ActiveWorkbook.IsAddin) {
        alert("this code runs when the workbook is an add-in")
    }
}
```


```JavaScript
/*本示例演示通过 IsAddin 属性将活动工作簿改为加载宏，并且该工作簿窗口被隐藏。*/
function test() {
    Application.ActiveWorkbook.IsAddin = true
}
```
