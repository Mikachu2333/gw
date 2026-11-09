# CellFormat.IndentLevel

返回或设置一个 **Variant** 值，它代表单元格或单元格区域的缩进量。可为 0 到 15 之间的整数。



## 语法

express.**IndentLevel**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 说明


使用此属性将缩进量设为小于 0 或者大于 15 的数字，将导致发生错误。



## 示例


```JavaScript
/*此示例显示替换条件中单元格的缩进量。*/
function test() {
    alert(Application.ReplaceFormat.IndentLevel)
}
```


```JavaScript
/*此示例设置搜索条件中单元格的缩进量为15。*/
function test() {
    Application.FindFormat.IndentLevel = 15
}
```
