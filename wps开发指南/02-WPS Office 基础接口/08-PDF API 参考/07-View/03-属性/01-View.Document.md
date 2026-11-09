# View.Document

获取当前活动文档对象。注意：当前实现返回的是应用程序的活动文档，而非视图所绑定的文档。 **Document** 类型，只读。

## 语法

express.**Document**

express   一个代表 **View** 对象的变量。

## 类型

Document

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
var doc = view.Document;
console.log("活动文档: " + doc.Name);
```
