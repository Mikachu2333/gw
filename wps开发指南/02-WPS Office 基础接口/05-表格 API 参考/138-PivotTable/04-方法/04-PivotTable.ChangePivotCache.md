# PivotTable.ChangePivotCache

更改指定 **PivotTable** 的 **PivotCache** 。



## 语法

express.**ChangePivotCache(PivotCache)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PivotCache | 必选 | any | 一个 PivotTable 或 PivotCache 对象，该对象代表指定 PivotTable 的新 PivotCache。 |

## 返回值

void

## 说明


 **ChangePivotCache** 方法只能用于使用工作表中存储的数据作为数据源的 **PivotTable** 。如果将 **ChangePivotCache** 方法与连接到外部数据源的 **PivotTable** 一起使用，将发生运行时错误。



## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表的缓存修改为数据透视表2的缓存*/
function test() {
    ActiveSheet.PivotTables(1).ChangePivotCache("数据透视表2")
}
```


```JavaScript
/*本示例显示数据透视表2缓存的数据源；将数据透视表2的缓存改为数据透视表1的缓存，并显示其缓存的数据源*/
function test() {
    alert(Worksheets.Item(1).PivotTables("数据透视表2").PivotCache().SourceData)
    Worksheets.Item(1).PivotTable("数据透视表2").ChangePivotCache("数据透视表1")
    alert(Worksheets.Item(1).PivotTables("数据透视表2").PivotCache().SourceData)
}
```
