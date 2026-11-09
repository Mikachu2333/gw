# QueryTable.Refresh

更新外部数据区域 ( **QueryTable** )。



## 语法

express.**Refresh(BackgroundQuery)**

express   一个代表 **QueryTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| BackgroundQuery | 可选 | any | 只用于基于 SQL 查询结果的 QueryTables。如果为 True，则在数据库建立连接并提交查询之后，将控制返回给过程。QueryTable 在后台进行更新。如果为 False，则在所有数据被取回到工作表之后，将控制返回给过程。如果没有指定该参数，则由 BackgroundQuery 属性的设置决定查询模式。 |

## 返回值

Boolean

## 说明


下列说明适用于基于 SQL 查询结果的 **QueryTable** 对象。

 **Refresh** 方法使 ET 连接到 **QueryTable** 对象的数据源，执行 SQL 查询，并将数据返回到基于 **QueryTable** 对象的区域。除非调用该方法，否则 **QueryTable** 对象不与数据源通信。

当与 OLE DB 或 ODBC 数据源建立连接时，ET 使用由 **Connection** 属性指定的连接字符串。如果指定的连接字符串缺少必需的值，将显示对话框，提示用户提供必需的信息。如果 **DisplayAlerts** 属性为 **False** ，则不显示对话框， **Refresh** 方法失败并导致“连接信息无效”异常。

在 ET 建立一个成功的连接之后，将存储完整的连接字符串，这样，以后在同一编辑会话中调用 **Refresh** 方法时就不会再显示提示。通过检查 **Connection** 属性的值可以获得完整的连接字符串。

完成数据库连接后，将检查 SQL 查询的有效性。如果该查询无效， **Refresh** 方法将失败并导致“SQL 语法错误”异常。

如果查询需要参数，则必须在调用 **Refresh** 方法之前，用参数绑定信息初始化 **Parameters** 集合。如果未绑定足够的参数， **Refresh** 方法将失败并导致“参数错误”异常。如果将参数设置为提示用户输入参数值，则无论 **DisplayAlerts** 属性的设置如何，都会向用户显示对话框。如果用户取消参数对话框， **Refresh** 将停止并返回 **False** 。如果对 **Parameters** 绑定了额外的参数，则这些额外参数将被忽略。

如果成功地完成或启动查询，则 **Refresh** 方法返回 **True** ；如果用户取消连接或参数对话框，该方法返回 **False** 。

要查看取回的行数是否超过了工作表中的可用行数，请检查 **FetchedRowOverflow** 属性。每次调用 **Refresh** 方法之前，该属性都将被初始化。



## 示例


```JavaScript
/*此示例在第一张工作表上添加一张查询表并刷新。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Worksheets.Item(1).QueryTables.Add(connection, Range("I1"), "SELECT * FROM `student`")
    qyTable.Refresh()
}
```


```JavaScript
/*本示例对活动工作表上包含 B1 单元格的查询表进行设置，使表中不显示字段名称并刷新该查询表。*/
function test() {
    let qyTable = Application.ActiveSheet.Range("B1").QueryTable
    qyTable.FieldNames = false
    qyTable.Refresh(false)
}
```
