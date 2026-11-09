# MappedDataField.DataFieldIndex

返回或设置一个 **Long** 类型的值，该值代表映射数据字段（映射数据字段：代表常用信息的字段，例如，“First Name”。如果数据源中包含“First Name”字段或其变体（例如，“FName”），该数据源字段自动映射到相应的映射数据字段。）映射到的邮件合并数据源中的相应域编号。可读写。



## 语法

express.**DataFieldIndex**

express   一个代表 **MappedDataField** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果指定的数据域未映射到映射数据字段，则该属性返回零。



## 示例


```JavaScript
/*本示例将数据源中的 Address 字段映射到 wdAddress1 映射数据字段中。该示例假定当前文档是一个邮件合并文档。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    dataSource.MappedDataFields.Item(wdAddress1).DataFieldIndex = dataSource.FieldNames.Item("Address").Index
}
```


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源中名为“Name”的字段是否映射到wdFirstName映射数据字段中。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    alert(dataSource.MappedDataFields.Item(wdFirstName).DataFieldIndex == dataSource.FieldNames.Item("Name").Index)
}
```
