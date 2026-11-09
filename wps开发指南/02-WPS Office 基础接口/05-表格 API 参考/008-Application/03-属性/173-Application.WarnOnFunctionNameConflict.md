# Application.WarnOnFunctionNameConflict

在将 **WarnOnFunctionNameConflict** 属性设置为 **True** 时，如果开发人员尝试使用现有函数名称创建一个新函数，则会发出警告。可读/写 **Boolean** 类型。



## 语法

express.**WarnOnFunctionNameConflict**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置开发人员尝试使用现有函数名称创建一个新函数时不会发出警告。*/
function test() {
    Application.WarnOnFunctionNameConflict = false
}
```


```JavaScript
/*本示例判断如果开发人员尝试使用现有函数名称创建一个新函数会发出警告，则通知用户。*/
function test() {
    if (Application.WarnOnFunctionNameConflict) {
        alert("使用现有函数名称创建新函数时会发出警告")
    }
}
```
