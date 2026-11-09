# SlicerCache.SlicerItems

返回一个 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/obj)** 集合，该集合包含切片器缓存中所有项的集合。只读



## 语法

express.**SlicerItems**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

SlicerItems

## 说明


 **SlicerCache** 对象的 **SlicerItems** 属性只适用于基于数据透视表，且该数据透视表又基于工作簿区域或列表的切片器 ( **SlicerCache** . **SourceType** \= **xlDatabase** )，或基于数据透视表，且该数据透视表又基于关系数据源的切片器（ **SlicerCache** . **SourceType** \= **xlExternal** 且 **SlicerCache** . **[OLAP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/OLAP)** \= **False** ）。对于连接到外部 OLAP 数据源的切片器 ( **SlicerCache** . **OLAP** \= **True** )，如果试图访问其 **SlicerItems** 属性，将会生成运行时错误。对于 OLAP 数据源，请改用 **[SlicerCacheLevel](#TODO)** 对象的 **[SlicerItems](#TODO)** 属性。



## 示例


```JavaScript
/*本示例显示活动工作簿第一个切片器缓存中项的数量。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(1).SlicerItems.Count)
}
```


```JavaScript
/*本示例取消选择第一张工作簿上名为“切片器_name”的切片器缓存的第三项。*/
function test() {
    let slicerItem = Workbooks.Item(1).SlicerCaches("切片器_name").SlicerItems(3)
    slicerItem.Selected = false
}
```
