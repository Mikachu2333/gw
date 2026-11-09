# MailMergeFieldName.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **MailMergeFieldName** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中最后一个域名称的索引。*/
function test() {
    let fieldNames = ActiveDocument.MailMerge.DataSource.FieldNames
    alert(fieldNames.Item(fieldNames.Count).Index)
}
```


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源中名为“Name”域的索引。*/
function test() {
    let fieldNames = Documents.Item(1).MailMerge.DataSource.FieldNames
    alert(fieldNames.Item("Name").Index)
}
```
