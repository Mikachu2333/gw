# Range.Width

返回一个 **Variant** 值，它代表区域的宽度（以单位表示）。



## 语法

express.**Width**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 A1 单元格的宽度乘以 2，然后显示 A1 单元格的宽度*/
function test() {
    Range("A1").ColumnWidth *= 2
    alert(Range("A1").Width)
}
```


```JavaScript
/*本示例显示 A1:B1 单元格区域的宽度*/
function test() {
    alert("A1:B1区域的总宽度为：" + Range("A1:B1").Width)
}
```
