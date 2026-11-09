# Row.HeightRule

返回或设置确定指定单元格或行高度的规则。 **WdRowHeightRule** 类型，可读写。



## 语法

express.**HeightRule**

express   一个代表 **Row** 对象的变量。

## 类型

WdRowHeightRule

## 示例


```JavaScript
/*本示例在新文档中创建一张 3x3 表格，并设置第二行的最小行高为 24 磅。*/
function test() {
    let document = Documents.Add()
    let table = document.Tables.Add(Selection.Range, 3, 3)
    table.Rows.Item(2).Height = 24
    table.Rows.Item(2).HeightRule = wdRowHeightAtLeast
}
```


```JavaScript
/*本示例显示活动文档的第一个表格第一行的行高规则。*/
function test() {
    switch (ActiveDocument.Tables.Item(1).Rows.Item(1).HeightRule){
        case wdRowHeightAuto:
            alert("调整行高以适应该行中的最大高度值。")
            break
        case wdRowHeightAtLeast:
            alert("行高至少是最小的指定值。")
            break
        case wdRowHeightExactly:
            alert("行高是固定值。")
            break
    }
}
```
