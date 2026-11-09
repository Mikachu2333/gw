# Style.MergeCells

如果样式包含合并的单元格，则为 **True** 。 **Variant** 型，可读写。



## 语法

express.**MergeCells**

express   一个代表 **Style** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将A1:B2单元格区域合并为一个单元格。*/
function test() {
    Range("A1:B2").MergeCells = true
}
```


```JavaScript
/*本示例显示活动工作簿第一个样式是否包含合并的单元格。*/
function test() {
    alert(ActiveWorkbook.Styles.Item(1).MergeCells)
}
```
