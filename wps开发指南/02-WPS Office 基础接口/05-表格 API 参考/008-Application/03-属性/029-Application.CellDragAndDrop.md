# Application.CellDragAndDrop

如果启用单元格拖放功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CellDragAndDrop**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例启用单元格拖放功能。*/
function test() {
    Application.CellDragAndDrop = true
}
```


```JavaScript
/*本示例演示CellDragAndDrop属性的数据类型，并将CellDragAndDrop属性的值设置为false。*/
function test() {
    alert(typeof Application.CellDragAndDrop)
    Application.CellDragAndDrop = false
}
```
