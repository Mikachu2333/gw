# AddinFunctions.Item

按索引或名称获取自定义函数。

## 语法

```typescript
Item(IndexOrName: number | string): AddinFunction | null
```

express   一个代表 **AddinFunctions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| IndexOrName | 必选 | number \| string | 索引（从 `1` 开始）或函数名称。 |

## 返回值

对应的 [AddinFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/addin-api/AddinFunction/obj)；未找到返回 `null`。

## 示例

```javascript
/* 按名称获取函数 */
function test() {
  var f = Application.CurrentWPSAddIn.Functions.Item("myFunc")
  if (f) {
    console.log("函数名：" + f.Name)
  }
}
```
