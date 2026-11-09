# Cells.Width

返回或设置表格单元格的宽度（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**Width**

express   一个代表 **Cells** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示选定内容中单元格的宽度（以磅为单位）。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        alert(Selection.Cells.Width)
    }
}
```


```JavaScript
/*本示例创建一个3x3表格并给表格，并显示表格中单元格的宽度。*/
function test() {
    let table = ActiveDocument.Tables.Add(Selection.Range, 3, 3)
    alert(table.Range.Cells.Width)
}
```
