# Application.EnableLargeOperationAlert

设置或返回一个 **Boolean** 值，该值表示当用户尝试执行的操作所影响的单元格数目比 Office 中心 UI 中指定的数目大时，是否显示警告消息。可读/写 **Boolean** 类型。



## 语法

express.**EnableLargeOperationAlert**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 说明


此属性的默认值是 **True** 。



## 示例


```JavaScript
/*此示例演示关闭警告消息。*/
function test() {
    Application.EnableLargeOperationAlert = false
}
```


```JavaScript
/*本示例演示EnableLargeOperationAlert的数据类型，当提示框关闭后将EnableLargeOperationAlert属性设置为true。*/
function test() {
    alert("EnableLargeOperationAlert 属性的数据类型为：" + typeof Application.EnableLargeOperationAlert)
    Application.EnableLargeOperationAlert = true
}
```
