# Options.CtrlClickHyperlinkToOpen

如果 WPS 需要单击同时按住 Ctrl 键来打开超链接，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CtrlClickHyperlinkToOpen**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例禁用需要在单击的同时按住 Ctrl 键来打开超链接的选项。*/
function test() {
    Options.CtrlClickHyperlinkToOpen = false
}
```


```JavaScript
/*本示例判断如果 WPS 需要在单击的同时按住 Ctrl 键来打开超链接，则通知用户。*/
function test() {
    if (Options.CtrlClickHyperlinkToOpen) {
        alert("WPS 需要在单击的同时按住 Ctrl 键来打开超链接。")
    }
}
```
