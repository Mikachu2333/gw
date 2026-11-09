# Application.CopyObjectsWithCells

如果对象与单元格一同剪切、复制、提取和排序，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**CopyObjectsWithCells**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置 ET 将单元格与对象一同剪切、复制、提取和排序。*/
function test() {
    Application.CopyObjectsWithCells = true
}
```


```JavaScript
/*本示例演示CopyObjectsWithCells属性数据类型，并将CopyObjectsWithCells属性的值设置为false。*/
function test() {
    alert("CopyObjectsWithCells属性数据类型为：" + typeof Application.CopyObjectsWithCells)
    Application.CopyObjectsWithCells = false
}
```
