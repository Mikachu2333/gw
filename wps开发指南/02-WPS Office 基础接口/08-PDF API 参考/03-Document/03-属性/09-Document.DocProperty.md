# Document.DocProperty

获取文档属性对象。 **DocProperty** 类型，只读。

## 语法

express.**DocProperty**

express   一个代表 **Document** 对象的变量。

## 类型

DocProperty

## 示例

```JavaScript
var prop = app.ActiveDocument.DocProperty;
console.log("标题: " + prop.Title);
console.log("作者: " + prop.Author);
```
