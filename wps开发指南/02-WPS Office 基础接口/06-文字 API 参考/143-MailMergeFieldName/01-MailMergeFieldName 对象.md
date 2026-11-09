# MailMergeFieldName 对象

代表数据源中的一个邮件合并域名称。 **MailMergeFieldName** 对象是 **[MailMergeFieldNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldNames/obj)** 集合的一个成员。 **MailMergeFieldNames** 包含邮件合并数据源中的所有数据域名称。

## 说明


使用 **FieldNames** (_Index_) 可返回一个 **MailMergeFieldName** 对象，其中 _Index_ 为索引号。索引号代表域在邮件合并数据源中的位置。

不能在 **MailMergeFieldNames** 集合中添加域。数据源中的域名会自动包含在 **MailMergeFieldNames** 集合中。


## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中最后一个域的名称。*/
function test() {
    let fieldNames = ActiveDocument.MailMerge.DataSource.FieldNames
    alert(fieldNames.Item(fieldNames.Count).Name)
}
```


```JavaScript
/*本示例新建一个文档，并将新文档上新建段落的文本设置为附加到文档“example.docx”的邮件合并数据源中所有域的名称和域名称的索引。*/
function test() {
    let document = Documents.Add()
    let fieldNames = Documents.Item("example.docx").MailMerge.DataSource.FieldNames
    for (let i = 1; i <= fieldNames.Count; i++) {
        let range = document.Paragraphs.Add().Range
        range.Text = fieldNames.Item(i).Index + "\t" + fieldNames.Item(i).Name
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldName/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldName/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |