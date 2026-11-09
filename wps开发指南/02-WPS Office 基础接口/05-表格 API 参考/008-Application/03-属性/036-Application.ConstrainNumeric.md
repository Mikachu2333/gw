# Application.ConstrainNumeric

如果手写识别只能识别数字和标点符号，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ConstrainNumeric**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


该属性仅在使用 Windows for Pen Computing 时可用。如果试图在其他操作系统中对该属性进行设置将产生错误。



## 示例


```JavaScript
/*本示例监测是否运行在 Windows for Pen Computing 上，如果是，则限定手写识别程序仅识别数字和标点符号。*/
function test() {
    if (Application.WindowsForPens) {
        Application.ConstrainNumeric = true
    }
}
```


```JavaScript
/*本示例监测是否运行在 Windows for Pen Computing 上，如果是，则将ConstrainNumeric属性的值设置为false，并通知用户。*/
function test() {
    if (Application.WindowsForPens) {
        Application.ConstrainNumeric = false
        alert("已将ConstrainNumeric属性设置为false")
    }
}
```
