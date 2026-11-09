# SlicerPivotTables.RemovePivotTable

从 **[SlicerPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/obj)** 集合中删除对数据透视表的引用。



## 语法

express.**RemovePivotTable(PivotTable)**

express   一个代表 **SlicerPivotTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PivotTable | 必选 | any | 表示要删除的数据透视表的 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象，或者数据透视表在集合中的名称或索引。 |

## 返回值

void

## 说明


从 **SlicerPivotTables** 集合中删除数据透视表时，将不能再按其父级 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 以及与之关联的切片器进行筛选。



## 示例


```JavaScript
/*本示例从与活动工作簿上名为“切片器_name”的切片器关联的缓存中删除 pivot2。*/
function test() {
    let pvtTables = ActiveWorkbook.SlicerCaches("切片器_name").PivotTables
    pvtTables.RemovePivotTable("pivot2")
}
```


```JavaScript
/*本示例从与活动工作表上数据透视表的第一个切片器关联的缓存中删除 pivot3。*/
function test() {
    let sliCache = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache
    sliCache.PivotTables.RemovePivotTable(ActiveSheet.PivotTables("pivot3"))
}
```
