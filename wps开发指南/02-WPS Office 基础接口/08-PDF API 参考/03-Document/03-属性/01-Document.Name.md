# Document.Name

获取文档名称（文件名）。 **String** 类型，只读。

## 语法

express.**Name**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例

```JavaScript
var doc = app.ActiveDocument;
var name = doc.Name;
console.log("文档名称: " + name); // 输出: "test.pdf"
```
