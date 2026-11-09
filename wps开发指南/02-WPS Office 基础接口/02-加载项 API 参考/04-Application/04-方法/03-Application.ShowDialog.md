# Application.ShowDialog

创建并立即显示一个 Web 对话框。

## 语法

```typescript
function ShowDialog(url: string, appName?: string, width?: number, height?: number, modal?: boolean, hasCaption?: boolean, resizeEdge?: number, errorUrl?: string, loadingTimeout?: number, isChildWindow?: boolean, isUseCookie?: boolean, needRaise?: boolean): boolean
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| url | 必选 | string | 对话框加载的网页 URL。 |
| appName | 可选 | string | 对话框标题栏文本。省略时无标题。 |
| width | 可选 | number | 对话框宽度（逻辑像素）。省略时默认 `400`。 |
| height | 可选 | number | 对话框高度（逻辑像素）。省略时默认 `200`。 |
| modal | 可选 | boolean | 是否为模态对话框。省略时默认 `true`。 |
| hasCaption | 可选 | boolean | 是否显示标题栏。省略时默认 `true`。 |
| resizeEdge | 可选 | number | 边框拖拽调整大小的模式。省略时默认 `2`。 |
| errorUrl | 可选 | string | 加载失败时显示的备用 URL。 |
| loadingTimeout | 可选 | number | 加载超时时间（毫秒）。`0` 表示不超时。省略时默认 `0`。 |
| isChildWindow | 可选 | boolean | 是否作为 WPS 的子窗口。省略时默认 `true`。 |
| isUseCookie | 可选 | boolean | 是否使用 Cookie。省略时默认 `false`。 |
| needRaise | 可选 | boolean | 显示后是否将窗口提升到最前。省略时默认 `false`。 |

## 返回值

创建成功返回 `true`。

## 说明

与 [CreateWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateWebDialog) 类似，但对话框创建后自动显示，不需要手动设置 `Visible`。适合一次性弹出对话框的场景。

`width` 和 `height` 为逻辑像素，自动按 DPI 缩放。传入 0 或负值时回退为默认尺寸 400×200。创建前会进行 URL 安全检查。

## 示例

```javascript
/* 弹出模态对话框 */
function test() {
  Application.ShowDialog("https://example.com/form.html", "编辑", 600, 400)
}
```

```javascript
/* 弹出非模态浮窗 */
function test() {
  Application.ShowDialog("https://example.com/info.html", "信息", 300, 200, false)
}
```
