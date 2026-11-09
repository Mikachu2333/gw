# PivotField.AutoSortField

返回用于对指定数据透视表字段进行自动排序的数据字段的名称。 **String** 类型，只读。



## 语法

express.**AutoSortField**

express   一个代表 **PivotField** 对象的变量。

## 类型

string

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
/*本示例显示活动工作表的数据透视表中进行自动排序的所有数据字段的名称。*/
function test() {
    let pvtFields = ActiveSheet.Range("I1").PivotTable.PivotFields()
    for (let i = 1; i <= pvtFields.Count; i++) {
        alert(pvtFields.Item(i).AutoSortField)
    }
}
```
