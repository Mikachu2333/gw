# View.FullScreen

获取或设置是否全屏模式。 **Boolean** 类型，可读写。

## 语法

express.**FullScreen**

express   一个代表 **View** 对象的变量。

## 类型

boolean

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
view.FullScreen = true;  // 进入全屏
view.FullScreen = false; // 退出全屏
```
