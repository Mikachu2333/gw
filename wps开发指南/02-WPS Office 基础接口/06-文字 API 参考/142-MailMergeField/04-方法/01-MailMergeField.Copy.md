# MailMergeField.Copy

将指定的邮件合并域复制到剪贴板上。



## 语法

express.**Copy()**

express   一个代表 **MailMergeField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中第一个邮件合并域复制到剪贴板上。*/
function test() {
    let field = ActiveDocument.MailMerge.Fields.Item(1)
    field.Copy()
}
```


```JavaScript
/*本示例判断如果第一个文档中包含一个名为“example”的邮件合并域，则将该邮件合并域复制到剪贴板上。*/
function test() {
    let fields = Application.Documents.Item(1).MailMerge.Fields
    for (let i = 1; i <= fields.Count; i++) {
        if (fields.Item(i).Code.Text.includes("example", 0)) {
            fields.Item(i).Copy()
        }
    }
}
```
