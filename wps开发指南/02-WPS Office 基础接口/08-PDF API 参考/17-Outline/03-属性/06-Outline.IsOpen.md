# Outline.IsOpen

获取大纲节点是否处于展开状态。 **Boolean** 类型，只读。

## 语法

express.**IsOpen**

express   一个代表 **Outline** 对象的变量。

## 类型

boolean

## 示例

```JavaScript
var outline = app.ActiveDocument.OutlineManager.RootOutline;
console.log("是否展开: " + outline.IsOpen);
```
