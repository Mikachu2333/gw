# PivotTable.PivotCache

返回一个 **PivotCache** 对象，该对象表示指定数据透视表的缓存。只读。



## 语法

express.**PivotCache()**

express   一个代表 **PivotTable** 对象的变量。

## 返回值

PivotCache

## 示例


```JavaScript
/*本示例为第一张工作表上的数据透视表Pivot1的缓存在构造时进行优化。*/
function test() {
    Worksheets.Item(1).PivotTables("Pivot1").PivotCache().OptimizeCache = true
}
```


```JavaScript
/*本示例刷新活动工作表上的所有数据透视表的缓存。*/
function test() {
    for (let i = 1; i <= ActiveSheet.PivotTables().Count; i++) {
        ActiveSheet.PivotTables(i).PivotCache().Refresh()
    }
}
```
