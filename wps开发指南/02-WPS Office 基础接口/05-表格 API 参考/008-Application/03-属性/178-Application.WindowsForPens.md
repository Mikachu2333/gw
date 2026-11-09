# Application.WindowsForPens

如果此计算机正在运行的是 Windows for Pen Computing，则该属性的值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**WindowsForPens**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例仅在运行 Windows for Pen Computing 时将手写识别设置为只能识别数字和标点符号。*/
function test() {
    if (Application.WindowsForPens) {
        Application.ConstrainNumeric = true
    }
}
```


```JavaScript
/*本示例判断如果计算机正在运行 Windows for Pen Computing，则通知用户。*/
function test() {
    if (Application.WindowsForPens) {
        alert("计算机正在运行的是 Windows for Pen Computing")
    }
}
```
