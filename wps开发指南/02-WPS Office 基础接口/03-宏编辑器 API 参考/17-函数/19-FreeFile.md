# FreeFile

返回一个未被使用的文件号。

## 语法

```typescript
function FreeFile(RangeNumber?: any): string
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RangeNumber | 可选 | any | 文件号范围选择。省略时使用默认范围。 |

## 返回值

可用的文件号字符串。

## 说明

在调用 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 之前使用此函数获取可用的文件号，避免与已打开的文件号冲突。
返回值为字符串格式（如 `"#1"`），可直接传递给 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open)。

RangeNumber 参数控制文件号范围：
- 省略或 `0`：返回 `#1` ~ `#255` 范围的文件号
- 非零值：返回 `#256` ~ `#511` 范围的文件号

## 示例

```javascript
/* 获取文件号并打开文件 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  Close(fn)
}
```

```javascript
/* 同时打开多个文件 */
function test() {
  const fn1 = FreeFile()
  Open("C:\\input.txt", fn1, JSOpenMode.Input)
  const fn2 = FreeFile()
  Open("C:\\output.txt", fn2, JSOpenMode.Output)
  Close(fn1, fn2)
}
```
