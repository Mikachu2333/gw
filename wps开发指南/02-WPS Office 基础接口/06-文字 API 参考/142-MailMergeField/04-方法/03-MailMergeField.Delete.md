# MailMergeField.Delete

删除指定的邮件合并域。



## 语法

express.**Delete()**

express   一个代表 **MailMergeField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档的第一个邮件合并域。*/
function test() {
    let field = ActiveDocument.MailMerge.Fields.Item(1)
    field.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第二个邮件合并域的域代码的文本包含“example”，则删除该邮件合并域。*/
function test() {
    let field = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    if (field.Code.Text.includes("example")) {
        field.Delete()
    }
}
```
