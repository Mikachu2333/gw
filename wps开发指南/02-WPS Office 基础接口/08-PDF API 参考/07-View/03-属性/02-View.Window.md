# View.Window

获取当前活动窗口对象。注意：当前实现返回的是应用程序的活动窗口，而非视图所归属的窗口。 **Window** 类型，只读。

## 语法

express.**Window**

express   一个代表 **View** 对象的变量。

## 类型

Window

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
var win = view.Window;
console.log("活动窗口: " + win.Caption);
```
