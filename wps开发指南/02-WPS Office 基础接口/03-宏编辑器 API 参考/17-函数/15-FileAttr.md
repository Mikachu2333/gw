# FileAttr

返回已打开文件的模式信息。

## 语法

```typescript
function FileAttr(FileNumber: string, ReturnType: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |
| ReturnType | 必选 | number | 查询类型：`1` 获取打开模式，`2` 获取文件句柄。 |

## 返回值

文件的模式值或句柄。

## 说明

查询通过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 打开的文件的模式信息。ReturnType 参数指定查询类型：
- `1` — 返回文件的打开模式（对应 Input/Output/Append/Random 的枚举值）
- `2` — 返回文件句柄（仅 16 位系统支持，现代系统上不可用）

## 示例

```javascript
/* 检查文件的打开模式 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  const mode = FileAttr(fn, 1)
  Debug.Print("打开模式：" + mode)
  Close(fn)
}
```
