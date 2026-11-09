# Document.PageText

获取指定页面的文本内容。

## 语法

express.**PageText**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | long | 页码索引（从 **0** 开始） |

## 返回值

`string` — 页面文本

## 示例

```JavaScript
var page1Text = app.ActiveDocument.PageText(0); // 第一页
```
