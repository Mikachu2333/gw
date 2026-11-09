# Table.AllowAutoFit

使 WPS 可以自动调整表格中的单元格的大小以适应内容。 **Boolean** 类型，可读写。



## 语法

express.**AllowAutoFit**

express   一个代表 **Table** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档的第一张表格可自动调整大小以适应内容*/
function test() {
    ActiveDocument.Tables.Item(1).AllowAutoFit = true
}
```


```JavaScript
/*本示例显示选中的第一张表格是否会自动调整单元格大小以适应内容*/
function test() {
    alert(Selection.Tables.Item(1).AllowAutoFit)
}
```
