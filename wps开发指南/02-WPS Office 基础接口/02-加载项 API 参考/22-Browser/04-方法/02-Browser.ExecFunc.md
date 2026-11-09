# Browser.ExecFunc

在浏览器中执行 JavaScript 语句。

## 语法

```typescript
ExecFunc(strJsCore: string): void
```

express   一个代表 **Browser** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| strJsCore | 必选 | string | 要执行的 JavaScript 语句。 |

## 返回值

void

## 示例

```JavaScript
/* 本示例在第一个浏览器组的第一个浏览器中执行弹框。 */
function test() {
    Application.BrowserGroups.Item(1).Item(1).ExecFunc("alert('Hello There')");
}
```
