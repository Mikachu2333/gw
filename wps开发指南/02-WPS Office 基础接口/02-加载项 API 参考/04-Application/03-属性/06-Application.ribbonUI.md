# Application.ribbonUI

返回一个 [**RibbonUI**](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/ribbonui-object) 对象，该对象用于操作当前加载项的自定义功能区，例如刷新控件状态、切换功能区选项卡以及控制功能区展开状态。

## 语法

express.**ribbonUI**

express   一个代表 **Application** 对象的变量。

## 类型

[**RibbonUI**](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/ribbonui-object)，只读。

## 说明

- 该属性适用于已加载自定义功能区的 WPS 加载项场景。
- 如果需要刷新整个功能区，可调用 [**RibbonUI.Invalidate**](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/ribbonui-object#invalidate)。
- 如果只需要刷新指定控件，可调用 [**RibbonUI.InvalidateControl**](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/ribbonui-object#invalidatecontrol)。

## 示例

```javascript
/*本示例通过 Application.ribbonUI 刷新指定自定义按钮。*/
function UpdateRibbonButton() {
    let ribbon = Application.ribbonUI
    ribbon.InvalidateControl("btnRefresh")
}
```