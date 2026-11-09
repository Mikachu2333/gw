# PivotCache.WorkbookConnection

建立当前工作簿与 **PivotCache** 对象之间的连接。只读。



## 语法

express.**WorkbookConnection**

express   一个代表 **PivotCache** 对象的变量。

## 类型

WorkbookConnection

## 说明


 **WorkbookConnection** 对象代表与外部数据源的连接。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个数据透视缓存连接的类型是否为 xlConnectionTypeOLEDB。*/
function test() {
    alert(ActiveWorkbook.PivotCaches().Item(1).WorkbookConnection.Type == xlConnectionTypeOLEDB)
}
```


```JavaScript
/*本示例刷新活动工作表中第一个数据透视表的缓存连接。*/
function test() {
    let pvtCache = ActiveSheet.PivotTables(1).PivotCache()
    pvtCache.WorkbookConnection.Refresh()
}
```
