# MappedDataFields 对象

 **MappedDataField** 对象的集合，该集合代表 WPS 中所有可用的映射数据字段 （映射数据字段：代表常用信息的字段，例如，“First Name”。如果数据源中包含“First Name”字段或其变体（例如，“FName”），该数据源字段自动映射到相应的映射数据字段。）。

## 说明


使用 **MailMergeDataSource** 对象的 **MappedDataFields** 属性可返回 **MappedDataFields** 集合。


## 示例


```JavaScript
/*本示例创建一个可在 WPS 中使用的映射数据域和被映射的数据源域的制表符列表。本示例假定第一个文档是邮件合并文档，并且数据源域有相应的映射数据域。*/
function test() {
    let document = Documents.Add()

    // Add leader tab to new document
    document.Paragraphs.TabStops.Add(InchesToPoints(3.5), wdTabLeaderDots)
    let dataSource = Documents.Item(1).MailMerge.DataSource

    // Insert heading paragraph for tabbed columns
    document.Content.InsertAfter("Word Mapped Data Field\tData Source Field")
    let intCount = 0
    do {
        intCount++

        // Insert Word mapped data field name and the corresponding data source field name
        let dataField = dataSource.MappedDataFields.Item(intCount)
        document.Content.InsertAfter(`${dataField.Name}\t${dataField.DataFieldName}`)

        // Insert paragraph
        document.Content.InsertParagraphAfter()
    } while (intCount < dataSource.MappedDataFields.Count)
}
```


```JavaScript
/*本示例显示WPS包含的最后一个映射数据域的索引。*/
function test() {
    let dataFields = Documents.Item(1).MailMerge.DataSource.MappedDataFields
    alert(dataFields.Item(dataFields.Count).Index)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataFields/member/Item) | 返回单个 **MappedDataField** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataFields/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中映射数据域的数目。只读。 |