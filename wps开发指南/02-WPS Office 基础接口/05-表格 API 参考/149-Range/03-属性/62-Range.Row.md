# Range.Row

返回区域中第一个子区域的第一行的行号。 **Long** 类型，只读。



## 语法

express.**Row**

express   一个代表 **Range** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将工作表 sheet1 中每隔一行的行高设置为 4 磅。*/
function test() {
    let rw = Application.Worksheets.Item("Sheet1").Rows
    for (let i = 1; i <= rw.Count; i++) {
        if ((rw.Item(i).Row) % 2 == 0) {
            rw.Item(i).RowHeight = 4
        }
    }
}
```


```JavaScript
/*本示例将 B1 单元格的值设置为 b1，并清除 A1 单元格所在行的内容*/
function test() {
    Range("B1").Value2 = 'b1'
    ActiveSheet.Rows.Item(Range("A1").Row).Clear()
}
```
