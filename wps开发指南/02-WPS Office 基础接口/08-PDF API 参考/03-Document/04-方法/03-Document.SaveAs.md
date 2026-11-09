# Document.SaveAs

将文档另存为指定路径。

## 语法

express.**SaveAs**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| FilePath | string | 目标文件路径 |

## 返回值

无

## 示例

```JavaScript
app.ActiveDocument.SaveAs("C:\\Documents\\copy.pdf");
```
