# Annots.Item

根据索引获取注释对象。

## 语法

express.**Item**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Index | number | 注释索引（从 1 开始） |

## 返回值

`Annot` — 注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.Item(1);
console.log("注释类型: " + annot.Type);
```
