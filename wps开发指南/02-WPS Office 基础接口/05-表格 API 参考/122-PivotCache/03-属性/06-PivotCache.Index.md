# PivotCache.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **PivotCache** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表上的第一个数据透视表缓存的索引号。*/
function test() {
    alert(Worksheets.Item(1).PivotTables(1).PivotCache().Index)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表缓存的索引号。*/
function test() {
    let pvtCache = ActiveSheet.Range("I1").PivotTable.PivotCache()
    alert(pvtCache.Index)
}
```
