# Attachment.CreateDate

获取附件创建日期时间。只读。

## 语法

express.**CreateDate**

express   一个代表 **Attachment** 对象的变量。

## 类型

Date

## 说明

返回 JavaScript `Date` 对象。可直接调用 `.toLocaleString()`、`.getFullYear()` 等标准 `Date` 方法。

## 示例

```JavaScript
var att = app.ActiveDocument.Attachments.Item(1);
console.log(att.CreateDate.toLocaleString()); // 例如：2026/5/27 10:00:00
```
