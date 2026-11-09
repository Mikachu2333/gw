# View.MailMergeDataView

如果在指定窗口中显示邮件合并数据，而不显示邮件合并域，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MailMergeDataView**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 说明


如果指定窗口不是主控文档，则会产生一个错误。



## 示例


```JavaScript
/*本示例判断如果活动文档至少包含一个邮件合并域，则显示附加数据源的第一个记录的邮件合并数据。*/
function test() {
    if (ActiveDocument.MailMerge.Fields.Count >= 1) {
        ActiveDocument.MailMerge.DataSource.ActiveRecord = 1
        ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
        ActiveDocument.ActiveWindow.View.MailMergeDataView = true
    }
}
```


```JavaScript
/*本示例在查看邮件合并域和查看结果数据之间切换。*/
function test() {
    ActiveDocument.ActiveWindow.View.ShowFieldCodes = false
    ActiveDocument.ActiveWindow.View.MailMergeDataView = !ActiveDocument.ActiveWindow.View.MailMergeDataView
}
```
