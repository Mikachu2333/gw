# Pages.DeletePagesByRange

按范围删除页面。

## 语法

express.**DeletePagesByRange**

express   一个代表 **Pages** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| DeleteRange | string | 要删除的页面范围（如 "2-4"） |

## 返回值

无

## 示例

```JavaScript
var pages = app.ActiveDocument.Pages;
pages.DeletePagesByRange("2-4");
```
