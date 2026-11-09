# PivotCache.UpgradeOnRefresh

包含有关是否在下一次刷新时升级 PivotCache 及所有连接的数据透视表的信息。可读/写 **Boolean** 类型。



## 语法

express.**UpgradeOnRefresh**

express   一个代表 **PivotCache** 对象的变量。

## 类型

boolean

## 说明


默认值是 **False** 。如果将 PivotCache 的此属性设置为 **True** ，则在刷新附加到该 PivotCache 的任何数据透视表时，会在刷新过程中将 PivotCache 以及所有附加的数据透视表升级为 **xlPivotTableVersion12** (PivotTable.Version = 3)。

如果将 PivotCache 的此属性设置为 **False** ，则在刷新附加到该 PivotCache 的任何数据透视表时，将不会更改 PivotCache 的版本以及所有附加的数据透视表的版本。它们都与刷新前的版本保持一致。

如果在兼容模式下保存为 .xlsx 等高版本文件格式，则会将工作簿中所有 PivotCache 的此属性设置为 **True** 。



## 示例


```JavaScript
/*本示例显示在刷新第一张工作表中第一张数据透视表缓存时，是否升级该 PivotCache 以及所有附加的数据透视表信息。*/
function test() {
    alert(Worksheets.Item(1).PivotTables(1).PivotCache().UpgradeOnRefresh)
}
```


```JavaScript
/*本示例为第一张工作簿的第一个数据缓存刷新时，升级该 PivotCache 以及所有附加的数据透视表信息。*/
function test() {
    Workbooks.Item(1).PivotCaches().Item(1).UpgradeOnRefresh = true
}
```
