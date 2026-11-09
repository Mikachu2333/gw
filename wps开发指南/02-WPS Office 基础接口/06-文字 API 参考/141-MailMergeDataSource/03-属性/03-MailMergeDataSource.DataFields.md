# MailMergeDataSource.DataFields

返回一个 **[MailMergeDataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataFields/obj)** 集合，该集合代表指定邮件合并数据源中的域。只读。



## 语法

express.**DataFields**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

MailMergeDataFields

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中每个域的名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.DataFields
    for (let i = 1; i <= dataFields.Count; i++) {
        alert(dataFields.Item(i).Name)
    }
}
```


```JavaScript
/*本示例显示附加到“example.docx”的邮件合并数据源中第一个记录的名为“Name”域的值。*/
function test() {
    let dataSource = Documents.Item("example.docx").MailMerge.DataSource
    dataSource.ActiveRecord = wdFirstRecord
    alert(dataSource.DataFields.Item("Name").Value)
}
```
