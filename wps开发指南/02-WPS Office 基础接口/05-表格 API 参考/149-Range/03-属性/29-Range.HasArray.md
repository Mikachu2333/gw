# Range.HasArray

如果指定单元格属于数组公式，则该属性值为 **True** 。 **Variant** 类型，只读。



## 语法

express.**HasArray**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*如果 sheet1 上的活动单元格为数组的一部分，则本示例将显示一条消息。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    if (ActiveCell.HasArray) {
        MsgBox("The active cell is part of an array")
    }
}
```


```JavaScript
/*本示例将 A1:C4 单元格区域设置数组公式 {=3}，显示 B3 单元格是否属于数组公式*/
function test() {
    Range("A1:C4").FormulaArray = "=3"
    alert(Range("B3").HasArray)
}
```
