# Put

将数据以二进制方式写入已打开的文件。

## 语法

```typescript
function Put(FileNumber: string, VarName: any, RecNumber?: any): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |
| VarName | 必选 | any | 要写入的数据。 |
| RecNumber | 可选 | any | Random 模式下的记录号（基于 1），Binary 模式下的字节位置。省略时写入当前位置。 |

## 说明

文件号为打开文件时使用的字符串，须以 `#` 开头后跟数字（如 `#1`），有效范围为 1～511，用于标识当前进程中已打开的文件。

只能用于以 Random 或 Binary 模式打开的文件。

在 Random 模式下，数据写入到指定记录号的位置。字符串会带有长度前缀（2 字节），整数占 4 字节，浮点数占 8 字节，布尔值占 4 字节。
如果数据大小超过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 时设置的记录长度，会报错。

在 Binary 模式下，数据写入到指定字节位置，字符串按本地 8 位字节直接写入；若字符串长度超过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 时设置的记录长度，仅写入前 `recLength` 个字节。

与 [Get](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Get) 配对使用——Put 写入的数据可以用 Get 读取。

## 示例

```javascript
/* 写入和读取随机访问记录 */
function test() {
  const fn = FreeFile()
  Open("C:\\records.dat", fn, JSOpenMode.Random)
  Put(fn, "Record 1", 1)
  Put(fn, "Record 2", 2)
  Close(fn)
}
```

```javascript
/* 向二进制文件写入数据 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.bin", fn, JSOpenMode.Binary)
  Put(fn, 42)
  Put(fn, 3.14)
  Close(fn)
}
```
