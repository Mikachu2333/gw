# Console.log

在宏编辑器的"立即窗口"中输出一条日志。

## 语法

```typescript
function log(PrintText: any): void
```

express   一个代表 **Console** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PrintText | 必选 | any | 要输出的内容，支持任意类型。 |

## 说明

与 [Debug.Print](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Debug/member/Print) 功能类似，都将文本输出到"立即窗口"，但存在以下差异：
- `Console.log` 只处理第一个参数，传入多个参数时其余参数会被静默忽略（与标准 `console.log` 拼接所有参数的行为不同）。
- 不进行 14 列对齐，输出原始文本。

布尔值会被转换为小写的 `"true"` 或 `"false"`，其他类型会被转为字符串输出。

在调试模式下，通过 Chrome DevTools Protocol 发送的标准 `console.log` 也会在"立即窗口"中显示。

## 示例

```javascript
/* 输出日志 */
function test() {
  Console.log("当前状态：正常")
  Console.log(42)
  Console.log(true)
}
```

```javascript
/* 与 Debug.Print 的差异——多参数行为 */
function test() {
  Console.log("A", "B", "C")
  Debug.Print("A", "B", "C")
}
```
