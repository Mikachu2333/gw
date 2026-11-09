# Attachment.Name

获取附件名称。 **String** 类型，只读。

## 语法

express.**Name**

express   一个代表 **Attachment** 对象的变量。

## 类型

string

## 示例

```JavaScript
var att = app.ActiveDocument.Attachments.Item(1);
console.log("附件名称: " + att.Name);
```
