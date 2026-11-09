# Document.Print

打印文档（简易版本）。

## 语法

express.**Print**

express   一个代表 **Document** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| First | long | 起始页码 |
| Last | long | 结束页码 |
| Fit | long (可选) | 页面适应模式位标志，值同 `PrintPages()` 的 `Fit` 参数 |
| Silent | boolean (可选) | 是否静默打印 |

## 返回值

无

## 示例

```JavaScript
var doc = app.ActiveDocument;
doc.Print(1, doc.PageCount);
doc.Print(1, 5, 0, true); // 静默打印前 5 页
```
