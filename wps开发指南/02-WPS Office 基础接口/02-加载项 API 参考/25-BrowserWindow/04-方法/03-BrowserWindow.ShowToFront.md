# BrowserWindow.ShowToFront

将窗口激活并置于最前方。

## 语法

```typescript
ShowToFront(): void
```

express   一个代表 **BrowserWindow** 对象的变量。

## 说明

在 Windows 上会额外调用系统 API 确保窗口显示在所有应用窗口的前面。

## 示例

```javascript
/* 窗口置顶 */
function test() {
  var bw = Application.BrowserWindow
  bw.ShowToFront()
}
```
