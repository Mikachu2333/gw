# Cell.FitText

如果 WPS 会减小键入单元格中的文字的可视大小，使其适应列宽，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**FitText**

express   一个代表 **Cell** 对象的变量。

## 类型

boolean

## 说明


如果将 **FitText** 设置为 **True** ，则虽然字体尺寸没有改变，但将调整字符的可视宽度，使单元格可容纳所有键入的文字。



## 示例


```JavaScript
/*本示例实现选定内容的第一个单元格在其宽度内自动调整键入的文字大小。*/
function test() {
    Application.Selection.Cells.Item(1).FitText = true
}
```


```JavaScript
/*本示例显示活动文档的第一张表格中的第一行第一列单元格是否在其宽度内自动调整键入的文字大小。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    alert(table.Cell(1, 1).FitText)
}
```
