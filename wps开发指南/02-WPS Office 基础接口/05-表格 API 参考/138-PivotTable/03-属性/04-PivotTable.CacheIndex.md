# PivotTable.CacheIndex

返回或设置数据透视表缓存的索引号。 **Long** 类型，可读写。



## 语法

express.**CacheIndex**

express   一个代表 **PivotTable** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果设置 **CacheIndex** 属性，以便于数据透视表使用第二张数据透视表的高速缓存，则第一个报表的字段必须是第二个报表中字段的有效子集。



## 示例


```JavaScript
/*本示例将数据透视表“Pivot1”的缓存设置成数据透视表“Pivot2”的缓存。*/
function test() {
    Application.Worksheets.Item(1).PivotTables("Pivot1").CacheIndex = Worksheets.Item(1).PivotTables("Pivot2").CacheIndex
}
```


```JavaScript
/*本示例显示数据透视表 Pivot1 缓存的索引号*/
function test() {
    alert(Application.Worksheets.Item(1).PivotTables("Pivot1").CacheIndex)
}
```
