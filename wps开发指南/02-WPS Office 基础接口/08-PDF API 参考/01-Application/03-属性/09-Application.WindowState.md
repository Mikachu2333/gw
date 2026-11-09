# Application.WindowState

获取或设置应用程序窗口的状态。 **Number** 类型，可读写。

## 语法

express.**WindowState**

express   一个代表 **Application** 对象的变量。

## 类型

number

## 说明

| 枚举值 | 枚举常量名 | 说明 |
|-------|-----------|------|
| 0 | pdfWindowStateNormal | 正常状态 |
| 1 | pdfWindowStateMaximize | 最大化 |
| 2 | pdfWindowStateMinimize | 最小化 |

枚举常量可通过 `Application.NewEnum.PdfWindowState` 访问。

## 示例

```JavaScript
// 也可直接使用数字
app.WindowState = 1; // 最大化
app.WindowState = 0; // 恢复正常

// 读取当前状态
var state = app.WindowState; // 返回 0 / 1 / 2
```
