# BrowserGroups.Item

按索引获取浏览器分组。

## 语法

```typescript
Item(index: number): BrowserGroup | undefined
```

express   一个代表 **BrowserGroups** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| index | 必选 | number | 分组索引，从 `1` 开始。 |

## 返回值

对应的 [BrowserGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/BrowserGroup/obj)；索引无效返回 `undefined`。

## 示例

```javascript
/* 获取第一个分组 */
function test() {
  var group = Application.BrowserGroups.Item(1)
  console.log("分组名称：" + group.Name)
}
```
