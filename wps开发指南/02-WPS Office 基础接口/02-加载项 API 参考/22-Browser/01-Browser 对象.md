# Browser 对象

加载项中的浏览器页面。

## 说明

代表加载项中的一个嵌入式浏览器页面。浏览器可以有父子关系（弹出窗口会形成子浏览器），同时属于某个 [BrowserGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroup/obj)。通过 [ThisBrowser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Application/member/ThisBrowser) 获取当前页面，通过 [BrowserGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroups/obj) 遍历所有浏览器。

## 示例

```JavaScript
/* 本示例通过 BrowserGroups 获取浏览器并显示 URL 与名称。 */
function test() {
    let browser = Application.BrowserGroups.Item(1).Item(1);
    alert("URL: " + browser.Url + "\nName: " + browser.Name);
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Item) | 按索引获取子浏览器，索引从 1 开始。 |
| [ShowDevTools](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/ShowDevTools) | 打开 Chrome DevTools 开发者工具。 |
| [WebLoadFinish](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/WebLoadFinish) | 通知浏览器网页内容加载完毕；可选传入回调函数。 |
| [ExecFunc](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/ExecFunc) | 在浏览器中执行 JavaScript 语句。 |

## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Parent) | 父浏览器。 **Browser | undefined** 类型，只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Count) | 子浏览器数量。 **number** 类型，只读。 |
| [Url](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Url) | 当前页面的 URL。 **string** 类型，只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Name) | 浏览器的名称。 **string** 类型，可读写。 |
| [Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Group) | 此浏览器所属的分组。 **BrowserGroup | undefined** 类型，只读。 |
| [AllowPopup](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/AllowPopup) | 是否允许浏览器打开弹出窗口。 **boolean** 类型，可读写。 |
