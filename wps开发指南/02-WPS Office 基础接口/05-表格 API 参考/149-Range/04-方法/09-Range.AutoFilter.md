# Range.AutoFilter

使用“自动筛选”筛选一个列表。



## 语法

express.**AutoFilter(Field, Criteria1, Operator, Criteria2, VisibleDropDown)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Field | 可选 | any | 相对于作为筛选基准字段（从列表左侧开始，最左侧的字段为第一个字段）的字段的整型偏移量。 |
| Criteria1 | 可选 | any | 筛选条件（一个字符串；例如，“101”）。使用“=”可查找空字段，或者使用“<>”查找非空字段。如果省略该参数，则搜索条件为 All。如果将 _Operator_ 设置为 **xlTop10Items** ，则 _Criteria1_ 指定数据项个数（例如，“10”）。 |
| Operator | 可选 | XlAutoFilterOperator | 指定筛选类型的 XlAutoFilterOperator 常量之一。 |
| Criteria2 | 可选 | any | 第二个筛选条件（一个字符串）。与 _Criteria1_ 和 _Operator_ 一起组合成复合筛选条件。 |
| VisibleDropDown | 可选 | any | 如果为 **True** ，则显示筛选字段的自动筛选下拉箭头。如果为 **False** ，则隐藏筛选字段的自动筛选下拉箭头。默认值为 **True** 。 |

## 返回值

Variant

## 说明


如果忽略全部参数，此方法仅在指定区域切换自动筛选下拉箭头的显示。



## 示例


```JavaScript
/*本示例从工作表 Sheet1 上的 A1 单元格开始筛选出一个清单，该清单中只显示字段一为字符串“Otis”的数据项。字段一的下拉箭头将被隐藏。*/
function test() {
    Worksheets("Sheet1").Range("A1").AutoFilter(1, "Otis", null, null, false)
}
```


```JavaScript
/*本示例从工作表 Sheet1 上的 A1 单元格开始筛选出一个清单，该清单中显示字段一为字符串“Otis” 和 “4” 的数据项。*/
function test() {
    Worksheets("Sheet1").Range("A1").AutoFilter(1, "Otis", xlOr, "4", true)
}
```
