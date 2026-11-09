# Range.Top

返回或设置一个 **Variant** 值，它代表行 1 上边缘到区域上边缘的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


如果该区域不连续，则使用第一块区域。如果该区域有若干行，则使用区域中的顶端行（行号最小的行）。



## 示例


```JavaScript
/*本示例显示 A2 单元格上边缘到第一行上边缘的距离*/
function test() {
    alert(Range("A2").Top)
}
```


```JavaScript
/*本示例将 A1 单元格所在行的行高设置为21，并显示 A2 单元格上边缘到第一行上边缘的距离*/
function test() {
    Range("A1").Rows.RowHeight = 21
    alert(Range("A2").Top)
}
```
