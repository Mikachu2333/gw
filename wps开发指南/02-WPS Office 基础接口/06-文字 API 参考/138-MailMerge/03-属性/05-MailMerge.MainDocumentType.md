# MailMerge.MainDocumentType

返回或设置邮件合并主文档的类型。 **WdMailMergeMainDocType** 类型，可读写。



## 语法

express.**MainDocumentType**

express   一个代表 **MailMerge** 对象的变量。

## 类型

WdMailMergeMainDocType

## 示例


```JavaScript
/*本示例新建一个文档，并将其分类设为主文档以进行邮件合并操作。*/
function test() {
    let document = Documents.Add()
    document.MailMerge.MainDocumentType = wdCatalog
}
```


```JavaScript
/*本示例判断活动文档是否是用于邮件合并操作的主文档，并通知用户。*/
function test() {
    if (ActiveDocument.MailMerge.MainDocumentType == wdNotAMergeDocument) {
        alert("Not a mail merge main document")
    } else {
        alert("Document is a mail merge main document.")
    }
}
```
