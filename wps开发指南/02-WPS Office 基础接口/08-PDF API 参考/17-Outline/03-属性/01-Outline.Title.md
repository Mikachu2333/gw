# Outline.Title

获取大纲节点的标题。 **String** 类型，只读。

## 语法

express.**Title**

express   一个代表 **Outline** 对象的变量。

## 类型

string

## 示例

```JavaScript
var root = app.ActiveDocument.OutlineManager.RootOutline;
var first = root.Children(1);
console.log("标题: " + first.Title);
```
