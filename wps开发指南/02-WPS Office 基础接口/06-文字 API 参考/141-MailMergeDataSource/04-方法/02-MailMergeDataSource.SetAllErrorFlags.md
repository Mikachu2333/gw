# MailMergeDataSource.SetAllErrorFlags

将邮件合并数据源中的所有记录标记为地址域中包含无效数据。



## 语法

express.**SetAllErrorFlags(Invalid, InvalidComment)**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Invalid | 必选 | boolean | 如果该属性值为 **True** ，则将邮件合并数据源中的所有记录标记为无效。 |
| InvalidComment | 必选 | string | 说明无效设置的文本。 |

## 返回值

void

## 说明


通过使用 **InvalidAddress** 和 **InvalidComments** 属性，可以单独标记地址域中包含无效数据的数据源记录。



## 示例


```JavaScript
/*本示例将数据源中的所有记录标记为包含无效数据的地址域，并设置备注，说明无效的原因，再从邮件合并中排除所有记录。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    let comment = "All records in the data source have only 5-digit ZIP Codes. Need 5+4 digit ZIP Codes."
    dataSource.SetAllErrorFlags(true, comment)
    dataSource.SetAllIncludedFlags(false)
}
```


```JavaScript
/*本示例将附加到第一个文档的邮件合并数据源中的所有记录标记为包含无效数据的地址域，并设置备注。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    dataSource.SetAllErrorFlags(true, "example_1")
}
```
