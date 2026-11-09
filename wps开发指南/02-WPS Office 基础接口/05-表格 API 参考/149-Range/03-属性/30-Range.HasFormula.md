# Range.HasFormula

如果区域中所有单元格均包含公式，则该属性值为 **True** ；如果所有单元格均不包含公式，则该属性值为 **False** ；其他情况下为 **null** 。 **Variant** 类型，只读。



## 语法

express.**HasFormula**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例提示用户选定 sheet1 的区域。如果该选定区域内所有单元格均包含公式，则本示例将显示消息框。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    let rr = Application.InputBox("Select a range on this worksheet", undefined, undefined, undefined, undefined, undefined, undefined, 8)
    if (rr.HasFormula) {
        MsgBox("Every cell in the selection contains a formula")
    }
}
```


```JavaScript
/*本示例检查 B1:C1 单元格区域是否所有单元格都含有公式，然后给他们分别设置公式，查看结果*/
function test() {
    alert(Range("B1:C1").HasFormula) //false
    Range("B1").Formula = "=B2+B3"
    alert(Range("B1:C1").HasFormula) //null
    Range("C1").Formula = "=C2+C3"
    alert(Range("B1:C1").HasFormula) //true
}
```
