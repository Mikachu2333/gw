# Range.UseStandardHeight

如果 **Range** 对象的行高等于工作表的标准行高，则该值为 **True** 。如果区域包含不止一行并且不是所有的行都等高，则返回 **Null** 。 **Variant** 类型，可读写。



## 语法

express.**UseStandardHeight**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 Sheet1 中的首行的行高设置为标准行高。*/
function test() {
    Worksheets.Item("Sheet1").Rows.Item(1).UseStandardHeight = true
}
```


```JavaScript
/*本示例将 A1 单元格所在行的行高设置为 50，并显示 A1 单元格和 A1:A5 单元格区域的行高是否等于标准行高*/
function test() {
    Range("A1").Rows.RowHeight = 50
    alert(Range("A1").UseStandardHeight) // false
    alert(Range("A1:A5").UseStandardHeight) // null
}
```
