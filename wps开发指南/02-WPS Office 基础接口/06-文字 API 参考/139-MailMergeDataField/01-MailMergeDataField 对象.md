# MailMergeDataField 对象

代表数据源中的单个邮件合并域。 **MailMergeDataField** 对象是 **[MailMergeDataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataFields/obj)** 集合的一个成员。 **MailMergeDataFields** 集合包含邮件合并数据源中的所有数据域（例如，姓名、地址和市/县等）。

## 说明


使用 **DataFields** (_Index_) 可返回一个 **MailMergeDataField** 对象，其中 _Index_ 是数据域名称或索引号。索引号代表数据域在邮件合并数据源中的位置。


## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中名为“Name”域的值。*/
function test() {
    alert(ActiveDocument.MailMerge.DataSource.DataFields("Name").Value)
}
```


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中第一个域的名称。*/
function test() {
    alert(ActiveDocument.MailMerge.DataSource.DataFields.Item(1).Name)
}
```
不能在 **MailMergeDataFields** 集合中添加域。数据源中的所有数据域都会自动包含在 **MailMergeDataFields** 在集合中。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataField/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataField/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataField/member/Value) | 返回当前记录的邮件合并数据域或映射数据域的内容。 **String** 类型，只读。 |