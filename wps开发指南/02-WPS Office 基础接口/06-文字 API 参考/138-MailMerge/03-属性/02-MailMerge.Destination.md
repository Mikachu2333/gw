# MailMerge.Destination

返回或设置邮件合并结果的目标。 **WdMailMergeDestination** 类型，可读写。



## 语法

express.**Destination**

express   一个代表 **MailMerge** 对象的变量。

## 类型

WdMailMergeDestination

## 示例


```JavaScript
/*本示例将邮件合并操作的结果发送到一个新文档。*/
function test() {
    let mailMerge = ActiveDocument.MailMerge
    if (mailMerge.State == wdMainAndDataSource) {
        mailMerge.Destination = wdSendToNewDocument
        mailMerge.Execute()
    }
}
```


```JavaScript
/*本示例显示第一个文档是否将结果发送到打印机。*/
function test() {
    alert(Documents.Item(1).MailMerge.Destination == wdSendToPrinter)
}
```
