# MailMergeFields.AddNext

将一个 NEXT 域添加到邮件合并主文档。返回一个 **MailMergeField** 对象。



## 语法

express.**AddNext(Range)**

express   一个代表 **MailMergeFields** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Range | 必选 | Range | NEXT 域的位置。 |

## 返回值

MailMergeField

## 说明


NEXT 域可移至下一条记录，将来自多条记录的数据合并到同一个合并文档中（例如，一页邮件标签）。



## 示例


```JavaScript
/*本示例在第一个文档的第三个邮件合并域后面添加一个 NEXT 域。*/
function test() {
    Documents.Item(1).MailMerge.Fields.Item(3).Select()
    Selection.Collapse(wdCollapseEnd)
    Documents.Item(1).MailMerge.Fields.AddNext(Selection.Range)
}
```


```JavaScript
/*本示例在活动文档所选内容后面添加一个 NEXT 域。*/
function test() {
    ActiveDocument.MailMerge.Fields.AddNext(Selection.Range)
}
```
