# Documents.Count

获取当前打开的文档数量。 **Long** 类型，只读。

## 语法

express.**Count**

express   一个代表 **Documents** 对象的变量。

## 类型

long

## 示例

```JavaScript
var docs = app.Documents;
var count = docs.Count;
console.log("打开的文档数量: " + count);
```
