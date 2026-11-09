# MailMergeDataSource 对象

代表邮件合并操作中的邮件合并数据源。

## 说明


使用 **DataSource** 属性可返回 **MailMergeDataSource** 对象。


## 示例


```JavaScript
/*本示例显示与活动文档相关联的数据源的名称。*/
function test() {
    if (ActiveDocument.MailMerge.DataSource.Name !== "") {
        alert(ActiveDocument.MailMerge.DataSource.Name)
    }
}
```


```JavaScript
/*本示例显示与活动文档相关联的数据源中的域名。*/
function test() {
    let fieldNames = ActiveDocument.MailMerge.DataSource.FieldNames
    for (let i = 1; i <= fieldNames.Count; i++) {
        alert(fieldNames.Item(i).Name)
    }
}
```


```JavaScript
/*本示例打开与“example.docx”相关联的数据源，然后显示该数据源中最后一个记录的“Address”域的值。*/
function test() {
    let mailMerge = Documents.Item("example.docx").MailMerge
    mailMerge.EditDataSource()
    mailMerge.DataSource.ActiveRecord = wdLastDataSourceRecord
    alert(mailMerge.DataSource.DataFields.Item("Address").Value)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/Close) | 关闭指定的邮件合并数据源。 |
| [SetAllErrorFlags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/SetAllErrorFlags) | 将邮件合并数据源中的所有记录标记为地址域中包含无效数据。 |
| [SetAllIncludedFlags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/SetAllIncludedFlags) | 包括或排除邮件合并中某个数据源的标记记录。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/ActiveRecord) | 返回或设置活动邮件合并记录。可以是查询结果中的有效记录编号或者 **WdMailMergeActiveRecord** 常量之一。 |
| [ConnectString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/ConnectString) | 返回指定邮件合并数据源的连接字符串。 **String** 类型，只读。 |
| [DataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/DataFields) | 返回一个 **[MailMergeDataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataFields/obj)** 集合，该集合代表指定邮件合并数据源中的域。只读。 |
| [FieldNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/FieldNames) | 返回一个 **[MailMergeFieldNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldNames/obj)** 集合，该集合代表指定邮件合并数据源中所有域的名称。只读。 |
| [FirstRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/FirstRecord) | 返回或设置邮件合并操作中合并的第一个记录的编号。 **Long** 类型，可读写。 |
| [HeaderSourceName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/HeaderSourceName) | 返回附加到指定的邮件合并主文档的域名源的路径和文件名。 **String** 类型，只读。 |
| [HeaderSourceType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/HeaderSourceType) | 返回一个值，该值表明为邮件合并操作提供域名源的方式。 **WdMailMergeDataSource** 类型，只读。 |
| [Included](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/Included) | 如果邮件合并中包含记录，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [InvalidAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/InvalidAddress) | 当该属性值为 **True** 时，如果邮件合并数据源中记录的地址域中包含无效数据，则 WPS 标记该记录。 **Boolean** 类型，可读写。 |
| [InvalidComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/InvalidComments) | 如果 **[InvalidAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/InvalidAddress)** 属性为 **True** ，则返回或设置说明无效地址错误的 **String** 类型值。可读写。 |
| [LastRecord](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/LastRecord) | 返回或设置邮件合并操作中要合并的最后一个记录的编号。 **Long** 类型，可读写。 |
| [MappedDataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/MappedDataFields) | 返回一个 **[MappedDataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataFields/obj)** 集合，该集合代表可用于 WPS 的映射数据字段（映射数据字段：代表常用信息的字段，例如，“First Name”。如果数据源中包含“First Name”字段或其变体（例如，“FName”），该数据源字段自动映射到相应的映射数据字段。）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [QueryString](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/QueryString) | 返回或设置查询字符串（SQL 语句），该语句用于从邮件合并数据源中检索数据子集。 **String** 类型，可读写。 |
| [RecordCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/RecordCount) | 返回一个 **Long** 对象，该对象代表数据源中的记录数。只读。 |
| [TableName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/TableName) | 返回一个带有 SQL 查询的 **String** 类型的值，用于从邮件合并文档附加的数据源文件检索记录。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/Type) | 返回邮件合并数据源的类型。只读 **[WdMailMergeDataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdMailMergeDataSource)** 类型。 |