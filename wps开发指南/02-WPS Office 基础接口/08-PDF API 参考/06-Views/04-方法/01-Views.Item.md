# Views.Item

根据索引获取视图对象。

## 语法

express.**Item**

express   一个代表 **Views** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | number | 视图索引（从 1 开始） |

## 返回值

`View` — 视图对象

## 示例

```JavaScript
var view = app.ActiveWindow.Views.Item(1);
console.log("当前页: " + view.CurrentPageIndex);
```
