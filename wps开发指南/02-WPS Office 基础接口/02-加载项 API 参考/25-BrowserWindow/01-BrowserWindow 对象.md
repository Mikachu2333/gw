# BrowserWindow 对象

浏览器宿主窗口控制对象。

## 说明

控制加载项浏览器页面所在的原生窗口属性，包括标题栏拖拽区域、窗口阴影、显示/隐藏和置顶等。通过 `Application.BrowserWindow` 或 [GetBrowserWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/GetBrowserWindow) 获取。
阴影相关属性（`ShadowSize`、`ShadowSharpness`、`ShadowDarkness`、`ShadowColor`）修改后立即生效。

## 示例

```javascript
/* 自定义窗口外观 */
function test() {
  var bw = Application.BrowserWindow
  bw.SetCaptionRect(0, 0, 800, 30)
  bw.ShadowSize = 10
  bw.ShadowColor = 0x333333
  bw.ShowToFront()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [SetCaptionRect](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/SetCaptionRect) | 设置窗口的标题栏拖拽区域。 |
| [ClearCaptionRect](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ClearCaptionRect) | 清除窗口的标题栏拖拽区域。 |
| [ShowToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ShowToFront) | 将窗口激活并置于最前方。 |
| [EnableDefaultKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/EnableDefaultKey) | 启用或屏蔽窗口对指定按键的默认行为。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ShadowSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ShadowSize) | 窗口阴影大小。 **number** 类型，可读写。 |
| [ShadowSharpness](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ShadowSharpness) | 窗口阴影锐度。 **number** 类型，可读写。 |
| [ShadowDarkness](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ShadowDarkness) | 窗口阴影深度。 **number** 类型，可读写。 |
| [ShadowColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/ShadowColor) | 窗口阴影颜色。 **number** 类型，可读写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/member/Visible) | 窗口是否可见。 **boolean** 类型，可读写。 |
