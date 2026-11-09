# MappedDataField.DataFieldName

设置或返回一个 **String** 类型的值，该值代表映射数据域（映射数据字段：代表常用信息的字段，例如，“First Name”。如果数据源中包含“First Name”字段或其变体（例如，“FName”），该数据源字段自动映射到相应的映射数据字段。）映射到的邮件合并数据源中域的名称。可读写。



## 语法

express.**DataFieldName**

express   一个代表 **MappedDataField** 对象的变量。

## 类型

string

## 说明


如果指定数据域没有映射到映射数据域，则返回空字符串。



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
/*本示例遍历所有映射数据字段，如果字段映射到的邮件合并数据源中的字段的名称不为空字符串，则显示该名称。*/
function test() {
    let dataFields = ActiveDocument.MailMerge.DataSource.MappedDataFields
    for (let i = 1; i <= dataFields.Count; i++) {
        let fieldName = dataFields.Item(i).DataFieldName
        if (fieldName !== "") {
            alert(fieldName)
        }
    }
}
```
