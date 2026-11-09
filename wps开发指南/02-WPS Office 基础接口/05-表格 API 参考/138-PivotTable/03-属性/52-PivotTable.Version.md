# PivotTable.Version

返回一个 **[XlPivotTableVersionList](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPivotTableVersionList)** 值，它代表 ET 版本号。



## 语法

express.**Version**

express   一个代表 **PivotTable** 对象的变量。

## 类型

XlPivotTableVersionList

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的版本是否为“xlPivotTableVersion10”。*/
function test() {
    alert(ActiveSheet.PivotTables(1).Version == xlPivotTableVersion10)
}
```


```JavaScript
/*本示例判断工作表 Sheet1 中数据透视表的版本是否为“xlPivotTableVersion11”，并通知用户。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I1").PivotTable
    if (pvtTable.Version == xlPivotTableVersion11) {
        alert("版本号是“xlPivotTableVersion11”")
    } else {
        alert("版本号不是“xlPivotTableVersion11”")
    }
}
```
