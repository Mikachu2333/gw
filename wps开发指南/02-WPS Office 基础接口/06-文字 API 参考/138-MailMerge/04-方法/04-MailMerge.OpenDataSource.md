# MailMerge.OpenDataSource

将一个数据源附加到指定文档，如果该文档不是主文档，则将变成主文档。



## 语法

express.**OpenDataSource(Name, Format, ConfirmConversions, ReadOnly, LinkToSource, AddToRecentFiles, PasswordDocument, PasswordTemplate, Revert, WritePasswordDocument, WritePasswordTemplate, Connection, SQLStatement, SQLStatement1, OpenExclusive, SubType)**

express   一个代表 **MailMerge** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 数据源文件名。可以指定一个 Query（.qry）文件，而不必指定数据源、连接字符串及查询字符串。 |
| Format | 可选 | any | 用于打开文档的文件转换器。可以是 **WdOpenFormat** 常量之一。要指定外部文件格式，可将 **OpenFormat** 属性与 **FileConverter** 对象结合使用以确定用于该参数的值。 |
| ConfirmConversions | 可选 | any | 如果该属性值为 **True** ，则当文件不是 WPS 格式时，将显示 **“转换文件”** 对话框。 |
| ReadOnly | 可选 | any | 如果该属性值为 **True** ，则以只读方式打开数据源。 |
| LinkToSource | 可选 | any | 如果该属性值为 **True** ，则在每次打开主文档时都执行由 _Connection_ 和 _SQLStatement_ 指定的查询。 |
| AddToRecentFiles | 可选 | any | 如果该属性值为 **True** ，则将文件名添加到 **“文件”** 菜单底部最近使用过的文件列表中。 |
| PasswordDocument | 可选 | any | 用于打开数据源的密码（请参阅“说明”）。 |
| PasswordTemplate | 可选 | any | 用于打开模板的密码（请参阅“说明”）。 |
| Revert | 可选 | any | 控制如果 _Name_ 是已打开的文档的文件名时应执行的操作。如果该属性值为 **True** ，则放弃对已打开文档进行的所有尚未保存的改动，并将重新打开该文档。如果该属性值为 **False** ，则激活已打开的文档。 |
| WritePasswordDocument | 可选 | any | 用于保存对文档进行的更改的密码（请参阅“说明”）。 |
| WritePasswordTemplate | 可选 | any | 用于保存对模板进行的更改的密码（请参阅“说明”）。 |
| Connection | 可选 | any | 在其中执行 _SQLStatement_ 指定的查询的区域（请参阅“说明”）。 |
| SQLStatement | 可选 | any | 定义查询选项以检索数据（请参阅“说明”）。 |
| SQLStatement1 | 可选 | any | 如果查询字符串超过 255 个字符，则 _SQLStatement_ 指定字符串的第一部分，_SQLStatement1_ 指定第二部分 （请参阅“说明”）。 |
| OpenExclusive | 可选 | any | 如果该属性值为 **True** ，则以独占方式打开。 |
| SubType | 可选 | any | 可以是 **WdMergeSubType** 常量之一。 |

## 返回值

void

## 说明


要确定 ODBC 连接和查询字符串，请手动设置查询选项，并使用 **QueryString** 属性返回连接字符串。下表包含了一些常用的 SQL 关键字。

| 关键字 | 说明          |
| --- | ----------- |
| DSN | ODBC 数据源的名称 |
| UID | 用户登录 ID     |
| PWD | 用户指定的密码     |
| DBQ | 数据库文件名      |
| FIL | 文件类型        |

要指示 WPS 使用与早期版本 WPS 中相同的连接方法（即用于 WPS Office Access 和 WPS Office ET 数据源的动态数据交换（DDE）），请使用 `SubType:=wdMergeSubTypeWord2000`。

指定区域的方式取决于检索数据的方式。例如：

* 当通过开放式数据库连接（Open Database Connectivity, ODBC）检索数据时，请指定一个连接字符串。
* 当使用动态数据交换（DDE）检索 ET 的数据时，请指定一个已命名的区域。
 **安全性** 动态数据交换（DDE）是一种不安全的陈旧技术。如果可能，请使用比 DDE 更加安全的技术，如对象链接和嵌入（OLE）。
* 当检索 Access 的数据时，请指定单词“Table”或“Query”，后面紧接表格或查询名称。

 **安全性** 请避免使用内置系统管理员（ **sa** ）登录帐户。使系统管理员成为 sysadmin 固定服务器角色，让他们使用自己的帐户登录。只有在没有其他方法登录时才使用 **sa** 。为了防止通过 **sa** 登录帐户进行未经授权的访问，应该为该帐户分配唯一的强密码。

 **安全性** 请尽可能使“Windows 验证”（也称为信任连接），该验证使用 Windows 用户帐户连接 SQL Server。当用户通过 Windows 用户帐户进行连接时，SQL Server 将使用 Windows 操作系统中的信息来验证帐户名称和密码。只有在服务器管理员将 SQL Server 配置为使用“Windows 验证”时，才能使用“Windows 验证”。如果“Windows 验证”不可用，请避免保存用户的 ' 登录信息。用户在每次登录时都输入登录信息才是更安全的做法。

请避免在应用程序中使用硬编码的密码。如果过程中要求输入密码，请从用户处请求密码，并将密码作为变量存储起来，然后在代码中使用该变量。



## 示例


```JavaScript
/*本示例新建一个主文档并附加“example_1”表，该表来自名为“example.mdb”的 Access 数据库。*/
function test() {
    let mailMerge = Documents.Add().MailMerge
    mailMerge.MainDocumentType = wdFormLetters
    mailMerge.OpenDataSource("D:\\示例\\example.mdb", null, null, null, true, false, null, null, null, null, null, "example_1")
}
```


```JavaScript
/*本示例创建一个新的主文档，并附加名为“example1.xlsx”的 WPS 表格。Connection 参数用来检索名为“example”的区域中的数据。*/
function test() {
    let mailMerge = Documents.Add().MailMerge
    mailMerge.MainDocumentType = wdCatalog
    mailMerge.OpenDataSource("D:\\示例\\example1.xlsx", null, null, true, null, null, null, null, null, null, null, "example")
}
```


```JavaScript
/*本示例将名为“example.mdb”的 Access 数据库附加到活动文档。SQLStatement 参数用来在 example_1 表中选择记录。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    mailMerge.MainDocumentType = wdFormLetters
    let connectString = "Provider=Microsoft.ACE.OLEDB.12.0;      Data Source=D:/示例/example.mdb;"
    mailMerge.OpenDataSource("D:\\示例\\example.mdb", null, null, null, null, null, null, null, null, null, null, connectString, "SELECT * FROM `example_1`")
}
```
