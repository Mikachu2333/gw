# Application.ShowToolTips

如果打开工具提示，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**ShowToolTips**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使 ET 显示工具提示*/
function test() {
    Application.ShowToolTips = true
}
```


```JavaScript
/*本示例演示 ShowToolTips 属性的数据类型，并将 ShowToolTips 属性的值设置为false。*/
function test() {
    alert("ShowToolTips属性的数据类型为：" + typeof Application.ShowToolTips)
    Application.ShowToolTips = false
}
```
