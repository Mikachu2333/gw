# FileCopy

将文件复制到新位置。

## 语法

```typescript
function FileCopy(Source: string, Destination: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Source | 必选 | string | 源文件路径。 |
| Destination | 必选 | string | 目标文件路径。 |

## 说明

将源文件复制到指定的目标路径。如果目标文件已存在，复制将失败——不会自动覆盖已有文件。
只能复制文件，不能复制目录。要删除文件可使用 [Kill](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Kill)。

## 示例

```javascript
/* 复制文件到另一个目录 */
function test() {
  FileCopy("C:\\Data\\report.xlsx", "D:\\Backup\\report.xlsx")
  Debug.Print("文件已复制")
}
```

```javascript
/* 复制并重命名文件 */
function test() {
  const src = "C:\\template.docx"
  const dst = "C:\\Documents\\new_report.docx"
  FileCopy(src, dst)
}
```
