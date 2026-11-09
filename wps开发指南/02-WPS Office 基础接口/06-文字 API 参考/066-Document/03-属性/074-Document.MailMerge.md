# Document.MailMerge

返回一个 **[MailMerge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMerge/obj)** 对象，该对象代表指定文档的邮件合并功能。只读。



## 语法

express.**MailMerge**

express   一个代表 **Document** 对象的变量。

## 类型

MailMerge

## 说明


不管指定文档是否是一个邮件合并主文档， **MailMerge** 对象都有效。用 **State** 属性可确定邮件合并操作当前的状态。



## 示例


```JavaScript
/*如果活动文档是一个带有附加数据源的主文档，则本示例执行邮件合并。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    if (mailMerge.State == wdMainAndDataSource) {
        mailMerge.Execute()
    }
}
```


```JavaScript
/*此示例将主文档与记录 1 到 4 合并，并将合并文档发送到打印机。*/
function test() {
    let mailmerge = ActiveDocument.MailMerge
    mailmerge.DataSource.FirstRecord = 1
    mailmerge.DataSource.LastRecord = 4
    mailmerge.Destination = wdSendToPrinter
    mailmerge.SuppressBlankLines = true
    mailmerge.Execute()
}
```
