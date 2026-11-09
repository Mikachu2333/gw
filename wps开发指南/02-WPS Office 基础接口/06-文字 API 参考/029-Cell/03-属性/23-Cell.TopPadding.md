# Cell.TopPadding

返回或设置表格中单独的单元格或全部单元格的内容上方要增加的间距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**TopPadding**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 说明


单独单元格的 **TopPadding** 属性设置将覆盖整个表格的 **TopPadding** 属性设置。



## 示例


```JavaScript
/*本示例将活动文档第一张表格首行中第一个单元格的顶部边距设为 40 像素。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    table.Rows.Item(1).Cells.Item(1).TopPadding = PixelsToPoints(40, true)
}
```


```JavaScript
/*本示例显示活动文档第一张表格第二行的第三个单元格的顶部边距。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    alert(table.Rows.Item(2).Cells.Item(3).TopPadding + "磅")
}
```
