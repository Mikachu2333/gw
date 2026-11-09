# MailMergeDataField.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **MailMergeDataField** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中最后一个域的索引。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    alert(dataFields.Item(dataFields.Count).Index)
}
```


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源中名为“Address”的域的索引。*/
function test() {
    let dataFields = Documents.Item(1).MailMerge.DataSource.DataFields
    alert(dataFields.Item("Address").Index)
}
```
