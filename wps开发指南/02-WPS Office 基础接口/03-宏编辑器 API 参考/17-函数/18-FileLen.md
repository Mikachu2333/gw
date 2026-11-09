# FileLen

返回文件的大小（字节数）。

## 语法

```typescript
function FileLen(PathName: string): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 文件路径。 |

## 返回值

文件大小（字节数）。

## 说明

返回指定文件在磁盘上的大小。文件不需要被打开即可查询大小。
如果路径指向目录，返回 `0`。文件不存在时会报错。
要获取已通过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 打开的文件的大小，应使用 [LOF](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/LOF)。

## 示例

```javascript
/* 获取文件大小 */
function test() {
  const size = FileLen("C:\\Data\\report.xlsx")
  Debug.Print("文件大小：" + size + " 字节")
  Debug.Print("文件大小：" + (size / 1024).toFixed(1) + " KB")
}
```

```javascript
/* 在复制前检查文件大小 */
function test() {
  const src = "C:\\backup.zip"
  const maxSize = 100 * 1024 * 1024
  if (FileLen(src) > maxSize) {
    Debug.Print("文件超过 100MB，跳过复制")
  } else {
    FileCopy(src, "D:\\backup.zip")
  }
}
```
