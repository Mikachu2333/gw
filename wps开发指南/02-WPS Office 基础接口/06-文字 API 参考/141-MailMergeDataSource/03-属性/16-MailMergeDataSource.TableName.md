# MailMergeDataSource.TableName

返回一个带有 SQL 查询的 **String** 类型的值，用于从邮件合并文档附加的数据源文件检索记录。只读。



## 语法

express.**TableName**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

string

## 说明


如果表格名称未知或不适用于当前数据源，则该属性可能为空。



## 示例


```JavaScript
/*本示例检查“example_1”表是否为附加数据源中表的名称。如果不是，则将“example_1”表附加到“example”数据库。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    if (!mailMerge.DataSource.TableName.includes("example_1")) {
        mailMerge.OpenDataSource("D:\\example.mdb", null, null, null, true, false, null, null, null, null, "example_1")
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源用于检索记录的SQL查询的字符串。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    alert(dataSource.TableName)
}
```
