# MailMerge 对象

代表 WPS 中的邮件合并功能。

## 说明


使用 **MailMerge** 属性可返回 **MailMerge** 对象。不管是否已经开始邮件合并操作， **MailMerge** 对象始终可用。使用 **State** 属性可确定邮件合并操作的状态。


## 示例


```JavaScript
/*本示例判断如果活动文档是一个带有附加数据源的主文档，则执行邮件合并。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    if (mailMerge.State == wdMainAndDataSource) {
        mailMerge.Execute()
    }
}
```


```JavaScript
/*本示例将主文档和附加数据源中的前三条记录合并，然后将结果发送到打印机。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    if (mailMerge.State == wdMainAndSourceAndHeader || mailMerge.State == wdMainAndDataSource) {
        let dataSource = mailMerge.DataSource
        dataSource.FirstRecord = 1
        dataSource.LastRecord = 3
    }
    mailMerge.Destination = wdSendToPrinter
    mailMerge.Execute()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Check](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/Check) | 模拟邮件合并操作，在出错时停止合并操作并报告每个错误。 |
| [CreateDataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/CreateDataSource) | 创建一个 Kingsoft WPS 文档，该文档使用表格保存邮件合并数据。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/Execute) | 执行指定的邮件合并操作。 |
| [OpenDataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/OpenDataSource) | 将一个数据源附加到指定文档，如果该文档不是主文档，则将变成主文档。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [DataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/DataSource) | 返回一个 **[MailMergeDataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/obj)** 对象，该对象引用附加到邮件合并主文档的数据源。只读。 |
| [Destination](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/Destination) | 返回或设置邮件合并结果的目标。 **WdMailMergeDestination** 类型，可读写。 |
| [Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/Fields) | 返回一个只读 **MailMergeFields** 集合，该集合代表指定文档中的所有邮件合并字段。 |
| [MailAddressFieldName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/MailAddressFieldName) | 返回或设置包含电子邮件地址的域名，如果邮件合并的目标文档是电子邮件，就使用该地址。 **String** 类型，可读写。 |
| [MainDocumentType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/MainDocumentType) | 返回或设置邮件合并主文档的类型。 **WdMailMergeMainDocType** 类型，可读写。 |
| [State](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/State) | 返回邮件合并操作的当前状态。 **WdMailMergeState** 类型，只读。 |
| [ViewMailMergeFieldCodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/member/ViewMailMergeFieldCodes) | 如果在邮件合并主文档中显示合并域的名称，则为 **msoCTrue** 。如果显示当前记录的信息，则为 **msoFalse** 。 **Long** 类型，可读写。 |