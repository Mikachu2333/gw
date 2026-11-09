# MailMergeFieldNames.Item

返回集合中的单个 **MailMergeFieldName** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **MailMergeFieldNames** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。 |

## 返回值

MailMergeFieldName

## 示例


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源中名为“Name”域的索引。*/
function test() {
    let fieldNames = Documents.Item(1).MailMerge.DataSource.FieldNames
    alert(fieldNames.Item("Name").Index)
}
```


```JavaScript
/*本示例将所选内容文档部分的文本替换为附加到第一个文档的邮件合并数据源中最后一个域的名称。*/
function test() {
    let fieldNames = Documents.Item(1).MailMerge.DataSource.FieldNames
    Selection.Range.Text = fieldNames.Item(fieldNames.Count).Name
}
```
