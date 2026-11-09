# PivotField.AutoSort

为数据透视表建立自动字段排序规则。



## 语法

express.**AutoSort(Order, Field, PivotLine, CustomSubtotal)**

express   一个代表 **PivotField** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Order | 必选 | number（int4 精度） | 指定排序顺序的 XlSortOrder 的常量之一。 |
| Field | 必选 | string | 排序关键字段的名称。必须指定唯一名称（由 SourceName 属性返回的名称），而不是显示的名称。 |
| PivotLine | 可选 | any | 列上的一行或数据透视表中的一行。 |
| CustomSubtotal | 可选 | any | 自定义分类汇总字段。 |

## 返回值

void

## 示例


```JavaScript
/*本示例对活动工作表中第一个数据透视表的“grades”字段按降序排序。*/
function test() {
    Application.ActiveSheet.PivotTables(1).PivotFields("grades").AutoSort(xlDescending, "grades")
}
```


```JavaScript
/*本示例对工作表 Sheet1 中第一张数据透视表的字段“id”按升序排序。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").PivotTables(1).PivotFields("id")
    pvtField.AutoSort(xlAscending, "id")
}
```
