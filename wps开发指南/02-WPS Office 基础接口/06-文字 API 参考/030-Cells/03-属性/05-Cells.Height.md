# Cells.Height

返回或设置指定表格单元格的高度。可读/写 **Single** 类型。



## 语法

express.**Height**

express   一个代表 **Cells** 对象的变量。

## 类型

number（float 精度）

## 说明


如果指定行的 **HeightRule** 属性为 **wdRowHeightAuto** ，则 **Height** 返回 **wdUndefined** ；如果设置 **Height** 属性，系统会将 **HeightRule** 设置为 **wdRowHeightAtLeast** 。



## 示例


```JavaScript
/*本示例将活动文档上第一张表格中所有单元格的高度设置为20磅。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    table.Range.Cells.Height = 20
}
```


```JavaScript
/*本示例判断如果选定内容位于表格，则将选定的表格单元格的高度设置为50磅。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.Cells.Height = 50
    } else {
        alert("选定内容不位于表格")
    }
}
```
