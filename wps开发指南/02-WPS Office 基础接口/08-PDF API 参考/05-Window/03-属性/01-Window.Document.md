# Window.Document

获取窗口关联的文档对象。 **Document** 类型，只读。

## 语法

express.**Document**

express   一个代表 **Window** 对象的变量。

## 类型

Document

## 示例

```JavaScript
var doc = app.ActiveWindow.Document;
console.log("文档名称: " + doc.Name);
```
