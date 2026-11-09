# Range.ClearNotes

清除指定区域中所有单元格的批注和语音批注。



## 语法

express.**ClearNotes()**

express   一个代表 **Range** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例清除工作表 Sheet1 上从 A 列到 C 列中的所有批注和语音批注。*/
function test() {
    Worksheets.Item("Sheet1").Columns.Item("A:C").ClearNotes()
}
```


```JavaScript
/*本示例设置 A1 单元格的批注为 a1，A2 单元格的批注为 a2，并清除 A1 单元格的所有批注和语音批注*/
function test() {
    Range("A1").AddComment("a1")
    Range("A2").AddComment("a2")
    Range("A1").ClearNotes()
}
```
