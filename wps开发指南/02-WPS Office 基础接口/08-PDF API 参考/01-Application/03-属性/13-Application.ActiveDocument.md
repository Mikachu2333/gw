# Application.ActiveDocument

获取当前活动的文档对象。 **Document** 类型，只读。

## 语法

express.**ActiveDocument**

express   一个代表 **Application** 对象的变量。

## 类型

Document

## 示例

```JavaScript
var doc = app.ActiveDocument;
if (doc) {
    console.log("当前文档: " + doc.Name);
}
```
