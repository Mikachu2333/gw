# MailMergeFields.Add

返回一个 **MailMergeField** 对象，该对象代表添加到数据源文档中的邮件合并域。



## 语法

express.**Add(Range, Name)**

express   一个代表 **MailMergeFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | 要在其中显示域的区域。如果该区域未折叠，那么域将替换此区域。 |
| Name | 必选 | string | 域名。 |

## 返回值

MailMergeField

## 示例


```JavaScript
/*本示例将选定内容替换为名为 MiddleInitial 的邮件合并域。*/
function test() {
    ActiveDocument.MailMerge.Fields.Add(Selection.Range, "MiddleInitial")
}
```


```JavaScript
/*本示例将第一个文档中所选内容替换为名为 Test 的邮件合并域，并复制该邮件合并域的上一个邮件合并域，然后粘贴到新建段落的文档部分。*/
function test() {
    let field = Documents.Item(1).MailMerge.Fields.Add(Selection.Range, "Test")
    field.Previous.Copy()
    Application.Documents.Item(1).Paragraphs.Add().Range.Paste()
}
```
