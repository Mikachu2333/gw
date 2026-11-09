# Document.FullName

获取文档完整路径。 **String** 类型，只读。

## 语法

express.**FullName**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例

```JavaScript
var doc = app.ActiveDocument;
var fullPath = doc.FullName;
console.log("完整路径: " + fullPath);
```
