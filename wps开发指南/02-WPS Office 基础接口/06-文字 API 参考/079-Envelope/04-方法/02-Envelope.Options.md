# Envelope.Options

显示 **“信封选项”** 对话框。



## 语法

express.**Options()**

express   一个代表 **Envelope** 对象的变量。

## 返回值

void

## 说明


只有在文档是信封邮件合并的主文档时， **Options** 方法才有效。



## 示例


```JavaScript
/*本示例判断如果活动文档为信封邮件合并主文档，则显示“信封选项”对话框。*/
function test() {
    if (ActiveDocument.MailMerge.MainDocumentType == wdEnvelopes) {
        ActiveDocument.Envelope.Options()
    }
}
```


```JavaScript
/*本示例显示附加到第一个文档的信封的“信封选项”对话框。本示例假定第一个文档为信封邮件合并主文档。*/
function test() {
    Documents.Item(1).Envelope.Options()
}
```
