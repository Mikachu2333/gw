# MailMergeField 对象

代表文档中的单个邮件合并域。 **MailMergeDataField** 对象是 **[MailMergeDataFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeDataFields/obj)** 集合的一个成员。 **MailMergeDataFields** 集合包含文档中的所有邮件合并相关域。

## 说明


使用 **Fields** (_Index_) 可返回一个 **MailMergeField** 对象，其中 _Index_ 为索引号。


## 示例


```JavaScript
/*本示例显示活动文档中第一个邮件合并域的域代码。*/
function test() {
    alert(ActiveDocument.MailMerge.Fields.Item(1).Code.Text)
}
```
使用 **Add** 方法可向 **MailMergeFields** 集合添加合并域。



```JavaScript
/*本示例将活动文档中所选内容替换为一个 MiddleInitial 合并域，并复制该邮件合并域的上一个邮件合并域，然后粘贴到新建段落的文档部分。*/
function test() {
    let field = ActiveDocument.MailMerge.Fields.Add(Selection.Range, "MiddleInitial")
    field.Previous.Copy()
    Application.Documents.Item(1).Paragraphs.Add().Range.Paste()
}
```
 **MailMergeFields** 集合还有其他可用于添加与邮件合并操作相关的域的方法，例如 **AddAsk** 和 **AddFillIn** 。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Copy) | 将指定的邮件合并域复制到剪贴板上。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Cut) | 从文档中删除指定的邮件合并域，并将其移动到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Delete) | 删除指定的邮件合并域。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Select) | 选择指定的邮件合并域。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Code](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Code) | 返回一个代表域代码的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象。可读写。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Locked) | 如果指定域已被锁定，则该属性值为 **True** 。可读写 **Boolean** 类型。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Next) | 返回邮件合并域集合中的下一个邮件合并域。只读。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Previous) | 返回邮件合并域集合中的上一个邮件合并域。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/member/Type) | 返回域的类型。只读 **[WdFieldType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdFieldType)** 类型。 |