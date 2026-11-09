# PivotFilters.Add2

将新筛选添加到 **PivotFilters** 集合。



## 语法

express.**Add2(Type, DataField, Value1, Value2, Order, Name, Description, MemberPropertyField, WholeDayFilter)**

express   一个代表 **PivotFilters** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | XlPivotFilterType | 要求 XlPivotFilterType 类型的筛选。 |
| DataField | 可选 | any | 筛选附加到的字段。 |
| Value1 | 可选 | any | 筛选值 1。 |
| Value2 | 可选 | any | 筛选值 1。 |
| Order | 可选 | any | 筛选数据的顺序。 |
| Name | 可选 | any | 筛选的名称。 |
| Description | 可选 | any | 筛选的简要说明 |
| MemberPropertyField | 可选 | any | 指定标签筛选所基于的成员属性字段。 |

## 返回值

PivotFilter

## 示例


```JavaScript
/*本示例为活动工作表的数据透视表的字段“date”添加筛选器。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("date").PivotFilters.Add2(xlDateThisWeek)
}
```


```JavaScript
/*本示例为活动工作表的数据透视表的字段“name”添加值筛选器。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotFilters.Add2(xlValueIsGreaterThanOrEqualTo, ActiveSheet.PivotTables(1).DataFields(1), 95)
}
```


```JavaScript
/*本示例为活动工作表中数据透视表的字段“id”添加值筛选器。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("id").PivotFilters.Add2(xlTopCount, ActiveSheet.PivotTables(1).DataFields("求和项:score"), 3)
}
```


```JavaScript
/*本示例为活动工作表中数据透视表的字段“id”添加标签筛选器。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("id").PivotFilters.Add2(xlCaptionIsNotBetween, null, "1", "5")
}
```


```JavaScript
/*本示例为活动工作表的数据透视表的字段“name”添加值筛选器。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields("name").PivotFilters.Add2(xlValueIsGreaterThanOrEqualTo, ActiveSheet.PivotTables(1).DataFields("求和项:期中成绩"), 75.5)
}
```
