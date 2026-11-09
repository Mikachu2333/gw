# LineInput

从已打开的文件中读取一行文本。

## 语法

```typescript
function LineInput(FileNumber: string): string
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |

## 返回值

读取到的一行文本（不含换行符）。

## 说明

从文件当前位置读取到下一个换行符为止的内容，返回不包含换行符的字符串。
只能用于以 Input 或 Binary 模式打开的文件。

换行符识别规则因平台而异：Windows 上同时识别 `\r\n` 和 `\n`，Linux/macOS 上只识别 `\n`。
读取到的字节会自动进行编码检测（依次尝试 UTF-8 和 GBK），转换为字符串。

通常与 [EOF](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/EOF) 配合在循环中逐行读取整个文件。

## 示例

```javascript
/* 逐行读取并处理文件 */
function test() {
  const fn = FreeFile()
  Open("C:\\log.txt", fn, JSOpenMode.Input)
  while (!EOF(fn)) {
    const line = LineInput(fn)
    if (line.indexOf("ERROR") >= 0) {
      Debug.Print("发现错误：" + line)
    }
  }
  Close(fn)
}
```

```javascript
/* 读取文件所有行到数组 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.csv", fn, JSOpenMode.Input)
  const lines = []
  while (!EOF(fn)) {
    lines.push(LineInput(fn))
  }
  Close(fn)
  Debug.Print("共 " + lines.length + " 行")
}
```
