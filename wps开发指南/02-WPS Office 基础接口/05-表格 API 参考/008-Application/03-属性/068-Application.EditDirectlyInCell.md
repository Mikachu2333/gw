# Application.EditDirectlyInCell

如果 ET 允许在单元格中直接进行编辑，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EditDirectlyInCell**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例在单元格中启用编辑。*/
function test() {
    Application.EditDirectlyInCell = true
}
```


```JavaScript
/*本示例演示EditDirectlyInCell的数据类型，当提示框关闭后将EditDirectlyInCell属性设置为false。*/
function test() {
    alert("EditDirectlyInCell 属性的数据类型为：" + typeof Application.EditDirectlyInCell)
    Application.EditDirectlyInCell = false
}
```
