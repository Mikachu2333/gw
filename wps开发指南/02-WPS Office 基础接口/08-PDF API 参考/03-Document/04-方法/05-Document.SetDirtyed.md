# Document.SetDirtyed

手动设置文档的修改状态。

## 语法

express.**SetDirtyed**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Prop | boolean | true=标记为已修改，false=标记为未修改 |

## 返回值

无

## 示例

```JavaScript
app.ActiveDocument.SetDirtyed(true);
```
