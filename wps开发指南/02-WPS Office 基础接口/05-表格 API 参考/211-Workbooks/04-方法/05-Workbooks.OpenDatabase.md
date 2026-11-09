# Workbooks.OpenDatabase

返回一个 **Workbook** 对象，该对象代表一个数据库。



## 语法

express.**OpenDatabase(Filename, CommandText, CommandType, BackgroundQuery, ImportDataAs)**

express   一个代表 **Workbooks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Filename | 必选 | string | 包含数据库位置和文件名的连接字符串。 |
| CommandText | 可选 | any | 查询的命令文本。 |
| CommandType | 可选 | any | 查询的命令类型。指定 **[XlCmdType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCmdType)** 枚举的常量之一： **xlCmdCube** 、 **xlCmdList** 、 **xlCmdSql** 、 **xlCmdTable** 和 **xlCmdDefault** 。 |
| BackgroundQuery | 可选 | any | 此参数是一个 Variant 数据类型，但您只能传递布尔值。如果传递 **True** ，将在后台（异步）执行查询。默认值为 **False** 。 |
| ImportDataAs | 可选 | any | 此参数使用 **[XlImportDataAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlImportDataAs)** 枚举值之一。此枚举的两个值为 **xlPivotTableReport** 和 **xlQueryTable** 。传递这两个值之一以便以数据透视表或查询表的形式返回数据。默认值为 **xlQueryTable** 。 |

## 返回值

Workbook

## 示例


```JavaScript
/*本示例中，ET 打开了“northwind.mdb”文件。本示例假定“northwind.mdb”文件存在于 D 盘上。*/
function test() {
    //Open the Northwind database in the background and create a PivotTable
    Workbooks.OpenDatabase("D:\\Northwind.mdb", null, null, true, xlPivotTableReport)
}
```


```JavaScript
/*本示例中，ET 打开了“人员.mdb”文件,以查询表的形式返回数据。本示例假定“人员.mdb”文件存在于 D 盘上。*/
function test() {
    Workbooks.OpenDatabase("D:\\人员.mdb", null, null, true, xlQueryTable)
}
```
