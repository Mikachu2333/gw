# Selection.Columns

返回一个 **Columns** 集合，该集合代表所选内容中的所有表格列。只读。



## 语法

express.**Columns**

express   一个代表 **Selection** 对象的变量。

## 类型

Columns

## 示例


```JavaScript
/*本示例将选中内容中表格的所有列宽设置为 1 英寸。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Columns.SetWidth(InchesToPoints(1), wdAdjustProportional)
    }
}
```


```JavaScript
/*本示例将活动窗口上选中内容中表格的所有列删除。*/
function test() {
    ActiveWindow.Selection.Columns.Delete()
}
```
