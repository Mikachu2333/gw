# MappedDataField 对象

作为包含在 WPS文字 中的字段，映射数据字段代表通常使用的名称或地址信息，如“First Name”。如果数据源包含一个“First Name”字段或一个变量（例如“First\_Name”、“FirstName”、“First”或“FName”），则数据源中的字段将自动映射到 WPS 中与之相应的数据字段。如果文档或模板与一个以上的数据源合并，映射数据字段使之不必在文档中重新输入与数据库中的字段名称一致的数据字段。

## 说明


使用 **MappedDataFields** (_Index_) 可返回一个 **MappedDataField** 对象，其中 _Index_ 是映射数据域的类型。


## 示例


```JavaScript
/*本示例显示“wdFirstName”映射数据域的数据源域名。该示例假定当前文档是一个邮件合并文档。“DataFieldName”属性返回空字符串值则表明映射数据域没有映射到数据源的域。*/
function test() {
    let dataField = ActiveDocument.MailMerge.DataSource.MappedDataFields.Item(wdFirstName)
    if (dataField.DataFieldName !== "") {
        alert(`The mapped data field 'FirstName' is mapped to ${dataField.DataFieldName}.`)
    } else {
        alert("The mapped data field 'FirstName' is not mapped to any of the data fields in your data source.")
    }
}
```


```JavaScript
/*本示例显示WPS包含的 wdFirstName 映射数据字段映射到的邮件合并数据源中的相应域编号。*/
function test() {
    let dataField = Documents.Item(1).MailMerge.DataSource.MappedDataFields.Item(wdAddress1)
    alert(dataField.DataFieldIndex)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [DataFieldIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataField/member/DataFieldIndex) | 返回或设置一个 **Long** 类型的值，该值代表映射数据字段（映射数据字段：代表常用信息的字段，例如，“First Name”。如果数据源中包含“First Name”字段或其变体（例如，“FName”），该数据源字段自动映射到相应的映射数据字段。）映射到的邮件合并数据源中的相应域编号。可读写。 |
| [DataFieldName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataField/member/DataFieldName) | 设置或返回一个 **String** 类型的值，该值代表映射数据域（映射数据字段：代表常用信息的字段，例如，“First Name”。如果数据源中包含“First Name”字段或其变体（例如，“FName”），该数据源字段自动映射到相应的映射数据字段。）映射到的邮件合并数据源中域的名称。可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataField/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataField/member/Name) | 返回指定对象的名称。 **String** 类型，只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MappedDataField/member/Value) | 返回当前记录的邮件合并数据域或映射数据域的内容。 **String** 类型，只读。 |