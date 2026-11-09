# EOF

判断已打开的文件是否到达末尾。

## 语法

```typescript
function EOF(FileNumber: string): boolean
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 以 "#" 开头的数字字符串（1～511），用于标识当前进程中已打开的文件；通常由 FreeFile() 返回。 |

## 返回值

如果已到达文件末尾返回 `true`，否则返回 `false`。

## 说明

文件号是打开文件时指定的字符串，格式为以 "#" 开头的数字（范围 1～511），用于在当前进程中唯一标识一个已打开的文件句柄。无效文件号时 API 调用失败（源码 indexOfFlieNumber 返回 -1 时 FileEOF 返回 FALSE）。

通过比较当前读取位置与文件大小来判断是否到达文件末尾。
适用于以 Input、Binary 或 Random 模式打开的文件。
对于以 Output 或 Append 模式打开的写入文件，行为未定义。

通常在循环中配合 [LineInput](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/LineInput) 或 [Input](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Input) 使用，控制读取何时结束。

## 示例

```javascript
/* 逐行读取文件直到末尾 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  let lineCount = 0
  while (!EOF(fn)) {
    const line = LineInput(fn)
    lineCount++
  }
  Debug.Print("共 " + lineCount + " 行")
  Close(fn)
}
```
