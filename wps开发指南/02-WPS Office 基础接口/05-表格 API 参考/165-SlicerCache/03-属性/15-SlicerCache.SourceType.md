# SlicerCache.SourceType

返回切片器所连接到的数据源的类型。只读



## 语法

express.**SourceType**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

[XlPivotTableSourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableSourceType)

## 说明


只支持 **xlDatabase** 和 **xlExternal** 数据源类型。



## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_id”的切片器缓存所连接到的数据源的类型是否为 xlDatabase。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_id").SourceType == xlDatabase)
}
```


```JavaScript
/*本示例判断第一张工作簿上第二个切片器缓存所连接到的数据源的类型是否为xlPivotTable，并通知用户。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches(2)
    if (slcCache.SourceType == xlPivotTable) {
        alert("数据源的类型是 xlPivotTable")
    } else {
        alert("数据源的类型不是 xlPivotTable")
    }
}
```
