# Slicer.SlicerCacheType

返回切片器缓存的类型：切片器 (xlSlicer) 或时间线 (xlTimeline) 。只读。



## 语法

express.**SlicerCacheType**

express   一个代表 **Slicer** 对象的变量。

## 类型

[XlSlicerCacheType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSlicerCacheType)

## 示例


```JavaScript
/*本示例显示活动工作表上第一张数据透视表的第二个切片器的切片器缓存类型是否为 xlSlicer。*/
function test() {
    alert(ActiveSheet.PivotTables(1).Slicers.Item(2).SlicerCacheType == xlSlicer)
}
```


```JavaScript
/*本示例判断第一张工作表上数据透视表的第一个切片器的切片器缓存的类型，并通知用户。*/
function test() {
    let slicer = Worksheets.Item(1).Range("I1").PivotTable.Slicers.Item(1)
    switch (slicer.SlicerCacheType) {
        case xlSlicer:
            alert("切片器缓存类型为切片器")
            break
        case xlTimeline:
            alert("切片器缓存类型为时间线")
            break
    }
}
```
