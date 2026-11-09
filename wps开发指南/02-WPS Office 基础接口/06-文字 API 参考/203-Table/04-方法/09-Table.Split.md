# Table.Split

在表格中紧靠指定行的上面插入一空段落，并且返回一个 **Table** 对象，此对象包含指定行及其后面的行。



## 语法

express.**Split(BeforeRow)**

express   一个代表 **Table** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BeforeRow | 必选 | any | 将要拆分的表格的前一行。可以是行号或 **Row** 对象。 |

## 返回值

Table

## 示例


```JavaScript
/*本示例在活动文档中第一个表格的第二行的上面插入一个空段落。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Split(2)
    }
}
```


```JavaScript
/*本示例在第一个文档中第一个表格的最后一行的上面插入一个空段落。*/
function test() {
    let table = Documents.Item(1).Tables.Item(1)
    table.Split(table.Rows.Last)
}
```
