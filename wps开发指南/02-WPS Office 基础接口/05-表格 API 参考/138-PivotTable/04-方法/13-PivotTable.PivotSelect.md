# PivotTable.PivotSelect

选定数据透视表的一部分。



## 语法

express.**PivotSelect(Name, Mode, UseStandardName)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 要选择的数据透视表的一部分。 |
| Mode | 可选 | XlPTSelectionMode | 指定结构化选择模式。 |
| UseStandardName | 可选 | any | 如果为 True，则表示将在其他位置运行录制的宏。 |

## 返回值

void

## 说明


只能使用指定模式来选择数据透视表中的相应项。例如，无法通过 **xlButton** 模式来选择数据和标志；同样，也无法通过 **xlDataOnly** 模式来选择按钮。



## 示例


```JavaScript
/*本示例选定第一张工作表上的第一张数据透视表中的所有日期标志。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotSelect("date[All]", xlLabelOnly)
}
```


```JavaScript
/*本示例选中数据透视表中 y 字段的值*/
function test() {
    ActiveSheet.PivotTables(1).PivotSelect("y", xlDataOnly)
}
```
