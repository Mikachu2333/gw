# Range.AdvancedFilter

基于条件区域从列表中筛选或复制数据。如果初始选定区域为单个单元格，则使用单元格的当前区域。



## 语法

express.**AdvancedFilter(Action, CriteriaRange, CopyToRange, Unique)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Action | 必选 | XlFilterAction | **XlFilterAction** 的常量之一，用于指定是否就地复制或筛选列表。 |
| CriteriaRange | 可选 | any | 条件区域。如果省略该参数，则没有条件限制。 |
| CopyToRange | 可选 | any | 如果 _Action_ 为 **xlFilterCopy** ，则为复制行的目标区域。否则，忽略该参数。 |
| Unique | 可选 | any | 如果为 **True** ，则只筛选唯一记录。如果为 **False** ，则筛选符合条件的所有记录。默认值为 **False** 。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例基于条件区域“Criteria”筛选数据库“Database”*/
function test() {
    Range("Database").AdvancedFilter(xlFilterInPlace, Range("Criteria"))
}
```


```JavaScript
/*本示例将 A1:C3 单元格区域以 E9:G10 单元格区域为条件复制到 I1 单元格中。*/
function test() {
    Range("A1:C3").AdvancedFilter(xlFilterCopy, Range("E9:G10"), Range("I1"), false)
}
```
