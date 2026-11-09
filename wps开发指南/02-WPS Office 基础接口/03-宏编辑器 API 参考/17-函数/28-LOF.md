# LOF

返回已打开文件的大小（字节数）。

## 语法

```typescript
function LOF(FileNumber: string): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileNumber | 必选 | string | 文件号字符串。 |

## 返回值

文件大小（字节数）。

## 说明

返回通过 [Open](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Open) 打开的文件的当前大小。文件必须已打开，通过文件号引用。
与 [FileLen](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/FileLen) 的区别：FileLen 通过路径查询磁盘上文件的大小（不需要打开文件），LOF 查询已打开文件的大小（可反映打开后写入导致的大小变化）。

## 示例

```javascript
/* 显示已打开文件的大小 */
function test() {
  const fn = FreeFile()
  Open("C:\\data.txt", fn, JSOpenMode.Input)
  Debug.Print("文件大小：" + LOF(fn) + " 字节")
  Close(fn)
}
```

```javascript
/* 配合 Loc 计算读取进度 */
function test() {
  const fn = FreeFile()
  Open("C:\\big_file.dat", fn, JSOpenMode.Input)
  const totalSize = LOF(fn)
  while (!EOF(fn)) {
    const data = Input(128, fn)
    const progress = (Loc(fn) / totalSize * 100).toFixed(1)
    Debug.Print("进度：" + progress + "%")
  }
  Close(fn)
}
```
