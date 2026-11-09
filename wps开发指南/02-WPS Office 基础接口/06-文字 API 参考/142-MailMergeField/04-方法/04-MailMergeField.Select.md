# MailMergeField.Select

选择指定的邮件合并域。



## 语法

express.**Select()**

express   一个代表 **MailMergeField** 对象的变量。

## 返回值

void

## 说明


使用此方法之后，可用 **Selection** 属性处理所选项目。



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
/*本示例选中第一个文档上第二个邮件合并域，并显示选中内容字符的数量。*/
function test() {
    let field = Application.Documents.Item(1).MailMerge.Fields.Item(2)
    field.Select()
    alert(Selection.Characters.Count)
}
```
