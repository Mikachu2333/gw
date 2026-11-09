# SendKeys

向活动窗口发送模拟按键。

## 语法

```typescript
function SendKeys(String: string, Wait?: boolean): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| String | 必选 | string | 按键序列字符串，使用 VBA SendKeys 语法。 |
| Wait | 可选 | boolean | 是否等待每个按键被目标窗口处理后再发送下一个。省略时默认为 `false`。 |

## 说明

模拟键盘按键输入，将按键序列发送到当前活动窗口。支持 VBA 标准的 SendKeys 语法：
普通字符直接发送；`+` 表示 Shift，`^` 表示 Ctrl，`%` 表示 Alt，`~` 表示 Enter；
`{key}` 表示特殊键如 `{LEFT}`、`{F1}`、`{DELETE}`；`{key n}` 重复按键 n 次如 `{LEFT 5}`；
`()` 将修饰键应用到一组按键如 `+(abc)` 发送 Shift+a、Shift+b、Shift+c。
macOS 上此函数未实现，调用无效果。

## 示例

```javascript
/* 发送文本 */
function test() {
  SendKeys("Hello World~")
}
```

```javascript
/* 使用修饰键 */
function test() {
  SendKeys("^a")  // Ctrl+A 全选
  SendKeys("^c")  // Ctrl+C 复制
}
```

```javascript
/* 发送特殊键 */
function test() {
  SendKeys("{DOWN 5}")  // 按5次下箭头
  SendKeys("{ENTER}")   // 按回车
}
```
