# Cell.Split

将一个表格单元格拆分为多个。



## 语法

express.**Split(NumRows, NumColumns)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumRows | 可选 | any | 一个单元格或多个单元格拆分成的行数。 |
| NumColumns | 可选 | any | 一个单元格或多个单元格拆分成的列数。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张表格的第一个单元格拆分为两个单元格*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Split(1, 2)
}
```


```JavaScript
/*本示例将第一张表格的第二行第一个单元格按行拆分为两个单元格*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Cell(2, 1).Split(2, 1)
}
```
