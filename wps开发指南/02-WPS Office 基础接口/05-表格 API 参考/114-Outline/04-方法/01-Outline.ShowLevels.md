# Outline.ShowLevels

显示指定行号和/或列号在分级显示中的层次。



## 语法

express.**ShowLevels(RowLevels, ColumnLevels)**

express   一个代表 **Outline** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowLevels | 可选 | any | 指定分级显示中的行层次。如果该分级显示包含的层次数少于指定层次，则 ET 显示所有层次。如果该参数为 0（零）或者省略该参数，则不对行采取任何操作。 |
| ColumnLevels | 可选 | any | 指定分级显示中的列层次。如果该分级显示包含的层次数少于指定层次，则 ET 显示所有层次。如果该参数为 0（零）或者省略该参数，则不对列采取任何操作。 |

## 返回值

Variant

## 说明


必须至少指定一个参数。



## 示例


```JavaScript
/*本示例对工作表 Sheet1 的第一行到第三行的行层次和第一列的列层次进行分级显示。*/
function test() {
    Worksheets.Item("Sheet1").Outline.ShowLevels(3, 1)
}
```


```JavaScript
/*本示例对活动工作表的第一行的行层次和第一列的列层次进行分级显示。*/
function test() {
    ActiveSheet.Outline.ShowLevels(1, 1)
}
```
