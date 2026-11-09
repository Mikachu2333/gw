# Application.MathCoprocessorAvailable

如果数学协处理器可用，则该属性值为 **True** 。 **Boolean** 类型，只读。



## 语法

express.**MathCoprocessorAvailable**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例检查数学协处理器是否可用，如果不可用，则显示一个消息框。*/
function test() {
    if (!Application.MathCoprocessorAvailable) {
        alert("This macro requires a math coprocessor")
    }
}
```


```JavaScript
/*本示例显示数学协处理器是否可用。*/
function test() {
    alert(Application.MathCoprocessorAvailable)
}
```
