# Browser.Item

按索引获取子浏览器。

## 语法

```typescript
Item(index: number): Browser | undefined
```

express   一个代表 **Browser** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| index | 必选 | number | 子浏览器索引，从 `1` 开始。 |

## 返回值

对应的子 [Browser](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/Browser/obj)，索引无效返回 `undefined`。
