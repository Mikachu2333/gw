# Document.SetCustomProperty

设置文档的自定义属性（存储在 PDF XMP 元数据中）。

## 语法

express.**SetCustomProperty**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Name | string | 属性名，自定义字符串键名 |
| TextType | string | 属性类型标记，自由字符串，原样存入 PDF 字典的 `TYPE` 字段，读取时可通过 `GetCustomProperty` 返回； |
| Value | string | 属性值字符串 |

## 返回值

无

## 示例

```JavaScript
app.ActiveDocument.SetCustomProperty("ProjectName", "text", "示例项目");
app.ActiveDocument.SetCustomProperty("Version", "text", "1.0.0");
```
