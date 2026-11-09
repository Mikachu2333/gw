# Cell.Parent

返回一个 **Object** 类型的值，该值代表指定 **Cell** 对象的父对象。




## 语法

express.**Parent**

express   一个代表 **Cell** 对象的变量。

## 类型

Object

## 示例


```JavaScript
/*本示例为活动文档中第一个表格的第一个单元格设置变量，将单元格的宽度更改为 36 磅，并删除表格的边框。*/
function test() {
    let objCell = Application.ActiveDocument.Tables.Item(1).Cell(1, 1)
    objCell.SetWidth(36, wdAdjustNone)
    objCell.Parent.Borders.Enable = false
}

```
