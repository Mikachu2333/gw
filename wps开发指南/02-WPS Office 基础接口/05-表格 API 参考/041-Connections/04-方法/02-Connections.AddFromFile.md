# Connections.AddFromFile

添加从指定文件的连接。



## 语法

express.**AddFromFile(Filename, CreateModelConnection, ImportRelationships)**

express   一个代表 **Connections** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 文件的名称。 |
| CreateModelConnection | 可选 | any | 指定是否创建与模型的连接。 |
| ImportRelationships | 可选 | any | 指定是否导入连接关系。 |

## 返回值

WorkbookConnection

## 示例


```JavaScript
/*本示例在第一张工作簿上添加指定文件的连接，并显示连接的类型是否为 xlConnectionTypeOLEDB。*/
function test() {
    let workbookcn = Workbooks.Item(1).Connections.AddFromFile("D:\\示例\\test1.accdb", false, true)
    alert(workbookcn.Type == xlConnectionTypeOLEDB)
}
```


```JavaScript
/*此示例在活动工作簿上添加从指定文件的连接，并基于该连接创建数据透视缓存，然后基于该数据透视缓存新建一个数据透视表。*/
function test() {
    let workbookcn = ActiveWorkbook.Connections.AddFromFile("D:\\示例\\test1.accdb", true, true)
    let pvtCache = ActiveWorkbook.PivotCaches().Create(xlExternal, workbookcn, xlPivotTableVersion15)
    pvtCache.CreatePivotTable(Range("A1"), "PivotTable1")
    let pvtTable = ActiveSheet.PivotTables("PivotTable1")
    pvtTable.SmallGrid = false
    pvtTable.PivotCache.RefreshPeriod = 0
    let pvtField1 = pvtTable.PivotFields("name")
    pvtField1.Orientation = xlRowField
    pvtField1.Position = 1
    let pvtField2 = pvtTable.PivotFields("score")
    pvtField2.Orientation = xlDataField
    pvtField2.Position = 1
}
```
