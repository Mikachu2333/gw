# System.MathCoprocessorInstalled

如果系统安装了数学协处理器，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**MathCoprocessorInstalled**

express   一个代表 **System** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断如果系统安装了数学协处理器，则显示一条提示信息。*/
function test() {
    if (Application.System.MathCoprocessorInstalled) {
        alert("A math coprocessor is installed.")
    }
}
```


```JavaScript
/*本示例判断系统是否安装了数学协处理器，并通知用户。*/
function test() {
    if (Application.System.MathCoprocessorInstalled) {
        alert("您已安装数学协处理器！")
    } else {
        alert("您未安装数学协处理器！")
    }
}
```
