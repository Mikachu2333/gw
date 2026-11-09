# MailMergeDataSource.ActiveRecord

返回或设置活动邮件合并记录。可以是查询结果中的有效记录编号或者 **WdMailMergeActiveRecord** 常量之一。



## 语法

express.**ActiveRecord**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

WdMailMergeActiveRecord

## 说明


活动记录号是由当前查询选项生成的查询结果中的记录的位置。同样，此记录号不一定是记录在数据源中的位置。



## 示例


```JavaScript
/*本示例在活动文档中隐藏邮件合并域代码，以便在主文档中显示合并数据，然后数据源中下一条记录变成活动记录。*/
function test() {
    if (ActiveDocument.MailMerge.MainDocumentType !== wdNotAMergeDocument) {
        let mailMerge = ActiveDocument.MailMerge
        mailMerge.ViewMailMergeFieldCodes = false
        mailMerge.DataSource.ActiveRecord = wdNextRecord
    }
}
```


```JavaScript
/*本示例显示 example.docx 中的活动记录的数字位置。*/
function test() {
    let mailMerge = Documents.Item("example.docx").MailMerge
    if (mailMerge.State == wdMainAndDataSource || mailMerge.State == wdMainAndSourceAndHeader) {
        alert(mailMerge.DataSource.ActiveRecord)
    }
}
```
