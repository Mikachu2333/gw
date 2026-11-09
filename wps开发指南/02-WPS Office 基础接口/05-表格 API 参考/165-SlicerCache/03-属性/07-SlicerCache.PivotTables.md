# SlicerCache.PivotTables

返回一个 **[SlicerPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/obj)** 集合，其中包含有关切片器缓存当前正在筛选的数据透视表的信息。只读



## 语法

express.**PivotTables**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

SlicerPivotTables

## 说明


如果与指定的 **SlicerCache** 关联的切片器未连接到任何数据透视表，那么 **PivotTables** 属性返回的 **SlicerPivotTables** 集合将为空。



## 示例


```JavaScript
/*本示例显示活动工作簿第一个切片器缓存正在筛选的第一张数据透视表的名称。*/
function test() {
    let pvtTables = ActiveWorkbook.SlicerCaches(1).PivotTables
    alert(pvtTables.Item(1).Name)
}
```


```JavaScript
/*本示例显示第一张工作簿中名为“切片器_date”的切片器缓存正在筛选的第一张数据透视表的字段的数量。*/
function test() {
    let pvtTables = Workbooks.Item(1).SlicerCaches("切片器_date").PivotTables
    alert(pvtTables.Item(1).PivotFields().Count)
}
```
