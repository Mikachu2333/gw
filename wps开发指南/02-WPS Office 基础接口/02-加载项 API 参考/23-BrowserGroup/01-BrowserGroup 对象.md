# BrowserGroup 对象

浏览器分组，包含一组 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj) 页面。

## 说明

每个加载项的浏览器页面按分组管理。通过 [BrowserGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroups/obj) 集合获取各个分组，再通过分组的 `Item` 或 `GetBrowserByName` 访问组内具体的浏览器页面。

## 示例

```javascript
/* 遍历分组中的浏览器 */
function test() {
  var group = Application.BrowserGroups.Item(1)
  for (var i = 1; i <= group.Count; i++) {
    console.log(group.Item(i).Url)
  }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroup/member/Item) | 按索引获取分组内的浏览器，索引从 1 开始。 |
| [GetBrowserByName](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroup/member/GetBrowserByName) | 按名称获取分组内的浏览器。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroup/member/Count) | 该分组中的浏览器数量。 **number** 类型，只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroup/member/Name) | 分组的名称。 **string | undefined** 类型，只读。 |
