# Range.OutlineLevel

返回或设置指定行或列的当前分级显示级别。 **Variant** 类型，可读写。



## 语法

express.**OutlineLevel**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


第一级为最外层的摘要级。



## 示例


```JavaScript
/*本示例设置 sheet1 上第二行的分级显示级别。*/
function test() {
    Worksheets.Item("Sheet1").Rows.Item(2).OutlineLevel = 1
}
```


```JavaScript
/*本示例将 A3 单元格所在行的分级显示级别设置为2，并显示*/
function test() {
    Range("A3").Rows.OutlineLevel = 2
    alert(Range("A3").Rows.OutlineLevel)
}
```
