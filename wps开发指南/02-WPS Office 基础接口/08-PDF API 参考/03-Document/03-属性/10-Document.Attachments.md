# Document.Attachments

获取文档的附件集合。 **Attachments** 类型，只读。

## 语法

express.**Attachments**

express   一个代表 **Document** 对象的变量。

## 类型

Attachments

## 示例

```JavaScript
var attachments = app.ActiveDocument.Attachments;
console.log("附件数量: " + attachments.Count);
```
