# Outline.Count

获取子大纲节点数量。 **Long** 类型，只读。

## 语法

express.**Count**

express   一个代表 **Outline** 对象的变量。

## 类型

long

## 示例

```JavaScript
var count = root.Count;
for (var i = 1; i <= count; i++) {
    var child = root.Children(i);
    console.log(child.Title);
}
```
