# Options.IMEAutomaticControl

如果设置 WPS 自动打开和关闭日文输入法编辑器（IME），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**IMEAutomaticControl**

express   一个代表 **Options** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 WPS 自动打开和关闭日文输入法编辑器（IME）。*/
function test() {
    Options.IMEAutomaticControl = true
}
```


```JavaScript
/*本示例判断如果 WPS 自动打开和关闭日文输入法编辑器（IME），则通知用户。*/
function test() {
    if (Options.IMEAutomaticControl) {
        alert("WPS 自动打开和关闭日文输入法编辑器（IME）。")
    }
}
```
