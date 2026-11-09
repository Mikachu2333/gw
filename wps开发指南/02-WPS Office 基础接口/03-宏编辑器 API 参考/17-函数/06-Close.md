# Close

关闭通过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 打开的文件。

## 语法

```typescript
function Close(...FileNumberArray: string[]): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ...FileNumberArray | 可选 | string[] | 要关闭的文件号。省略时关闭所有打开的文件。 |

## 说明

不传参数时关闭所有打开的文件（等同于调用 [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Reset)）。
传入一个或多个文件号时，逐个关闭对应的文件。
关闭后文件号被释放，可被后续的 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 重新使用。

## 示例

```javascript
/* 关闭单个文件 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  Close(fn)
}
```

```javascript
/* 关闭所有打开的文件 */
function test() {
  Close()
}
```
