# SlicerPivotTables.Item

从集合中返回一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **SlicerPivotTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

PivotTable

## 示例


```JavaScript
/*本示例显示活动工作簿第一个切片器缓存关联的第一个数据透视表的名称。*/
function test() {
    let pvtTables = ActiveWorkbook.SlicerCaches(1).PivotTables
    alert(pvtTables.Item(1).Name)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表的第一个切片器的缓存关联的第二个数据透视表的数据源。*/
function test() {
    let sliCache = ActiveSheet.Range("I1").PivotTable.Slicers.Item(1).SlicerCache
    alert(sliCache.PivotTables.Item(2).SourceData)
}
```
