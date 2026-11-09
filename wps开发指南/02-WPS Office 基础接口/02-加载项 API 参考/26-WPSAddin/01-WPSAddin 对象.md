# WPSAddin 对象

单个 WPS 加载项。

## 说明

通过 [WPSAddIns.Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddins/member/Item) 或 `Application.CurrentWPSAddIn` 获取。每个加载项对应一个浏览器分组，可通过 `Functions` 属性访问该加载项注册的自定义函数。

## 示例

```javascript
/* 获取加载项信息 */
function test() {
  var addin = Application.WPSAddIns.Item(1)
  console.log("加载项：" + addin.Name)
  var funcs = addin.Functions
  if (funcs) {
    console.log("已注册函数数：" + funcs.Count)
  }
}
```

{#objmember}

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddin/member/Name) | 加载项的名称。 **string** 类型，只读。 |
| [Functions](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddin/member/Functions) | 该加载项注册的自定义函数集合。 **AddinFunctions | undefined** 类型，只读。 |
