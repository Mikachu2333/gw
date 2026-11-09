# Column.IsFirst

如果指定的列是表格的第一列，则返回 **True** 。只读 **Boolean** 类型。



## 语法

express.**IsFirst**

express   一个代表 **Column** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示所选表格列的第一列是否为表格中的第一列*/
function test() {
    alert(Selection.Columns.Item(1).IsFirst)
}
```


```JavaScript
/*本示例判断如果所选表格列的第一列为表格的第一列，则删除第一列。*/
function test() {
    if (Selection.Columns.Item(1).IsFirst) {
        Selection.Columns.Item(1).Delete()
    }
}
```
