# SlicerCache.SourceName

返回切片器所连接到的数据源的名称。只读



## 语法

express.**SourceName**

express   一个代表 **SlicerCache** 对象的变量。

## 类型

string

## 说明


对于基于工作簿数据的切片器 ( **SlicerCache** . **[SourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/SourceType)** \= **xlDatabase** ) 或基于非 OLAP 外部数据的切片器（ **SlicerCache** . **SourceType** \= **xlExternal** 且 **SlicerCache** . **[OLAP](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/member/OLAP)** \= **False** ），则返回源数据中相应列的名称。

对于 OLAP 切片器 ( **SlicerCache** . **OLAP** \= **True** )，则返回切片器所基于的层次结构的 MDX 唯一名称。



## 示例


```JavaScript
/*本示例显示活动工作簿上名为“切片器_id”的切片器缓存所连接到的数据源的名称。*/
function test() {
    alert(ActiveWorkbook.SlicerCaches("切片器_id").SourceName)
}
```


```JavaScript
/*本示例显示第一张工作簿上第一个切片器缓存所连接到的数据源的名称。*/
function test() {
    let slcCache = Workbooks.Item(1).SlicerCaches(1)
    alert(`数据源名称：${slcCache.SourceName}`)
}
```
