# BrowserWindow.ClearCaptionRect

清除窗口的标题栏拖拽区域。

## 语法

```typescript
ClearCaptionRect(): void
```

express   一个代表 **BrowserWindow** 对象的变量。

## 说明

清除通过 [SetCaptionRect](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/SetCaptionRect) 设置的拖拽区域，将矩形区域重置为零。

## 示例

```javascript
/* 取消拖拽区域 */
function test() {
  var bw = Application.BrowserWindow
  bw.ClearCaptionRect()
}
```
