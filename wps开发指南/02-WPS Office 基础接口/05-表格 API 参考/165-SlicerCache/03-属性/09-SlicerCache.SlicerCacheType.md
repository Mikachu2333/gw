# SlicerCache.SlicerCacheType

返回切片器缓存的类型：切片器 (xlSlicer) 或时间线 (xlTimeline) 。只读。



## 语法

express.**SlicerCacheType**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

[XlSlicerCacheType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSlicerCacheType)

## 示例


```JavaScript
/*本示例显示活动工作簿第二个切片器缓存的类型是否为 xlSlicer。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches(2).SlicerCacheType == xlSlicer)
}
```


```JavaScript
/*本示例判断第一张工作簿中名为“切片器_id”的切片器缓存的类型，并通知用户。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches("切片器_id")
    switch (slcCache.SlicerCacheType) {
        case xlSlicer:
            alert("切片器缓存类型为切片器")
            break
        case xlTimeline:
            alert("切片器缓存类型为时间线")
            break
    }
}
```
