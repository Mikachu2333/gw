# Cell.Height

返回或设置指定表格单元格的高度。



## 语法

express.**Height**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 说明


如果指定行的 **HeightRule** 属性为 **wdRowHeightAuto** ，则 **Height** 返回 **wdUndefined** ；如果设置 **Height** 属性，系统将 **HeightRule** 设置为 **wdRowHeightAtLeast** 。可读/写 **Single** 类型。



## 示例


```JavaScript
/*本示例设置活动文档中第一张表格第一个单元格所在的整行单元格高度*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Height = 40
}
```


```JavaScript
/*本示例显示活动文档中第一张表格第一个单元格的高度*/
function test() {
    alert(Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Height)
}
```
