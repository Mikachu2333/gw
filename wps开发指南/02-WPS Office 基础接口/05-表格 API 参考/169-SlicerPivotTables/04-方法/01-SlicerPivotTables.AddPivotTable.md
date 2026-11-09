# SlicerPivotTables.AddPivotTable

将对数据透视表的引用添加到 **[SlicerPivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerPivotTables/obj)** 集合。



## 语法

express.**AddPivotTable(PivotTable)**

express   一个代表 **SlicerPivotTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PivotTable | 必选 | PivotTable | 一个代表要添加的数据透视表的 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。 |

## 返回值

void

## 说明


当数据透视表添加到 **SlicerPivotTables** 集合时，可按其父级 **[SlicerCache](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SlicerCache/obj)** 及其关联的切片器进行筛选。



## 示例


```JavaScript
/*本示例将工作表 Sheet1 上数据透视表 pivot2 添加到活动工作簿上名为“切片器_id”的切片器缓存中。*/
function test() {
    let pvtTables = ActiveWorkbook.SlicerCaches("切片器_id").PivotTables
    pvtTables.AddPivotTable(Worksheets.Item("Sheet1").PivotTables("pivot2"))
}
```


```JavaScript
/*本示例将工作表 Sheet1 上数据透视表 pivot3 添加到与活动工作表上数据透视表 pivot1 的第一个切片器关联的切片器缓存中。*/
function test() {
    let pvtTables = ActiveSheet.PivotTables("pivot1").Slicers.Item(1).SlicerCache.PivotTables
    pvtTables.AddPivotTable(Worksheets.Item("Sheet1").PivotTables("pivot3"))
}
```
