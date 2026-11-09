# Documents.Item

根据索引获取指定文档对象。

## 语法

express.**Item**

express   一个代表 **Documents** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | number | 文档索引（从 1 开始） |

## 返回值

`Document` — 指定索引位置的文档对象

## 示例

```JavaScript
var docs = app.Documents;
var doc = docs.Item(1);
console.log("第一个文档: " + doc.Name);
```
