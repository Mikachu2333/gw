# Application.Clipboard

获取剪切板对象，用于操作系统剪切板。 **Clipboard** 类型，只读。

## 语法

express.**Clipboard**

express   一个代表 **Application** 对象的变量。

## 类型

Clipboard

## 示例

```JavaScript
var clipboard = app.Clipboard;
var text = clipboard.GetText();
clipboard.SetText("Hello World");
```
