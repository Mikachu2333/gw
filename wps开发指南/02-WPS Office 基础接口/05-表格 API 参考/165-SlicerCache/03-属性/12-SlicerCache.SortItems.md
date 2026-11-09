# SlicerCache.SortItems

返回或设置是否对切片器中的项排序。可读/写



## 语法

express.**SortItems**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

**[XlSlicerSort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSlicerSort)** 

## 说明


此属性的默认设置为 **xlSlicerSortAscending** 。

 **SlicerCache** 对象的 **SortItems** 属性只适用于基于连接到工作簿区域或列表的数据透视表的切片器 ( **SlicerCache** . **SourceType** \= **xlDatabase** )。对于连接到 OLAP 数据源的切片器 ( **SlicerCache** . **[OLAP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/OLAP)** \= **True** )，如果试图访问其 **SortItems** 属性，那么将生成运行时错误。对于 OLAP 数据源，请改用 **[SlicerCacheLevel](#TODO)** 对象的 **[SortItems](#TODO)** 属性。



## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_name”的切片器缓存中项的排序顺序是否为 xlSlicerSortAscending。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_name").SortItems == xlSlicerSortAscending)
}
```


```JavaScript
/*本示例将第一张工作簿上名为“切片器_id”的切片器缓存中项的排序顺序设置为 xlSlicerSortDescending。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches("切片器_id")
    slcCache.SortItems = xlSlicerSortDescending
}
```
