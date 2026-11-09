# Console.clear

清空宏编辑器"立即窗口"中的所有内容。

## 语法

```typescript
function clear(): void
```

express   一个代表 **Console** 对象的变量。

## 说明

清除"立即窗口"中所有文本，包括通过 [Debug.Print](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Debug/member/Print)、[Console.log](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Console/member/log)、[Debug.ShowWeak](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/Debug/member/ShowWeak) 以及调试器输出的所有内容。这是全量清除，不区分输出来源。

在调试模式下，通过 Chrome DevTools Protocol 发送的标准 `console.clear()` 也会触发相同的清除效果。

## 示例

```javascript
/* 清空输出后重新输出 */
function test() {
  Console.log("旧的输出")
  Console.clear()
  Console.log("新的输出")
}
```

```javascript
/* 在循环中清空并刷新状态 */
function test() {
  for (var i = 0; i < 10; i++) {
    Console.clear()
    Debug.Print("第 " + (i + 1) + " 次迭代")
  }
}
```
