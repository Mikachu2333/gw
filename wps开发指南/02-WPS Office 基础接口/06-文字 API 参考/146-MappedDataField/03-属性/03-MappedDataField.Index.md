# MappedDataField.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **MappedDataField** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示WPS包含的 wdAddress1 映射数据字段的索引。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    alert(dataSource.MappedDataFields.Item(wdAddress1).Index)
}
```


```JavaScript
/*本示例显示WPS包含的最后一个映射数据字段的索引。*/
function test() {
    let dataFields = Documents.Item(1).MailMerge.DataSource.MappedDataFields
    alert(dataFields.Item(dataFields.Count).Index)
}
```
