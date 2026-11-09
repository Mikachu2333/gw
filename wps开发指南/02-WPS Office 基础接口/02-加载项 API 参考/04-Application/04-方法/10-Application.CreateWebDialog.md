# Application.CreateWebDialog

创建一个 Web 对话框窗口。

## 语法

```typescript
function CreateWebDialog(url: string, appName?: string, width?: number, height?: number, modal?: boolean, hasCaption?: boolean, resizeEdge?: number, errorUrl?: string, loadingTimeout?: number, isChildWindow?: boolean, isUseCookie?: boolean, xPox?: number, yPox?: number, popupMode?: number): WebDialog
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
| xPox | 可选 | number | 窗口 X 坐标。`-1` 表示自动定位。省略时默认 `-1`。 |
| yPox | 可选 | number | 窗口 Y 坐标。`-1` 表示自动定位。省略时默认 `-1`。 |
| popupMode | 可选 | number | 弹出模式。省略时默认 `0`。 |

## 返回值

创建的 [WebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/obj) 对象。

## 说明

创建一个加载指定 URL 的独立浏览器对话框，可配置尺寸、标题栏、模态、位置等属性。创建后对话框不会自动显示——需要设置 [WebDialog.Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Visible) 为 `true` 来显示。

`width` 和 `height` 参数为逻辑像素，会自动按设备像素比缩放。传入 0 或负值时回退为默认尺寸 400×200。`xPox` 和 `yPox` 为 -1 时由系统自动定位窗口。

创建前会对 URL 进行安全检查。每个对话框都有一个自动分配的递增唯一 ID，可通过 [GetWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetWebDialog) 按 ID 获取。

## 示例

```javascript
/* 创建模态对话框 */
function test() {
  var dlg = Application.CreateWebDialog("https://example.com/form.html", "表单", 600, 400)
  dlg.Visible = true
}
```

```javascript
/* 创建无标题栏的非模态浮窗 */
function test() {
  var dlg = Application.CreateWebDialog(
    "https://example.com/tooltip.html",
    "", 300, 150, false, false
  )
  dlg.Visible = true
}
```

```javascript
/* 指定位置创建对话框 */
function test() {
  var dlg = Application.CreateWebDialog(
    "https://example.com/panel.html", "面板",
    400, 300, false, true, 2, "", 0, true, false, 100, 200
  )
  dlg.Visible = true
}
```
