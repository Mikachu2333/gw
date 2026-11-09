# PivotCaches.Create

创建新的 PivotCache。



## 语法

express.**Create(SourceType, SourceData, Version)**

express   一个代表 **PivotCaches** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SourceType | 必选 | XlPivotTableSourceType | SourceType 可以为以下 xlPivotTableSourceType 常量之一：xlConsolidation、xlDatabase 或 xlExternal。 |
| SourceData | 可选 | any | 新数据透视表缓存的数据。 |
| Version | 可选 | any | 数据透视表的版本。可以为 xlPivotTableVersionList 常量之一。 |

## 返回值

PivotCache

## 说明


使用此方法创建 PivotCache 时，不支持以下两个 **xlPivotTableSourceType** 常量： **xlPivotTable** 和 **xlScenario** 。如果提供这两个常量之一，将返回运行时错误。  

如果 *SourceType* 不为 **xlExternal** ，则 *SourceData* 参数为必需。该参数可以为 **Range** 对象（当 *SourceType* 为 **xlConsolidation** 或 **xlDatabase** 时），或为 ET 工作簿连接对象（当 *SourceType* 为 **xlExternal** 时）。

如果不提供数据透视表的版本，则版本默认为 **xlPivotTableVersion12** 。不允许使用 **xlPivotTableVersionCurrent** 常量，如果提供该常量，将返回运行时错误。



## 示例


```JavaScript
/*本示例在活动工作簿上创建新的 PivotCache ，并以该 PivotCache 创建新的数据透视表。*/
function test() {
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlDatabase, Worksheets.Item("Sheet1").Range("A1:D9"))
    pvtCache.CreatePivotTable(ActiveSheet.Range("A11"), "pivot1")
}
```


```JavaScript
/*本示例在第一张工作簿上创建新的 PivotCache ，并显示该 PivotCache 的数据源。*/
function test() {
    let pvtCache = Workbooks.Item(1).PivotCaches().Create(xlDatabase, ActiveSheet.Range("A1:C8"), xlPivotTableVersion15)
    alert(pvtCache.SourceData)
}
```
