# Outline.HasAction

获取大纲节点是否有关联动作。 **Boolean** 类型，只读。

## 语法

express.**HasAction**

express   一个代表 **Outline** 对象的变量。

## 类型

boolean

## 示例

```JavaScript
var outline = app.ActiveDocument.OutlineManager.RootOutline;
if (outline.HasAction) {
    outline.DoAction();
}
```
