# MailMerge.MailAddressFieldName

返回或设置包含电子邮件地址的域名，如果邮件合并的目标文档是电子邮件，就使用该地址。 **String** 类型，可读写。



## 语法

express.**MailAddressFieldName**

express   一个代表 **MailMerge** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将第一个文档与其附加数据文档合并，并将结果发送给保存在电子邮件合并域中的电子邮件地址。*/
function test() {
    let mailMerge = Documents.Item(1).MailMerge
    mailMerge.MailAddressFieldName = "Email"
    mailMerge.Destination = wdSendToEmail
    mailMerge.Execute()
}
```


```JavaScript
/*本示例显示第一个文档的邮件合并目标为电子邮件时使用的电子邮件地址的名称。*/
function test() {
    alert(Documents.Item(1).MailMerge.MailAddressFieldName)
}
```
