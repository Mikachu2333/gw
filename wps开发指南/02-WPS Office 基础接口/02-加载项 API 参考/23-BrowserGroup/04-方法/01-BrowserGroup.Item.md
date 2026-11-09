# BrowserGroup.Item

按索引获取分组内的浏览器。

## 语法

```typescript
Item(index: number): Browser | undefined
```

express   一个代表 **BrowserGroup** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| index | 必选 | number | 浏览器索引，从 `1` 开始。 |

## 返回值

对应的 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj)；索引无效返回 `undefined`。

## 示例

```javascript
/* 获取分组中第一个浏览器 */
function test() {
  var browser = Application.BrowserGroups.Item(1).Item(1)
  console.log(browser.Url)
}
```
