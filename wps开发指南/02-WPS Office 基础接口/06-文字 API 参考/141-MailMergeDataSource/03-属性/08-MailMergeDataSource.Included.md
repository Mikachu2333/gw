# MailMergeDataSource.Included

如果邮件合并中包含记录，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**Included**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

boolean

## 说明


使用 **[SetAllIncludedFlags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataSource/member/SetAllIncludedFlags)** 方法在邮件合并数据源中包括或排除所有记录。



## 示例


```JavaScript
/*本示例遍历邮件合并数据源中的记录，并检查邮政编码域（本例中的第七个域）是否少于五位数字。如果某记录的邮政编码少于五位数字，则从邮件合并中排除该记录，并将地址标记为无效。*/
function test() {
    let dataSource = ActiveDocument.MailMerge.DataSource
    let intCount = 0

    // Set the active record equal to the first included record in the data source
    dataSource.ActiveRecord = wdFirstRecord
    do {
        intCount++

        // Set the condition that field six must be greater than or equal to five
        if (dataSource.DataFields.Item(7).Value.length < 5) {

            // Exclude the record if field six is less than five
            dataSource.Included = false

            // Mark the record as containing an invalid address field
            dataSource.InvalidAddress = true

            // Specify the comment attached to the record explaining why the record was excluded from the mail merge
            dataSource.InvalidComments = "The ZIP Code for this record has fewer than five digits. It will be removed from the mail merge process."
        }
        // Move the record to the next record in the data source
        dataSource.ActiveRecord = wdNextRecord
    }
    // End the loop when the counter variable equals the number of records in the data source
    while (intCount < dataSource.RecordCount)
}
```


```JavaScript
/*本示例显示附加到第一个文档的邮件合并数据源的第一条记录是否包含在邮件合并中。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    dataSource.ActiveRecord = wdFirstRecord
    alert(dataSource.Included)
}
```
