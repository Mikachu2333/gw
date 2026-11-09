# Options.EnableSound

如果 WPS 在导致出错时使计算机发出声音进行响应，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableSound**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例根据用户的输入，设置 WPS 是否在导致出错时使计算机发出声音进行响应。*/
function test() {
    if (MsgBox("Do you want WPS to beep on errors?", jsYesNoCancel) == jsResultYes) {
        Options.EnableSound = true
    } else {
        Options.EnableSound = false
    }
}
```


```JavaScript
/*本示例判断如果 WPS 在导致出错时使计算机发出声音进行响应，则通知用户。*/
function test() {
    if (Options.EnableSound) {
        alert("WPS 在导致出错时使计算机发出声音进行响应")
    }
}
```
