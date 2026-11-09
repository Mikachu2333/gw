# Reset

关闭所有通过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 打开的文件。

## 语法

```typescript
function Reset(): void
```

## 说明

等同于不带参数调用 [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Close)。遍历所有文件号槽位，关闭所有已打开的文件并释放文件号。
通常在脚本结束时调用，确保所有文件都被正确关闭。

## 示例

```javascript
/* 确保所有文件都关闭 */
function test() {
  const fn1 = FreeFile()
  Open("C:\\file1.txt", fn1, JSOpenMode.Input)
  const fn2 = FreeFile()
  Open("C:\\file2.txt", fn2, JSOpenMode.Input)
  Reset()
}
```
