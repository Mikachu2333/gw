# Cell.RightPadding

返回或设置表格中某个单元格或全部单元格内容右侧的空格量（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**RightPadding**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 说明


某个单元格的 **RightPadding** 属性的设置将覆盖整个表格的 **RightPadding** 属性的设置。



## 示例


```JavaScript
/*本示例将活动文档第一张表格首行中第一个单元格的右边距设置为 40 像素。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    table.Rows.Item(1).Cells.Item(1).RightPadding = PixelsToPoints(40, false)
}
```


```JavaScript
/*本示例显示活动文档第一张表格第一行的第三个单元格的右边距。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    alert(table.Rows.Item(1).Cells.Item(3).RightPadding + "磅")
}
```
