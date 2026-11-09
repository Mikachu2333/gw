# MailMergeFields 对象

 **[MailMergeField](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeField/obj)** 对象的集合，这些对象代表文档中邮件合并相关域。

## 说明


使用 **Fields** 属性可返回 **MailMergeFields** 集合。

使用 **Add** 方法可向 **MailMergeFields** 集合添加合并域。

使用 **Fields** (_Index_) 可返回一个 **MailMergeField** 对象，其中 _Index_ 为索引号。

 **MailMergeFields** 集合还有其他可用于添加与邮件合并操作相关的域的方法，例如 **AddAsk** 和 **AddFillIn** 。


## 示例


```JavaScript
/*本示例在活动文档最后一个邮件合并域后面添加一个 NEXT 域。*/
function test() {
    let mailMergeFields = ActiveDocument.MailMerge.Fields
    mailMergeFields.Item(mailMergeFields.Count).Select()
    Selection.MoveRight(wdWord, 1, wdMove)
    mailMergeFields.AddNext(Selection.Range)
}
```


```JavaScript
/*本示例将选定内容替换为名为 MiddleInitial 的邮件合并域。*/
function test() {
    ActiveDocument.MailMerge.Fields.Add(Selection.Range, "MiddleInitial")
}
```


```JavaScript
/*本示例显示活动文档中第一个邮件合并域的域代码。*/
function test() {
    alert(ActiveDocument.MailMerge.Fields.Item(1).Code.Text)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFields/member/Add) | 返回一个 **MailMergeField** 对象，该对象代表添加到数据源文档中的邮件合并域。 |
| [AddNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFields/member/AddNext) | 将一个 NEXT 域添加到邮件合并主文档。返回一个 **MailMergeField** 对象。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFields/member/Item) | 返回集合中的单个 **MailMergeField** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/MailMergeFields/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中邮件合并域的数目。只读。 |