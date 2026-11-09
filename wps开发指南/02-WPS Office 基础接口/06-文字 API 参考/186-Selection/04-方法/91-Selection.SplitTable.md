# Selection.SplitTable

在选定内容第一行上面插入一个空段落。



## 语法

express.**SplitTable()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


如果选定内容不在表格中的第一行，则将该表格拆分为两个表格。如果选定内容不在表格中，则会导致出错。



## 示例


```JavaScript
/*本示例判断如果选定内容在表格中，则拆分该表格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.SplitTable()
    }
}
```


```JavaScript
/*本示例在活动文档第一张表格的第二行上方插入一个空段落将该表格进行拆分。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Select()
    Selection.SplitTable()
}
```
