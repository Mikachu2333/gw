# MailMergeFieldNames.Count

返回一个 **Long** 类型的值，该值代表集合中邮件合并域名称的数目。只读。



## 语法

express.**Count**

express   一个代表 **MailMergeFieldNames** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源中域名称的数量。*/
function test() {
    let fieldNames = Documents.Item(1).MailMerge.DataSource.FieldNames
    alert(fieldNames.Count)
}
```
