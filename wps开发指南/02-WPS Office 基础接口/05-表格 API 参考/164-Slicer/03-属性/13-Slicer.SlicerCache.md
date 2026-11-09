# Slicer.SlicerCache

返回与切片器关联的 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 对象。只读。



## 语法

express.**SlicerCache**

express   一个代表 **Slicer** 对象的变量。

## 类型

SlicerCache

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表的第三个切片器的缓存中可见项集合的第三项的名称。*/
function test() {
    let sliCache = Worksheets.Item("Sheet1").PivotTables(1).Slicers.Item(3).SlicerCache
    alert(sliCache.VisibleSlicerItems.Item(3).Name)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表的第一个切片器的缓存中第五个切片器项的值。*/
function test() {
    let sliItem = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache.SlicerItems(5)
    alert(`第五个切片器项的值：${sliItem.Value}`)
}
```
