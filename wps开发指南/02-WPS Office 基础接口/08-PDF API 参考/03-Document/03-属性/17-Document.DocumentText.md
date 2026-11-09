# Document.DocumentText

获取文档的全部文本内容。 **String** 类型，只读。

## 语法

express.**DocumentText**

express   一个代表 **Document** 对象的变量。

## 类型

string

## 示例

```JavaScript
var fullText = app.ActiveDocument.DocumentText;
console.log("文档内容长度: " + fullText.length);
```
