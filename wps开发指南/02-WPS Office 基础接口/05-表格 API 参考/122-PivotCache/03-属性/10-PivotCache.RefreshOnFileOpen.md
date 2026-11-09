# PivotCache.RefreshOnFileOpen

如果每次打开工作簿时，数据透视表缓存都自动进行更新，则为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**RefreshOnFileOpen**

express   一个代表 **PivotCache** 对象的变量。

## 类型

boolean

## 说明


在 JavaScript 中使用 **[Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/member/Open)** 方法打开工作簿时，不会自动刷新查询表和数据透视表。请在打开工作簿后，使用 **[Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCache/member/Refresh)** 方法刷新数据。



## 示例


```JavaScript
/*本示例使工作簿每次打开时自动更新数据透视表缓存。*/
function test() {
    ActiveWorkbook.PivotCaches().Item(1).RefreshOnFileOpen = true
}
```


```JavaScript
/*本示例显示工作簿每次打开时是否自动更新第一张工作表上数据透视表缓存。*/
function test() {
    let pvtCache = Worksheets.Item(1).Range("I1").PivotTable.PivotCache()
    alert(pvtCache.RefreshOnFileOpen)
}
```
