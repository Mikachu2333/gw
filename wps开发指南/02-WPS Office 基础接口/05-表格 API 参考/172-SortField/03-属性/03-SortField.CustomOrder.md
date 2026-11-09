# SortField.CustomOrder

指定对字段进行排序的自定义次序。可读/写 **Variant** 类型。



## 语法

express.**CustomOrder**

express   一个代表 **SortField** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例在活动工作表设置自定义排序。*/
function test() {
    Application.ActiveSheet.Sort.SortFields.Item(1).CustomOrder = "A,B,C,D,E,F,G,H"
}
```


```JavaScript
/*本示例在第一张工作表创建新的排序字段，并显示第一张工作表的自定义排序。*/
function test() {
    Application.Sheets.Item(1).Sort.SortFields.Add(Range("A1:A20"), xlSortOnValues, xlAscending, "alpha,bravo,charlie,delta")
    alert(Application.Sheets.Item(1).Sort.SortFields.Item(1).CustomOrder)
}
```
