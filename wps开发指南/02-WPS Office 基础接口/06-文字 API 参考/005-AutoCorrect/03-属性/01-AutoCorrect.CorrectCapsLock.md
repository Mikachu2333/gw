# AutoCorrect.CorrectCapsLock

如果在键入时无意中使用了 Caps Lock（大写锁定）键，WPS 就将自动进行更正，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CorrectCapsLock**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将查看是否设置了 WPS 可自动更正无意中按下 Caps Lock（大写锁定）键所产生的错误的功能。*/
function test() {
    if (Application.AutoCorrect.CorrectCapsLock) {
        alert("Correct CAPS LOCK is active.")
    } else {
        alert("Correct CAPS LOCK is not active.")
    }
}
```


```JavaScript
/*本示例将设置 WPS 可自动更正无意中按下 Caps Lock（大写锁定）键所产生的错误。*/
function test() {
    Application.AutoCorrect.CorrectCapsLock = true
    alert("设置成功")
}
```
