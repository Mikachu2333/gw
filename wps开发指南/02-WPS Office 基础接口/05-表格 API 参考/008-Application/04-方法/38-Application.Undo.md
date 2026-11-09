# Application.Undo

撤消最后一次用户界面操作。



## 语法

express.**Undo()**

express   一个代表 **Application** 对象的变量。

## 返回值

void

## 说明


本方法仅撤消运行该宏之前的最后一个用户操作，并且必须将其放到宏的第一行。本方法不能用于撤消 JavaScript 命令。



## 示例


```JavaScript
/*本示例撤消最后一次用户界面操作。本示例必须放在宏的第一行。*/
function test() {
    Application.Undo()
}
```


```JavaScript
/*本示例撤消最后一次用户界面操作，然后显示活动工作簿的名称。*/
function test() {
    Application.Undo()
    alert(ActiveWorkbook.Name)
}
```
