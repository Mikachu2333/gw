# Application.ShowVisualBasicEditor

如果显示“Visual Basic 编辑器”窗口，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowVisualBasicEditor**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示“Visual Basic 编辑器”窗口。*/
function test() {
    Application.ShowVisualBasicEditor = true
}
```


```JavaScript
/*本示例判断如果“VB 编辑器”窗口可见，则通知用户。*/
function test() {
    if (Application.ShowVisualBasicEditor) {
        alert("“VB 编辑器”窗口可见")
    }
}
```
