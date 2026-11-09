# PivotField.AutoSortOrder

返回用于对指定数据透视表字段进行自动排序的次序。可为 **XlSortOrder** 常量之一。 **Long** 类型，只读。



## 语法

express.**AutoSortOrder**

express   一个代表 **PivotField** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在消息框中显示“grades”字段的 AutoSort 参数值。*/
function test() {
    let pvtField = Worksheets.Item(1).PivotTables(1).PivotFields("grades")
    let aso = null
    switch (pvtField.AutoSortOrder) {
        case xlManual:
            aso = "manual"
            break;
        case xlAscending:
            aso = "ascending"
            break;
        case xlDescending:
            aso = "descending"
            break;
    }
    alert(" sorted in " + aso + " order by " + pvtField.AutoSortField)
}
```


```JavaScript
/*本示例显示活动工作表中数据透视表是否按降序对字段“age”排序。*/
function test() {
    let pvtField = ActiveSheet.Range("I1").PivotTable.PivotFields("age")
    alert(pvtField.AutoSortOrder == xlDescending)
}
```
