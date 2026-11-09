# Page.AnnotCount

获取页面上的注释数量。 **Long** 类型，只读。

## 语法

express.**AnnotCount**

express   一个代表 **Page** 对象的变量。

## 类型

long

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
console.log("注释数量: " + page.AnnotCount);
```
