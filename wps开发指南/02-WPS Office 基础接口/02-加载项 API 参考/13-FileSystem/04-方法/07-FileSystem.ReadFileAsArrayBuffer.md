# FileSystem.ReadFileAsArrayBuffer

以二进制方式读取文件的全部内容，返回 ArrayBuffer。

## 语法

```typescript
function ReadFileAsArrayBuffer(path: string): ArrayBuffer | undefined
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要读取的文件路径。 |

## 返回值

文件内容的 ArrayBuffer，如果文件打开失败则返回 `undefined`。

## 说明

一次性将整个文件以原始字节形式加载到内存并返回 ArrayBuffer，不做编码转换。
适合读取二进制文件（如图片、压缩包等）或需要精确控制字节内容的场景。

与 [FileSystem.ReadFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/ReadFile) 返回字符串不同，本方法保留文件的原始二进制数据，不存在编码转换问题。
如果文件打开失败，静默返回 `undefined`（不抛出异常），
这与 [FileSystem.ReadFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/ReadFile) 失败时抛出异常的行为不同。

## 示例

```javascript
/* 读取二进制文件 */
var buffer = FileSystem.ReadFileAsArrayBuffer("C:\\data\\image.png")
if (buffer) {
  Console.log("文件大小：" + buffer.byteLength + " 字节")
}
```

```javascript
/* 读取并检查文件头部 */
var buffer = FileSystem.ReadFileAsArrayBuffer("C:\\data\\file.dat")
if (buffer) {
  var view = new Uint8Array(buffer)
  Console.log("首字节：0x" + view[0].toString(16))
}
```
