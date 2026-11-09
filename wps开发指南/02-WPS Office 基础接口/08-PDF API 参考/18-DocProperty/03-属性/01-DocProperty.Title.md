# DocProperty.Title

获取或设置文档标题。 **String** 类型，可读写。

## 语法

express.**Title**

express   一个代表 **DocProperty** 对象的变量。

## 类型

string

## 示例

```JavaScript
var prop = app.ActiveDocument.DocProperty;
prop.Title = "我的文档";
console.log("标题: " + prop.Title);
```
