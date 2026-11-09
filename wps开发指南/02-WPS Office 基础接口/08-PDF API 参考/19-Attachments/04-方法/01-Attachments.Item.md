# Attachments.Item

获取指定索引的附件对象。

## 语法

express.**Item**

express   一个代表 **Attachments** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | number | 附件索引（从 1 开始） |

## 返回值

`Attachment` — 附件对象

## 示例

```JavaScript
var att = app.ActiveDocument.Attachments.Item(1);
console.log("附件名称: " + att.Name);
```
