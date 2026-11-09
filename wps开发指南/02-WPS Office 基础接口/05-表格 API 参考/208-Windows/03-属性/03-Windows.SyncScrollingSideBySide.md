# Windows.SyncScrollingSideBySide

如果为 **True** ，在对文档进行并排比较的同时启用窗口内容的滚动功能。若为 **False** ，则在对文档进行并排比较的同时禁用窗口内容的滚动功能。



## 语法

express.**SyncScrollingSideBySide**

express   一个代表 **Windows** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在对文档进行并排比较的同时启用窗口内容的滚动功能。*/
function test() {
    Application.Windows.SyncScrollingSideBySide = true
}
```


```JavaScript
/*本示例在对文档进行并排比较的同时禁用窗口内容的滚动功能，并通知用户。*/
function test() {
    Application.Windows.SyncScrollingSideBySide = false
    alert("已关闭窗口内容的滚动功能")
}
```
