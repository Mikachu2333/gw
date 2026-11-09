# Document.Dirtyed

获取文档是否已被修改。 **Boolean** 类型，只读。

## 语法

express.**Dirtyed**

express   一个代表 **Document** 对象的变量。

## 类型

boolean

## 示例

```JavaScript
var doc = app.ActiveDocument;
if (doc.Dirtyed) {
    console.log("文档已修改，需要保存");
}
```
