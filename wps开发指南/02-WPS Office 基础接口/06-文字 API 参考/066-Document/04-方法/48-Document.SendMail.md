# Document.SendMail

打开一个邮件窗口以通过 Exchange 发送指定文档。



## 语法

express.**SendMail()**

express   一个代表 **Document** 对象的变量。

## 返回值

void

## 说明


使用 **SendMailAttach** 属性可控制文档是作为邮件窗口中的文本还是作为附件发送。



## 示例


```JavaScript
/*本示例将活动文档作为邮件的附件发送。*/
function test() {
    Application.Options.SendMailAttach = true
    Application.ActiveDocument.SendMail()
}
```


```JavaScript
/*本示例打开一个邮件窗口以通过 Exchange 发送名为“example.docx”的文档。*/
function test() {
    let document = Documents.Open("D:\\示例\\example.docx")
    document.SendMail()
}
```
