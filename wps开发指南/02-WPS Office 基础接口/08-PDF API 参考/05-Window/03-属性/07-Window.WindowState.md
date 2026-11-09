# Window.WindowState

获取或设置窗口状态。枚举值及常量访问方式同 `Application.WindowState`，参见 [Application.WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/pdf/Application/member/WindowState)。 **Number** 类型，可读写。

## 语法

express.**WindowState**

express   一个代表 **Window** 对象的变量。

## 类型

number

## 示例

```JavaScript
var win = app.ActiveWindow;
win.WindowState = 1; // 最大化
win.WindowState = 0; // 恢复正常
```
