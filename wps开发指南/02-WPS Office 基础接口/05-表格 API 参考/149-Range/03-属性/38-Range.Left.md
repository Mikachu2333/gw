# Range.Left

返回一个 **Variant** 值，它代表从列 A 的左边缘到区域的左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


如果该区域不连续，则使用第一块区域。如果该区域有若干列宽，则使用区域中最左边的列。



## 示例


```JavaScript
/*本示例显示 B1 单元格左边缘到 A 列左边缘的距离*/
function test() {
    alert("B1 单元格左边缘到 A 列左边缘的距离为：" + Range("B1").Left)
}
```


```JavaScript
/*本示例将 A 列的 ColumnWidth 属性修改为 20 ，然后显示修改后 B1 单元格左边缘到 A 列左边缘的距离*/
function test() {
    Range("A1").ColumnWidth = 20
    alert("修改后 B1 单元格左边缘到 A 列左边缘的距离为：" + Range("B1").Left)
}
```
