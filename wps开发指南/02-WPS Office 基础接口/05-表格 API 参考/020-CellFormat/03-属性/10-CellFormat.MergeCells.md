# CellFormat.MergeCells

如果区域或样式包含合并单元格，则为 **True** 。 **Variant** 。可读写。



## 语法

express.**MergeCells**

express   一个代表 **CellFormat** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*此示例显示查找条件中是否包含合并的单元格。*/
function test() {
    alert(Application.FindFormat.MergeCells)
}
```


```JavaScript
/*此示例设置查找条件中不包含合并的单元格。*/
function test() {
    Application.FindFormat.MergeCells = false
}
```
