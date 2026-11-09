# Cell.HeightRule

返回或设置一个 **WdRowHeightRule** 常量，该常量代表确定指定单元格或行高度的规则。可读写。



## 语法

express.**HeightRule**

express   一个代表 **Cell** 对象的变量。

## 类型

WdRowHeightRule

## 说明


设置 **Cell** 对象的 **HeightRule** 属性将自动设置整行的高度。



## 示例


```JavaScript
/*本示例将活动文档中第一张表格的第一个单元格的高度规则设置为自适应*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Cell(1, 1).HeightRule = wdRowHeightAuto
}
```


```JavaScript
/*本示例显示第一个文档中第一张表格的第一个单元格的高度规则是否为自适应*/
function test() {
    alert(Application.Documents.Item(1).Tables.Item(1).Cell(1, 1).HeightRule == wdRowHeightAuto)
}
```
