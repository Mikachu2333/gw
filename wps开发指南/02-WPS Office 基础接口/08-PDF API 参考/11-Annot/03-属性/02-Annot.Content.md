# Annot.Content

获取或设置注释内容文本。 **String** 类型，可读写。

## 语法

express.**Content**

express   一个代表 **Annot** 对象的变量。

## 类型

string

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.Item(1);
annot.Content = "这是注释内容";
var text = annot.Content;
```
