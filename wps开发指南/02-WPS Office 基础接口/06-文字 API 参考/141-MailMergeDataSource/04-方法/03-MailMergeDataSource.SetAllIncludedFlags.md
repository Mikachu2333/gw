# MailMergeDataSource.SetAllIncludedFlags

包括或排除邮件合并中某个数据源的标记记录。



## 语法

express.**SetAllIncludedFlags(Included)**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Included | 必选 | boolean | 如果该属性值为 **True** ，则包括邮件合并中的所有数据源记录。如果该属性值为 **False** ，则排除邮件合并中的所有数据源记录。 |

## 返回值

void

## 说明


通过使用 **Included** 属性，您可以单独设置数据源中的记录是包括还是排除在邮件合并中。



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
/*本示例将附加到第一个文档的邮件合并数据源设置为包括所有标记记录。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    dataSource.SetAllIncludedFlags(true)
}
```
