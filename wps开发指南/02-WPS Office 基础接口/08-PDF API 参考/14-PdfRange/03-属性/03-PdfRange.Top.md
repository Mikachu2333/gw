# PdfRange.Top

获取或设置范围矩形的下边 y 坐标（pt，**PDF 坐标系**，原点在页面左下角，值越大越靠近页面顶部）。 **Float** 类型，可读写。

## 语法

express.**Top**

express   一个代表 **PdfRange** 对象的变量。

## 类型

float

## 说明

> **注意**：此字段命名为 `Top`，但在 PDF 坐标系中存储的是矩形的 **`y`（下边）坐标**，值越大越靠上。与 `FormField.Top` 含义不同。

## 示例

```JavaScript
var range = app.ActiveDocument.Selection.Range.Item(1);
range.Top = 200;
console.log("下边 y: " + range.Top);
```
