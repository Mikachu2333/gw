# SlicerCache.VisibleSlicerItems

返回一个 **[SlicerItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerItems/obj)** 集合，该集合包含指定的切片器缓存中所有可见项的集合。只读。



## 语法

express.**VisibleSlicerItems**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

SlicerItems

## 说明


 **VisibleSlicerItems** 属性只适用于基于数据透视表，且该数据透视表又基于工作簿区域或列表的切片器 ( **SlicerCache** . **SourceType** \= **xlDatabase** )。对于连接到 OLAP 数据源的切片器 ( **SlicerCache** . **OLAP** \= **True** )，如果试图访问其 **VisibleSlicerItems** 属性，将会生成运行时错误。



## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_score”的切片器缓存可见项的数量。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_score").VisibleSlicerItems.Count)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一个切片器缓存的可见项集合的第一项的名称。*/
function test() {
    let vsScItems = Workbooks.Item(1).SlicerCaches(1).VisibleSlicerItems
    alert(vsScItems.Item(1).Name)
}
```
