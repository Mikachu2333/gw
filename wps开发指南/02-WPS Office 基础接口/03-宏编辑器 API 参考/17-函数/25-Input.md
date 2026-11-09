# Input

从已打开的文件中读取指定数量的字符。

## 语法

```typescript
function Input(Number: number, FileNumber: string): string
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Number | 必选 | number | 要读取的字符数。 |
| FileNumber | 必选 | string | 文件号，须为以 `#` 开头的数字字符串（范围 1～511），标识当前进程中已打开的文件。 |

## 返回值

读取到的字符串。

## 说明

从文件当前位置读取指定数量的字符并返回字符串。`FileNumber` 须为 `Open` 时使用的文件号，格式为 `#` 加 1～511 之间的整数（如 `#1`）；也可传入 `FreeFile()` 返回的字符串。只能用于以 Input 或 Binary 模式打开的文件。
读取时会正确处理多字节字符编码（如 GBK、UTF-8），不会在多字节字符中间截断。
如果已到达文件末尾，返回空内容。读取后文件位置自动前进。

## 示例

```javascript
/* 读取文件的前 100 个字符 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  const content = Input(100, fn)
  Debug.Print(content)
  Close(fn)
}
```

```javascript
/* 分块读取整个文件 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  let all = ""
  while (!EOF(fn)) {
    all += Input(256, fn)
  }
  Debug.Print("总长度：" + all.length)
  Close(fn)
}
```
