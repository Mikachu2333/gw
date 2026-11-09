# View.CurrentPageIndex

获取当前显示的页码索引。 **Long** 类型，只读。

## 语法

express.**CurrentPageIndex**

express   一个代表 **View** 对象的变量。

## 类型

long

## 说明

返回当前显示页的页码，**1 起始**（第一页为 `1`）。

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
var pageIdx = view.CurrentPageIndex;
```
