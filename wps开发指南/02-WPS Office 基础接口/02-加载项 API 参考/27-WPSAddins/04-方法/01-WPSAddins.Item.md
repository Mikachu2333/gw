# WPSAddins.Item

按索引或名称获取加载项。

## 语法

```typescript
Item(IndexOrName: number | string): WPSAddin | null
```

express   一个代表 **WPSAddins** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| IndexOrName | 必选 | number \| string | 索引（从 `1` 开始）或加载项名称。 |

## 返回值

对应的 [WPSAddin](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/WPSAddin/obj)；未找到返回 `null`。

## 示例

```javascript
/* 按索引获取 */
function test() {
  var addin = Application.WPSAddIns.Item(1)
  console.log(addin.Name)
}
```

```javascript
/* 按名称获取 */
function test() {
  var addin = Application.WPSAddIns.Item("MyAddin")
  if (addin) {
    console.log(addin.Name)
  }
}
```
