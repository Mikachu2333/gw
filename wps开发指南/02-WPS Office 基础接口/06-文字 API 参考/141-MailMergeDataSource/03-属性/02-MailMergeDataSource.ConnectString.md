# MailMergeDataSource.ConnectString

返回指定邮件合并数据源的连接字符串。 **String** 类型，只读。



## 语法

express.**ConnectString**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例创建一个新的主文档，并从名为“example.mdb”的 Access 数据库附加“example_1”表，并显示连接字符串。*/
function test() {
    let mailMerge = Documents.Add().MailMerge
    mailMerge.MainDocumentType = wdFormLetters
    mailMerge.OpenDataSource("D:\\example.mdb", null, null, null, true, false, null, null, null, null, "example_1")
    alert(mailMerge.DataSource.ConnectString)
}
```


```JavaScript
/*本示例将所选内容文档部分的文本替换为附加到第一个文档的邮件合并数据源的连接字符串。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    Selection.Range.Text = dataSource.ConnectString
}
```
