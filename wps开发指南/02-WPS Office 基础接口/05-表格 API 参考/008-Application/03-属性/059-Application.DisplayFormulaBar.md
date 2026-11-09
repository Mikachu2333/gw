# Application.DisplayFormulaBar

如果显示编辑栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayFormulaBar**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例隐藏编辑栏。*/
function test() {
    Application.DisplayFormulaBar = false
}
```


```JavaScript
/*本示例演示DisplayFormulaBar的数据类型，当提示框关闭后将DisplayFormulaBar属性设置为true。*/
function test() {
    alert("DisplayFormulaBar 属性的数据类型为：" + typeof Application.DisplayFormulaBar)
    Application.DisplayFormulaBar = true
}
```
