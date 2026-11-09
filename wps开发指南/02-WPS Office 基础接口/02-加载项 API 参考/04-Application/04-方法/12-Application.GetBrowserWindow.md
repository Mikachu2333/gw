# Application.GetBrowserWindow

获取指定浏览器关联的窗口对象。

## 语法

```typescript
function GetBrowserWindow(browser: Browser): BrowserWindow
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| browser | 必选 | Browser | 一个 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj) 对象。 |

## 返回值

该浏览器关联的 [BrowserWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/obj) 对象。

## 说明

与 [BrowserWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserWindow/obj) 属性不同，此方法可以获取任意 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj) 对象关联的窗口对象，而非仅限当前浏览器。

## 示例

```javascript
/* 获取指定浏览器的窗口 */
function test() {
  var browser = Application.ThisBrowser
  var bw = Application.GetBrowserWindow(browser)
  bw.ShowToFront()
}
```
