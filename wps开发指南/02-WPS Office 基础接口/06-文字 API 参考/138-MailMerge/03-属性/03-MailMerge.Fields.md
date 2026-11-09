# MailMerge.Fields

返回一个只读 **MailMergeFields** 集合，该集合代表指定文档中的所有邮件合并字段。



## 语法

express.**Fields**

express   一个代表 **MailMerge** 对象的变量。

## 类型

MailMergeFields

## 示例


```JavaScript
/*本示例显示活动文档中邮件合并字段的数量。*/
function test() {
    alert(ActiveDocument.MailMerge.Fields.Count)
}
```


```JavaScript
/*本示例显示活动文档中第一个邮件合并字段的域代码。*/
function test() {
    alert(ActiveDocument.MailMerge.Fields.Item(1).Code.Text)
}
```
