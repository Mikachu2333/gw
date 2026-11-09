# Application.Iteration

如果 ET 使用迭代来处理循环引用，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Iteration**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将 Iteration 属性设置为true，以使用迭代来处理循环引用。*/
function test() {
    Application.Iteration = true
}
```


```JavaScript
/*本示例演示 Iteration 属性的数据类型，并将 Iteration 属性的值设置为false。*/
function test() {
    alert("Iteration属性的数据类型为：" + typeof Application.Iteration)
    Application.Iteration = false
}
```
