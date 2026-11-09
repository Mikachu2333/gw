# Attachments.Add

添加附件到文档，返回新添加的附件对象。若文件不存在或添加失败则返回错误。

## 语法

express.**Add**

express   一个代表 **Attachments** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FilePath | string | 要添加的文件完整路径 |

## 返回值

`Attachment` — 新添加的附件对象

## 示例

```JavaScript
var att = app.ActiveDocument.Attachments.Add("D:\\test.pdf");
console.log("已添加: " + att.Name);
```
