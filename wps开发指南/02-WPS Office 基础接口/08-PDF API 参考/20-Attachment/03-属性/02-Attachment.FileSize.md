# Attachment.FileSize

获取附件文件大小（字节）。 **Number** 类型，只读。

## 语法

express.**FileSize**

express   一个代表 **Attachment** 对象的变量。

## 类型

number

## 示例

```JavaScript
var att = app.ActiveDocument.Attachments.Item(1);
console.log("文件大小: " + att.FileSize + " 字节");
```
