# AutoCorrect.CorrectTableCells

 如果为 **True** ，则自动将表格单元格内容的首字母大写。 **Boolean** 类型，可读写。



## 语法

express.**CorrectTableCells**

express   一个代表 **AutoCorrect** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例关闭自动将表格单元格中键入内容的首字母大写的功能。*/
function test() {
    Application.AutoCorrect.CorrectTableCells = false
}
```


```JavaScript
/*本示例显示是否自动将表格单元格中键入内容的首字母大写。*/
function test() {
    alert(Application.AutoCorrect.CorrectTableCells)
}
```
