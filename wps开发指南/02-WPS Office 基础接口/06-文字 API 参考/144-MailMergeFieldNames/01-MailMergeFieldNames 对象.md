# MailMergeFieldNames 对象

表示 **MailMergeFieldName** 对象的集合。


## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中最后一个域名称的索引。*/
function test() {
    let fieldNames = ActiveDocument.MailMerge.DataSource.FieldNames
    alert(fieldNames.Item(fieldNames.Count).Index)
}
```


```JavaScript
/*本示例显示附加到文档“example.docx”的邮件合并数据源中所有域的名称。*/
function test() {
    let fieldNames = Documents.Item("example.docx").MailMerge.DataSource.FieldNames
    for (let i = 1; i <= fieldNames.Count; i++) {
        alert(fieldNames.Item(i).Name)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldNames/member/Item) | 返回集合中的单个 **MailMergeFieldName** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldNames/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中邮件合并域名称的数目。只读。 |