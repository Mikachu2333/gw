# SortField.Order

确定关键字所指定的值的排序次序。可读/写。



## 语法

express.**Order**

express   一个代表 **SortField** 对象的变量。

## 类型

XlSortOrder

## 示例


```JavaScript
/*本示例在活动工作表创建新的排序字段，并设置该排序字段的排序次序为降序。*/
function test() {
    let sortfields = Application.ActiveSheet.Sort.SortFields.Add(Range("A1:A4"))
    sortfields.Order = xlDescending
}
```


```JavaScript
/*本示例在第一张工作表创建新的排序字段，并显示该排序字段的排序次序是否为升序。*/
function test() {
    Application.Sheets.Item(1).Activate()
    let sortfield = ActiveSheet.Sort.SortFields.Add(Range("C1:C10"), xlSortOnValues, xlAscending)
    alert(sortfield.Order == xlAscending)
}
```
