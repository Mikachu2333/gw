# QueryTable.AdjustColumnWidth

如果每次刷新指定的查询表时列宽都会自动调整为最适合的宽度，则为 **True** 。如果每次刷新时列宽不进行自动调整，则为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AdjustColumnWidth**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


最大列宽为屏幕宽度的三分之二。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **AdjustColumnWidth** 属性。



## 示例


```JavaScript
/*此示例关闭对新增查询表（第一个工作簿中的第一张工作表上）的列宽自动调整。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\test1.accdb;DefaultDir=D:\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Add(connection, Range("A1"), "SELECT * FROM `student`")
    qyTable.AdjustColumnWidth = false
    qyTable.Refresh()
}
```


```JavaScript
/*此示例显示工作表 Sheet1 上第一张查询表的列宽是否自动调整。*/
function test() {
    alert(Worksheets.Item("Sheet1").QueryTables.Item(1).AdjustColumnWidth)
}
```
