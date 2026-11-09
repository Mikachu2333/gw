# Attachment.Checksum

获取附件文件的校验和。 **String** 类型，只读。

## 语法

express.**Checksum**

express   一个代表 **Attachment** 对象的变量。

## 类型

string

## 示例

```JavaScript
var att = app.ActiveDocument.Attachments.Item(1);
console.log("校验和: " + att.Checksum);
```
