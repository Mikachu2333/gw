# PivotCache.EnableRefresh

如果用户可刷新数据透视表高速缓存或查询表，则为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableRefresh**

express   一个代表 **PivotCache** 对象的变量。

## 类型

boolean

## 说明


如果 **EnableRefresh** 属性设为 **False** ，则忽略 **[RefreshOnFileOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/RefreshOnFileOpen)** 属性。

对于 OLAP （OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源，将此属性设置为 **False** 可禁用更新。



## 示例


```JavaScript
/*本示例将第一张工作表上的第一张数据透视表设置为不能进行刷新。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotCache().EnableRefresh = false
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表缓存是否可刷新。*/
function test() {
    let pvtCache = ActiveSheet.Range("I1").PivotTable.PivotCache()
    alert(pvtCache.EnableRefresh)
}
```
