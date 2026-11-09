# Clipboard.GetText

获取剪切板中的文本。

## 语法

express.**GetText**

express   一个代表 **Clipboard** 对象的变量。

## 返回值

`string` — 剪切板中的文本内容；若剪切板为空则返回空字符串

## 示例

```JavaScript
var text = app.Clipboard.GetText();
console.log("剪切板内容: " + text);
```
