# Seek

返回已打开文件中下一个要读写的位置。

## 语法

```typescript
function Seek(FileNumber: string): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |

## 返回值

下一个读写位置。

## 说明

与 [Loc](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Loc) 类似但返回值含义不同：Seek 返回的是**下一个**要读写的位置（基于 1），而 Loc 返回的是**最近**读写的位置。

不同模式下的返回值：
- **Random 模式**：下一个要读写的记录号 = Loc + 1
- **Binary 模式**：下一个要读写的字节位置（基于 1）
- **顺序模式**：下一个要读写的字节位置（基于 1），与 Loc 不同（Loc 返回 128 字节块号）

## 示例

```javascript
/* 显示当前文件读取位置 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.dat", fn, JSOpenMode.Input)
  Debug.Print("起始位置：" + Seek(fn))
  const data = Input(100, fn)
  Debug.Print("读取后位置：" + Seek(fn))
  Close(fn)
}
```
