# Filter.Operator

返回一个 **[XlAutoFilterOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlAutoFilterOperator)** 值，它代表与指定筛选所应用的两个条件相关的操作符。



## 语法

express.**Operator**

express   一个代表 **Filter** 对象的变量。

## 类型

XlAutoFilterOperator

## 示例


```JavaScript
/*本示例显示活动工作表上筛选区域中第一列的筛选的 Operator 属性值是否为 xlOr。*/
function test() {
    alert(ActiveSheet.AutoFilter.Filters.Item(1).Operator == xlOr)
}
```


```JavaScript
/*本示例将第一张工作表上筛选区域中第一列的筛选的 Operator 属性值设置为 xlFilterValues。*/
function test() {
    Worksheets.Item(1).AutoFilter.Filters.Item(1).Operator = xlFilterValues
}
```
