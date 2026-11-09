# Selection.InsertColumnsRight

在当前选定内容的右边插入列。



## 语法

express.**InsertColumnsRight()**

express   一个代表 **Selection** 对象的变量。

## 返回值

void

## 说明


WPS 插入与当前选定内容中数量相同的列。  

要使用此方法，当前所选内容必须处于表格中。



## 示例


```JavaScript
/*本示例选中活动文档第一个表格的第二列，然后在该列右边插入新列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(2).Select()
    Selection.InsertColumnsRight()
}
```


```JavaScript
/*本示例在所选内容的右侧插入新列，插入的列数与选定列数相等。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.InsertColumnsRight()
    }
}
```
