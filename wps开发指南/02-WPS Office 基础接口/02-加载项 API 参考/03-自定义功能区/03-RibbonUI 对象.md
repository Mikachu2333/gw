# RibbonUI 对象

**RibbonUI** 对象用于操作 WPS 加载项自定义功能区，可用于刷新功能区控件状态、切换指定选项卡，以及控制功能区展开状态等。

## 说明

- **RibbonUI** 对象通常作为自定义功能区 `onLoad` 回调的参数传入，也可通过 [**Application.ribbonUI**](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ribbonUI) 属性获取。
- 当控件的 `getLabel`、`getVisible`、`getEnabled`、`getImage` 等回调依赖外部状态时，可调用刷新相关方法让 WPS 在下一次显示时重新取值。

## 示例

```javascript
/*本示例在加载项初始化时缓存 RibbonUI 对象，并在状态变化后刷新指定控件。*/
let gRibbonUI = null
let featureEnabled = false

function OnAddInLoad(ribbonUI) {
	gRibbonUI = ribbonUI
}

function ToggleFeature() {
	featureEnabled = !featureEnabled
	if (gRibbonUI) {
		gRibbonUI.InvalidateControl("toggleFeatureBtn")
	}
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ActivateTab](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/ActivateTab) | 使 WPS 应用程序激活显示当前自定义功能区。 |
| [ActivateTabMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/ActivateTabMso) | 激活内置的功能区，参数为指定的功能区名称。 |
| [ActivateTabQ](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/ActivateTabQ) | 激活自定义功能区，参数为自定义功能区名称及命名控件。 |
| [ExpandOrCollapseRibbon](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/ExpandOrCollapseRibbon) | 设置功能区为展开或折叠状态。 |
| [Invalidate](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/Invalidate) | 将自定义功能区的数据缓存置为无效，WPS 应用程序会在下一次显示时再次获取更新。 |
| [InvalidateControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/InvalidateControl) | 指定更新一个控件，参数是控件 Id。 |
| [InvalidateControlMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/InvalidateControlMso) | 指定更新一个内置控件，参数是内置控件 Id。 |
| [SetEnabledCloudSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/customize-ribbon/member/SetEnabledCloudSync) | 控制文档窗口右上角同步、协作、分享按钮的可用状态，并返回设置结果。 |
