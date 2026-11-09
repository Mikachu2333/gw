# Application.UpdateRibbon

刷新自定义 Ribbon 界面。

## 语法

```typescript
function UpdateRibbon(controlId?: string): void
```

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| controlId | 可选 | string | 要刷新的 Ribbon 控件 ID。省略时刷新整个 Ribbon。 |

## 说明

不传参数时刷新整个 Ribbon——所有自定义控件都会重新执行 Ribbon XML 中定义的回调函数以获取最新状态。传入控件 ID 时仅刷新该控件，效率更高。如果传入的值不是字符串类型，退化为刷新整个 Ribbon。

当前没有活跃的 Ribbon UI 时调用无效果。Ribbon 上下文不可用时抛出异常。

## 示例

```javascript
/* 刷新整个 Ribbon */
function test() {
  Application.UpdateRibbon()
}
```

```javascript
/* 仅刷新特定按钮 */
function test() {
  Application.UpdateRibbon("myButton1")
}
```
