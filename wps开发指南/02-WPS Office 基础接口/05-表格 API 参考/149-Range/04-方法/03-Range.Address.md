# Range.Address

返回一个 **String** 值，它代表宏语言的区域引用。



## 语法

express.**Address(RowAbsolute, ColumnAbsolute, ReferenceStyle, External, RelativeTo)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowAbsolute | 可选 | any | 如果为 True，则以绝对引用返回引用的行部分。默认值为 True。 |
| ColumnAbsolute | 可选 | any | 如果为 True，则以绝对引用返回引用的列部分。默认值为 True。 |
| ReferenceStyle | 可选 | XlReferenceStyle | 引用样式。默认值为 xlA1。 |
| External | 可选 | any | 如果为 True，则返回外部引用。如果为 False，则返回本地引用。默认值为 False。 |
| RelativeTo | 可选 | any | 如果 RowAbsolute 和 ColumnAbsolute 为 False，并且 ReferenceStyle 为 xlR1C1，则必须包括相对引用的起始点。此参数是定义起始点的 Range 对象。 |

## 返回值

string

## 说明


如果引用包含多个单元格，*RowAbsolute* 和 *ColumnAbsolute* 将应用于所有的行和列。



## 示例


```JavaScript
/*下例对工作表 Sheet1 中的同一单元格地址使用了四种不同的表达方式。示例中的注释为将要显示于消息框中的地址。*/
function test() {
    let mc = Application.Worksheets.Item("Sheet1").Cells.Item(1, 1)
    MsgBox(mc.Address())                                    // $A$1
    MsgBox(mc.Address(false))                               // $A1
    MsgBox(mc.Address(undefined, undefined, xlR1C1))          // R1C1
    MsgBox(mc.Address(false, false, xlR1C1, undefined, Worksheets.Item(1).Cells.Item(3, 3)))      // R[-2]C[-2]
}
```


```JavaScript
/*本示例选中 A3 单元格，并显示选中区域的非绝对引用地址*/
function test() {
    Range("A3").Select()
    alert(Selection.Address(false, false))
}
```
