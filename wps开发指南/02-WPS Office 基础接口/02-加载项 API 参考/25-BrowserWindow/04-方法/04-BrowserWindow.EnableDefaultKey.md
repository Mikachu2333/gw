# BrowserWindow.EnableDefaultKey

启用或屏蔽窗口对指定按键的默认行为。

## 语法

```typescript
EnableDefaultKey(key: string, enable: boolean): void
```

express   一个代表 **BrowserWindow** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| key | 必选 | string | 按键名称，如 `"esc"`。 |
| enable | 必选 | boolean | `true` 恢复该按键的默认行为，`false` 屏蔽。 |

## 说明

通过维护一个禁用按键列表来控制窗口是否响应特定按键的默认行为。操作是幂等的——重复启用或屏蔽同一按键不会产生副作用。参数不足时抛出异常。

## 示例

```javascript
/* 屏蔽 Esc 键默认行为 */
function test() {
  var bw = Application.BrowserWindow
  bw.EnableDefaultKey("esc", false)
}
```

```javascript
/* 恢复 Esc 键默认行为 */
function test() {
  var bw = Application.BrowserWindow
  bw.EnableDefaultKey("esc", true)
}
```
