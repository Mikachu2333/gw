# PivotCache.SourceType

返回 **[XlPivotTableSourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableSourceType)** 值，它代表所发布项目的类型。



## 语法

express.**SourceType**

express   一个代表 **PivotCache** 对象的变量。

## 类型

XlPivotTableSourceType

## 示例


```JavaScript
/*本示例显示活动工作表中数据透视表缓存的数据源类型是否为 xlDatabase。*/
function test() {
    alert(ActiveSheet.Range("I1").PivotTable.PivotCache().SourceType == xlDatabase)
}
```


```JavaScript
/*本示例判断活动工作簿中第一个数据缓存的数据源类型是否为 xlPivotTable， 并通知用户。*/
function test() {
    if (ActiveWorkbook.PivotCaches().Item(1).SourceType == xlPivotTable) {
        alert("缓存的数据源类型是 xlPivotTable")
    } else {
        alert("缓存的数据源类型不是 xlPivotTable")
    }
}
```
