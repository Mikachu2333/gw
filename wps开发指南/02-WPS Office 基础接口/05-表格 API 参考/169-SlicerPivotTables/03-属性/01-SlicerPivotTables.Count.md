# SlicerPivotTables.Count

返回集合中对象的数目。



## 语法

express.**Count**

express   一个代表 **SlicerPivotTables** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表的第一个切片器的缓存关联的数据透视表的数量。*/
function test() {
    let sliCache = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache
    alert(sliCache.PivotTables.Count)
}
```
