# Window.DisplayWhitespace

如果显示空白，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**DisplayWhitespace**

express   一个代表 **Window** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置窗口中显示空白。*/
function test() {
    ActiveWindow.DisplayWhitespace = true
}
```


```JavaScript
/*本示例演示 DisplayWhitespace 属性的数据类型，并将第一个窗口的 DisplayWhitespace 属性的值设置为false。*/
function test() {
    alert("DisplayWhitespace属性的数据类型为：" + typeof Windows.Item(1).DisplayWhitespace)
    Windows.Item(1).DisplayWhitespace = false
}
```
