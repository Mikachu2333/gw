# Column.IsLast

如果指定的列是表格的最后一列，则返回 **True** 。只读 **Boolean** 类型。



## 语法

express.**IsLast**

express   一个代表 **Column** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示所选表格列的第一列是否为表格的最后一列*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        alert(Selection.Columns.Item(1).IsLast)
    }
}
```


```JavaScript
/*本示例判断如果所选表格列的第一列为表格的最后一列，则删除最后一列。*/
function test() {
    if (Selection.Columns.Item(1).IsLast) {
        Selection.Columns.Item(1).Delete()
    }
}
```
