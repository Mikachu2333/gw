# Attachments.Delete

根据名称删除附件。

## 语法

express.**Delete**

express   一个代表 **Attachments** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Name | string | 要删除的附件名称 |

## 返回值

无

## 示例

```JavaScript
app.ActiveDocument.Attachments.Delete("test.pdf");
```
