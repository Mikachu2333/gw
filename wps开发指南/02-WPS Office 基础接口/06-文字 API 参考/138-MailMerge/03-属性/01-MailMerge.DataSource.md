# MailMerge.DataSource

返回一个 **[MailMergeDataSource](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/obj)** 对象，该对象引用附加到邮件合并主文档的数据源。只读。



## 语法

express.**DataSource**

express   一个代表 **MailMerge** 对象的变量。

## 类型

MailMergeDataSource

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源的名称。*/
function test() {
    if (ActiveDocument.MailMerge.DataSource.Name !== '') {
        alert(ActiveDocument.MailMerge.DataSource.Name)
    }
}
```


```JavaScript
/*本示例显示附加到“example.docx”的邮件合并数据源的下一条记录。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
    Documents.Item("example.docx").MailMerge.ViewMailMergeFieldCodes = false
    Documents.Item("example.docx").MailMerge.DataSource.ActiveRecord = wdNextRecord
}
```
