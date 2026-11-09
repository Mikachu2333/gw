# AddinFunctions.Unregister

注销指定名称的自定义函数。

## 语法

```typescript
Unregister(Name: string): void
```

express   一个代表 **AddinFunctions** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Name | 必选 | string | 要注销的函数名称。 |

## 说明

只能在自己的加载项上注销函数。

## 示例

```javascript
/* 注销函数 */
function test() {
  var funcs = Application.CurrentWPSAddIn.Functions
  funcs.Unregister("myFunc")
}
```
