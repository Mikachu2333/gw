# Application.AlertBeforeOverwriting

如果 ET 在执行拖放编辑操作过程中，在覆盖非空单元格之前显示一条消息，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AlertBeforeOverwriting**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 ET 在执行拖放编辑操作过程中，在改写非空单元格之前先显示警告。*/
function test() {
    Application.AlertBeforeOverwriting = true
}
```


```JavaScript
/*本示例演示 AlertBeforeOverwriting 属性的数据类型，并将 AlertBeforeOverwriting 属性的值设置为false。*/
function test() {
    alert("AlertBeforeOverwriting属性的数据类型为：" + Application.AlertBeforeOverwriting)
    Application.AlertBeforeOverwriting = false
}
```
