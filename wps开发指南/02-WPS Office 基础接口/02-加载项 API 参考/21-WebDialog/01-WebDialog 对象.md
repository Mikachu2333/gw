# WebDialog 对象

通过 [CreateWebDialog](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/CreateWebDialog) 创建的 Web 对话框窗口。

## 说明

表示一个独立的浏览器对话框窗口，加载指定 URL 的网页内容。可控制其可见性、大小、位置、模态等属性。不再需要时调用 [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Delete) 销毁。

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ExecuteJavaScript](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/ExecuteJavaScript) | 在对话框的浏览器上下文中执行 JavaScript 代码。 |
| [Resize](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Resize) | 调整对话框大小。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Move) | 移动对话框到指定位置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Delete) | 销毁对话框。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Visible) | 对话框是否可见。 **boolean** 类型，可读写。 |
| [Url](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Url) | 对话框当前加载的 URL。 **string** 类型，可读写。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/ID) | 对话框的唯一标识 ID。 **number** 类型，只读。 |
| [IsModal](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/IsModal) | 对话框是否为模态。 **boolean** 类型，可读写。 |
| [IsCloseable](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/IsCloseable) | 对话框是否可被用户关闭。 **boolean** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Width) | 对话框当前宽度（像素）。 **number** 类型，只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Height) | 对话框当前高度（像素）。 **number** 类型，只读。 |
| [Xpos](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Xpos) | 对话框当前 X 坐标（像素）。 **number** 类型，只读。 |
| [Ypos](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/Ypos) | 对话框当前 Y 坐标（像素）。 **number** 类型，只读。 |
| [PopupMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WebDialog/member/PopupMode) | 对话框的弹出模式。 **number** 类型，可读写。 |
