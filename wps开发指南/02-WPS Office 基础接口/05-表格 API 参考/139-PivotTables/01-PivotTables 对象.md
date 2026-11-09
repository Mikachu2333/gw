# PivotTables 对象

指定的工作表中所有 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象的集合。

## 说明


因为对数据透视表进行编程可能会很复杂，所以，最方便的做法是将数据透视表操作录制到宏中，然后再修订所录制的宏代码。

使用 **[PivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PivotTables)** 方法可返回 **PivotTables** 集合。


## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表的数量。*/
function test() {
    alert(Worksheets.Item("Sheet1").PivotTables().Count)
}
```


```JavaScript
/*本示例基于工作表 Sheet1 中第一张数据透视表的缓存在新工作表上创建新数据透视表。*/
function test() {
    Worksheets.Add().Activate()
    let pvtCache = Worksheets.Item("Sheet1").PivotTables(1).PivotCache()
    ActiveSheet.PivotTables().Add(pvtCache, Range("A1"), "student")
}
```
使用 **PivotTables** (_index_)（其中 _index_ 是数据透视表索引号或名称）可返回一个 **PivotTable** 对象。



```JavaScript
/*本示例将工作表 Sheet1 中第一个数据透视表上的 score 字段设置为行字段。*/
function test() {
    Worksheets.Item("sheet1").PivotTables().Item(1).PivotFields("score").Orientation = xlRowField
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTables/member/Add) | 添加新的数据透视表。返回一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTables/member/Item) | 从集合中返回一个对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTables/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |