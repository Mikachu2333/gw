# MailMergeField.Next

返回邮件合并域集合中的下一个邮件合并域。只读。



## 语法

express.**Next**

express   一个代表 **MailMergeField** 对象的变量。

## 类型

MailMergeField

## 示例


```JavaScript
/*本示例判断如果活动文档上邮件合并域的数量大于2，则选中第一个邮件合并域的下一个邮件合并域。*/
function test() {
    let fields = ActiveDocument.MailMerge.Fields
    if (fields.Count > 2) {
        fields.Item(1).Next.Select()
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个邮件合并域的下一个邮件合并域是否处于锁定状态。*/
function test() {
    let field = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    alert(field.Next.Locked)
}
```
