# Views.Count

获取视图数量。 **Long** 类型，只读。

## 语法

express.**Count**

express   一个代表 **Views** 对象的变量。

## 类型

long

## 示例

```JavaScript
var views = app.ActiveWindow.Views;
console.log("视图数量: " + views.Count);
```
