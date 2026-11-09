# MailMergeDataSource.InvalidComments

如果 **[InvalidAddress](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/InvalidAddress)** 属性为 **True** ，则返回或设置说明无效地址错误的 **String** 类型值。可读写。



## 语法

express.**InvalidComments**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

string

## 说明


使用 **[SetAllErrorFlags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/SetAllErrorFlags)** 方法可设置数据源中所有记录的 **InvalidAddress** 和 **InvalidComments** 属性。



## 示例


```JavaScript
/*本示例遍历邮件合并数据源中的记录，并检查邮政编码域（本例中的第七个域）是否少于五位数字。如果某记录的邮政编码少于五位数字，则从邮件合并中排除该记录，将地址标记为无效，并添加有关为何要排除该记录的注释。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    let intCount = 0
    dataSource.ActiveRecord = wdFirstRecord
    do {
        intCount++
        // Counts the number of digits in the postal code field and if
        // it is less than 5, the record is excluded from the mail merge,
        // marked as having an invalid address, and given a comment
        // describing why the postal code was removed
        if (dataSource.DataFields.Item(7).Value.length < 5) {
            dataSource.Included = false
            dataSource.InvalidAddress = true
            dataSource.InvalidComments = "The ZIP Code for this record has fewer than five digits. It will be removed from the mail merge process."
        }
        dataSource.ActiveRecord = wdNextRecord
    }
    while (intCount < dataSource.ActiveRecord)
}
```


```JavaScript
/*本示例设置附加到第一个文档的邮件合并数据源的第一条邮件合并记录的无效地址的错误描述。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    dataSource.ActiveRecord = wdFirstRecord
    dataSource.InvalidComments = "example_1"
}
```
