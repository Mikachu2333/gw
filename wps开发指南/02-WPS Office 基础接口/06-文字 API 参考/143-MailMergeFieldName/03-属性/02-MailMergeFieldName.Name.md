# MailMergeFieldName.Name

返回指定对象的名称。 **String** 类型，只读。



## 语法

express.**Name**

express   一个代表 **MailMergeFieldName** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中第一个域的名称。*/
function test() {
    let fieldNames = ActiveDocument.MailMerge.DataSource.FieldNames
    alert(fieldNames.Item(1).Name)
}
```


```JavaScript
/*本示例将所选内容文档部分的文本替换为附加到第一个文档的邮件合并数据源中最后一个域的名称。*/
function test() {
    let fieldNames = Documents.Item(1).MailMerge.DataSource.FieldNames
    Selection.Range.Text = fieldNames.Item(fieldNames.Count).Name
}
```
