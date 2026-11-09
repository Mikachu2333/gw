# MailMerge.CreateDataSource

创建一个 Kingsoft WPS 文档，该文档使用表格保存邮件合并数据。



## 语法

express.**CreateDataSource(Name, PasswordDocument, WritePasswordDocument, HeaderRecord, MSQuery, SQLStatement, SQLStatement1, Connection, LinkToSource)**

express   一个代表 **MailMerge** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 可选 | any | 新数据源的路径名和文件名。 |
| PasswordDocument | 可选 | any | 打开新数据源所需的密码。 |
| WritePasswordDocument | 可选 | any | 保存对数据源的修改所需的密码。 |
| HeaderRecord | 可选 | any | 域名记录所需的域名。如果省略该参数，则使用标准的域名记录：“称谓、名字、姓氏、职务、单位、地址 1、地址 2、市/县、省/市/自治区、邮政编码、国家/地区、住宅电话、办公电话”。要分隔域名，可使用在 **控制面板** 的 **“区域设置”** 中指定的列表分隔符。 |
| MSQuery | 可选 | any | 如果该属性值为 **True** ，则启动 Kingsoft Query（如果已经安装）。此时将忽略 _Name_、_PasswordDocument_ 和 _HeaderRecord_参数将被忽略。 |
| SQLStatement | 可选 | any | 定义查询选项以检索数据。 |
| SQLStatement1 | 可选 | any | 如果查询字符串超过 255 个字符，则 _SQLStatement_ 指定字符串的第一部分，_SQLStatement1_ 指定第二部分。 |
| Connection | 可选 | any | 将在其中执行由 _SQLStatement_ 指定的查询的区域。 |
| LinkToSource | 可选 | any | 如果该属性值为 **True** ，则在每次打开主文档时都执行由 _Connection_ 和 _SQLStatement_ 指定的查询。 |

## 返回值

void

## 说明


使用 **CreateDataSource** 方法时，WPS文字 将新的数据源附加到指定文档中，该指定文档变成主文档（如果它还不是主文档）。

为 _Connection_ 参数指定区域的方式取决于检索数据的方式。例如：

* 当通过 ODBC 检索数据时，可指定一个连接字符串。
* 当使用动态数据交换 (DDE) 检索 WPS表格 的数据时，请指定一个已命名的区域。  
* 当检索 WPS Office Access 的数据时，请指定单词“Table”或“Query”，后面紧接表格或查询名称。

### 安全性

请避免在应用程序中使用硬编码的密码。如果过程中要求输入密码，请从用户处请求密码，并将密码作为变量存储起来，然后在代码中使用该变量。有关如何做到这一点的建议最佳操作，请参阅 WPS Office 解决方案开发人员安全注意事项。



## 示例


```JavaScript
/*本示例创建一个新的名为“Data.doc”的数据源文档，并将该数据源附加到活动文档。新数据源包含一个五列的表格，其中包含 HeaderRecord 指定的域名。*/
function test() {
    ActiveDocument.MailMerge.CreateDataSource("D:\\Data.doc", null, null, "Name, Address, City, State, Zip")
}
```


```JavaScript
/*本示例创建一个新的名为“example.docx”的数据源文档，包含HeaderRecord 指定的域名，并且设置打开新数据源所需的密码和保存对数据源的修改所需的密码。*/
function test() {
    let mailMerge = Documents.Item(1).MailMerge
    mailMerge.CreateDataSource("D:\\example.docx", "Y6dh!et5", "Y6dh!et5", "Name, Address, City, State, Zip")
}
```
