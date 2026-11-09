# Document.PageCount

获取文档的页面总数。 **Long** 类型，只读。

## 语法

express.**PageCount**

express   一个代表 **Document** 对象的变量。

## 类型

long

## 示例

```JavaScript
var doc = app.ActiveDocument;
var count = doc.PageCount;
console.log("总页数: " + count);
```
