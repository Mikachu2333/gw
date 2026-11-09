# Application.WorksheetFunction

返回 **WorksheetFunction** 对象。只读。



## 语法

express.**WorksheetFunction**

express   一个代表 **Application** 对象的变量。

## 类型

WorksheetFunction

## 示例


```JavaScript
/*本示例对单元格区域 A1:A10 应用 Min 工作表函数，并显示结果。*/
function test() {
    let myRange = Application.Worksheets.Item("Sheet1").Range("A1:A10")
    let answer = Application.WorksheetFunction.Min(myRange)
    alert(answer)
}
```


```JavaScript
/*本示例使用 CountA 工作表函数确定列 A 中包含值的单元格数量， 并显示出来。*/
function test() {
    Application.ActiveSheet.Range('A1').Value2 = 123
    Application.ActiveSheet.Range('A3').Value2 = 456
    let colA = Application.Worksheets.Item("sheet1").Columns('A')
    let count = WorksheetFunction.CountA(colA)
    alert(count)
}
```
