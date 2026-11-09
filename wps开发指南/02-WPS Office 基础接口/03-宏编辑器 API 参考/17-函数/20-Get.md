# Get

从已打开的文件中以二进制方式读取数据。

## 语法

```typescript
function Get(FileNumber: string, VarName: any, RecNumber?: any): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |
| VarName | 必选 | any | 接收数据的变量，其类型决定读取方式。 |
| RecNumber | 可选 | any | Random 模式下的记录号（基于 1），Binary 模式下的字节位置。省略时从当前位置读取。 |

## 说明

文件号为打开文件时使用的字符串，须以 `#` 开头后跟数字（如 `#1`），有效范围为 1～511，用于标识当前进程中已打开的文件。

只能用于以 Random 或 Binary 模式打开的文件。与 [Put](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Put) 配对使用。

VarName 参数同时决定了读取数据的类型和大小：
- 传入字符串：Random 模式下读取带长度前缀的字符串，Binary 模式下按字符串长度读取
- 传入整数：读取 4 字节
- 传入浮点数：读取 8 字节
- 传入布尔值：读取 4 字节

读取的结果会写回到 VarName 参数中。

## 示例

```javascript
/* 从随机文件读取记录 */
function test() {
  const fn = FreeFile()
  Open("C:\\records.dat", fn, JSOpenMode.Random)
  let data = ""
  Get(fn, data, 1)
  Debug.Print("记录1：" + data)
  Close(fn)
}
```

```javascript
/* 从二进制文件读取数值 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.bin", fn, JSOpenMode.Binary)
  let intVal = 0
  Get(fn, intVal)
  Debug.Print("整数值：" + intVal)
  Close(fn)
}
```
