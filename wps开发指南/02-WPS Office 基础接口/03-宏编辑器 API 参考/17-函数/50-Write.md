# Write

将格式化的数据写入已打开的文件。

## 语法

```typescript
function Write(FileNumber: string, ...OutputArray: any[]): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |
| ...OutputArray | 可选 | any[] | 要写入的数据值。 |

## 说明

将一个或多个值以格式化方式写入文件，只能用于以 Output 或 Append 模式打开的文件。

格式化规则：
- 字符串值用双引号包围（如 `"text"`）
- 布尔值用 `#` 包围（如 `#TRUE#` 或 `#FALSE#`）
- 数值直接输出
- 多个值之间用逗号分隔
- 每次调用后自动追加换行符

使用 [Input](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Input) 可以读取 Write 写入的格式化数据。不传数据参数时写入一个空行。

## 示例

```javascript
/* 写入格式化数据 */
function test() {
  const fn = FreeFile()
  Open("C:\\output.csv", fn, JSOpenMode.Output)
  Write(fn, "张三", 25, true)
  Write(fn, "李四", 30, false)
  Close(fn)
}
```

```javascript
/* 写入空行 */
function test() {
  const fn = FreeFile()
  Open("C:\\log.txt", fn, JSOpenMode.Append)
  Write(fn, "=== 分隔线 ===")
  Write(fn)
  Close(fn)
}
```
