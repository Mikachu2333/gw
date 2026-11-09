# MailMergeDataFields 对象

 **[MailMergeDataField](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataField/obj)** 对象的集合，这些对象代表邮件合并数据源中的数据域。

## 说明


使用 **DataFields** 属性可返回 **MailMergeDataFields** 集合。


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
不能在 **MailMergeDataFields** 集合中添加域。当向数据源添加一个数据域时，该域将自动包含在 **MailMergeDataFields** 集合中。使用 **EditDataSource** 方法可编辑数据源的内容。



```JavaScript
/*本示例判断如果附加到活动文档的邮件合并数据源的类型为wdMergeInfoFromWord，则将该数据源的第三个域的值赋值给活动文档上第一个表格的新增列中。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    if (dataSource.Type == wdMergeInfoFromWord) {
        ActiveDocument.MailMerge.EditDataSource()
        let table = ActiveDocument.Tables.Item(1)
        table.Columns.Add()
        table.Cell(1, table.Columns.Count).Range.Text = dataSource.DataFields.Item(3).Value
    }
}
```
使用 **DataFields** (_Index_) 可返回一个 **MailMergeDataField** 对象，其中 _Index_ 是数据域名称或索引号。索引号代表数据域在邮件合并数据源中的位置。



```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中名为“Name”的域的值。*/
function test() {
    alert(ActiveDocument.MailMerge.DataSource.DataFields.Item("Name").Value)
}
```


```JavaScript
/*本示例显示附加到活动文档的邮件合并数据源中第一个域的名称。*/
function test() {
    alert(ActiveDocument.MailMerge.DataSource.DataFields.Item(1).Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataFields/member/Item) | 返回集合中的单个 **MailMergeDataField** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataFields/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中邮件合并数据域的数目。只读。 |