# Range.RowHeight

以磅为单位返回或设置指定区域中所有行的行高。如果指定区域中的各行的行高不等，则返回 **null** 。 **Variant** 类型，可读写。



## 语法

express.**RowHeight**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


可使用 **Height** 属性返回整个单元格区域的高度。

以下是 **RowHeight** 和 **Height** 的不同之处：

* **Height** 为只读。
* 如果要返回几行的 **RowHeight** 属性，可得到每一行的行高（如果所有的行等高），或得到 **null** （如果它们不等高）。如果要返回几行的 **Height** 属性，将得到所有行高的总和。



## 示例


```JavaScript
/*本示例使工作表 sheet1 上第一行的行高加倍。*/
function test() {
    let ro = Application.Worksheets.Item("Sheet1").Rows.Item(1)
    ro.RowHeight = ro.RowHeight * 2
}
```


```JavaScript
/*本示例将 A3 所在行的行高设置为 20*/
function test() {
    Range("A3").Rows.RowHeight = 20
}
```
