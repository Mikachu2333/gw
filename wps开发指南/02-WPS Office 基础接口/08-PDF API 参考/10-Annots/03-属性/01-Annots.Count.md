# Annots.Count

获取注释数量。 **Long** 类型，只读。

## 语法

express.**Count**

express   一个代表 **Annots** 对象的变量。

## 类型

long

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var count = page.Annots.Count;
console.log("注释数量: " + count);
```
