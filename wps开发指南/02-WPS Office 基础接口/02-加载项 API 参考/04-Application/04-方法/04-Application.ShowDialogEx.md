# Application.ShowDialogEx

创建并立即显示一个 Web 对话框（扩展版）。

## 语法

```typescript
function ShowDialogEx(url: string, appName?: string, width?: number, height?: number, modal?: boolean, hasCaption?: boolean, resizeEdge?: number, errorUrl?: string, loadingTimeout?: number, isChildWindow?: boolean, isUseCookie?: boolean, xPox?: number, yPox?: number, hasMinimizeButton?: boolean, hasMaximizeButton?: boolean, opacity?: number, bForceSignalWindow?: boolean, bEnableDrag?: boolean, popupMode?: number): boolean
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
| xPox | 可选 | number | 窗口 X 坐标。省略时默认 `0`。 |
| yPox | 可选 | number | 窗口 Y 坐标。省略时默认 `0`。 |
| hasMinimizeButton | 可选 | boolean | 是否显示最小化按钮。省略时默认 `false`。 |
| hasMaximizeButton | 可选 | boolean | 是否显示最大化按钮。省略时默认 `false`。 |
| opacity | 可选 | number | 窗口透明度，`0.0`（完全透明）到 `1.0`（不透明）。省略时默认 `1.0`。 |
| bForceSignalWindow | 可选 | boolean | 是否强制为独立顶层窗口。省略时默认 `false`。 |
| bEnableDrag | 可选 | boolean | 是否启用拖拽。省略时默认 `false`。 |
| popupMode | 可选 | number | 弹出模式。省略时默认 `0`。 |

## 返回值

创建成功返回 `true`。

## 说明

[ShowDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ShowDialog) 的扩展版本，额外支持设置窗口位置、最小化/最大化按钮、透明度、拖拽等属性。前 11 个参数与 ShowDialog 完全相同。

`bForceSignalWindow` 为 `true` 时强制将对话框从子窗口变为独立顶层窗口，不随 WPS 主窗口最小化或关闭。

## 示例

```javascript
/* 创建带最小化按钮的半透明对话框 */
function test() {
  Application.ShowDialogEx(
    "https://example.com/panel.html", "面板",
    500, 400, false, true, 2, "", 0, true, false,
    100, 100, true, false, 0.9
  )
}
```

```javascript
/* 创建独立顶层窗口 */
function test() {
  Application.ShowDialogEx(
    "https://example.com/float.html", "悬浮窗",
    300, 200, false, true, 2, "", 0, false, false,
    200, 200, false, false, 1.0, true
  )
}
```
