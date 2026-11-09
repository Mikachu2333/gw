# MailMergeDataSource.RecordCount

返回一个 **Long** 对象，该对象代表数据源中的记录数。只读。



## 语法

express.**RecordCount**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

number（int4 精度）

## 说明


如果 WPS 不能确定数据源中的记录数，则 **RecordCount** 属性将返回值 -1。



## 示例


```JavaScript
/*此示例循环访问数据源中的记录，并验证本示例中的邮政编码字段（字段 7）不小于 5 位。如果少于五位，则从邮件合并中删除该记录。如果要确保将定位代码添加到邮政编码中，可以将长度值从 5 更改为 10。从而，如果邮政编码少于 10 位，就将其从邮件合并中删除。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    dataSource.ActiveRecord = wdFirstRecord
    do {
        // Counts the number of digits in the postal code field and if
        // it is less than 5, the record is excluded from the mail merge,
        // marked as having an invalid address, and given a comment
        // describing why the postal code was removed
        if (dataSource.DataFields.Item(7).Value.length < 5) {
            dataSource.Included = false
            dataSource.InvalidAddress = true
            dataSource.InvalidComments = "The ZIP Code for this record has fewer than five digits. This record will be removed from the mail merge process."
        }
        if (dataSource.ActiveRecord !== dataSource.RecordCount) {
            dataSource.ActiveRecord = wdNextRecord
        }
    }
    while (dataSource.ActiveRecord < dataSource.RecordCount)
}
```


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源的记录数。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    alert(dataSource.RecordCount)
}
```
