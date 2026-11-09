# BrowserGroup.GetBrowserByName

按名称获取分组内的浏览器。

## 语法

```typescript
GetBrowserByName(name: string): Browser | undefined
```

express   一个代表 **BrowserGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| name | 必选 | string | 浏览器名称。 |

## 返回值

匹配的 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj)；未找到返回 `undefined`。

## 说明

名称对应通过 [Browser.Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/member/Name) 设置的值。

## 示例

```javascript
/* 按名称查找浏览器 */
function test() {
  var browser = Application.BrowserGroups.Item(1).GetBrowserByName("mainPanel")
  if (browser) {
    console.log(browser.Url)
  }
}
```
