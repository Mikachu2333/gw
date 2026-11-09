# MailMergeDataSource.FirstRecord

返回或设置邮件合并操作中合并的第一个记录的编号。 **Long** 类型，可读写。



## 语法

express.**FirstRecord**

express   一个代表 **MailMergeDataSource** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例将记录 1 到 3 与主文档合并，并将合并后的文档发送到打印机。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    mailMerge.DataSource.FirstRecord = 1
    mailMerge.DataSource.LastRecord = 3
    mailMerge.Destination = wdSendToPrinter
    mailMerge.Execute()
}
```


```JavaScript
/*本示例显示第一个文档在邮件合并操作中合并的第一个记录的编号。*/
function test() {
    let dataSource = Documents.Item(1).MailMerge.DataSource
    alert(dataSource.FirstRecord)
}
```
