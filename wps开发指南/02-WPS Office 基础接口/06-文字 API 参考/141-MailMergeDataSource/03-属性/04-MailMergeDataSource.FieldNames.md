# MailMergeDataSource.FieldNames

返回一个 **[MailMergeFieldNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFieldNames/obj)** 集合，该集合代表指定邮件合并数据源中所有域的名称。只读。



## 语法

express.**FieldNames**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

MailMergeFieldNames

## 示例


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中第一个域的名称。*/
function test() {
    alert(ActiveDocument.MailMerge.DataSource.FieldNames.Item(1).Name)
}
```


```JavaScript
/*本示例使用 arr 数组保存附加到活动文档的邮件合并数据源中每个合并域的名称。*/
function test() {
    let fieldNames = ActiveDocument.MailMerge.DataSource.FieldNames
    let arr = []
    for (let i = 1; i <= fieldNames.Count; i++) {
        arr.push(fieldNames.Item(i).Name)
    }
}
```
