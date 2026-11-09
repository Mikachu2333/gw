# MailMergeDataSource.QueryString

返回或设置查询字符串（SQL 语句），该语句用于从邮件合并数据源中检索数据子集。 **String** 类型，可读写。



## 语法

express.**QueryString**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源的查询字符串。*/
function test() {
    alert(ActiveDocument.MailMerge.DataSource.QueryString)
}
```


```JavaScript
/*本示例设置附加到第一个文档的邮件合并数据源的查询字符串。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    dataSource.QueryString = "SELECT * FROM `example_1` WHERE `Name` = '张三'"
}
```
