# Loc

返回已打开文件的当前读写位置。

## 语法

```typescript
function Loc(FileNumber: string): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |

## 返回值

当前位置（记录号、字节位置或块号，取决于打开模式）。

## 说明

返回值含义取决于文件的打开模式：
- **Random 模式**：返回最近读写的记录号（当前字节位置 / 记录长度）
- **Binary 模式**：返回当前字节位置
- **顺序模式**（Input/Output/Append）：返回最近读写的 128 字节块号

与 [Seek](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Seek) 的区别：Seek 返回的是**下一个**要读写的位置（= Loc + 1），Loc 返回的是**最近**读写的位置。

## 示例

```javascript
/* 在读取文件时跟踪位置 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  while (!EOF(fn)) {
    const line = LineInput(fn)
    Debug.Print("位置 " + Loc(fn) + "：" + line)
  }
  Close(fn)
}
```
