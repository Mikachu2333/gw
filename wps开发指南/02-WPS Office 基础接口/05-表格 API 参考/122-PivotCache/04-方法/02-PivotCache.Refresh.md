# PivotCache.Refresh

使指定的 PivotCache 立即重绘。



## 语法

express.**Refresh()**

express   一个代表 **PivotCache** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*此示例刷新工作簿中第一个工作表上的第一个数据透视表的数据透视表缓存。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotCache().Refresh()
}
```


```JavaScript
/*此示例刷新活动工作簿中第一个数据透视表缓存。*/
function test() {
    ActiveWorkbook.PivotCaches().Item(1).Refresh()
}
```
