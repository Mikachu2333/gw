# ODBCConnection.SaveAsODC

将 ODBC 连接保存为一个 WPS Office 数据连接文件。



## 语法

express.**SaveAsODC(ODCFileName, Description, Keywords)**

express   一个代表 **ODBCConnection** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ODCFileName | 必选 | string | 保存文件的位置。 |
| Description | 可选 | any | 将保存在文件中的说明。 |
| Keywords | 可选 | any | 可用于搜索该文件的以空格分隔的关键字。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将连接保存为名为“ODCFile”的 ODC 文件。此示例假定 ODBC 连接位于活动工作簿上。*/
function test() {
    ActiveWorkbook.Connections.Item(1).ODBCConnection.SaveAsODC("D:\\ODCFile.odc")
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并将该连接保存为 ODC 连接文件。*/
function test() {
    let connectionString = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let wbConnection = ActiveWorkbook.Connections.Add2("connection_1", "example", connectionString, "SELECT * FROM `student`", xlCmdSql)
    wbConnection.ODBCConnection.SaveAsODC("D:\\ODCFile_1.odc", "ODC_example", "ODC")
}
```
