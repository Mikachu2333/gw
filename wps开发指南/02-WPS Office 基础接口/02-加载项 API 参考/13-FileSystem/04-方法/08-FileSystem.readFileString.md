# FileSystem.readFileString

以 UTF-16LE 原始编码读取文件内容并返回字符串。

## 语法

```typescript
function readFileString(path: string): string | undefined
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要读取的文件路径，文件内容须为 UTF-16LE 编码。 |

## 返回值

文件内容字符串，如果失败则返回 `undefined`。

## 说明

将文件的原始字节直接解释为 UTF-16LE（宽字符）编码的字符串，不做任何编码转换。
因此文件必须已经是 UTF-16LE 编码，否则返回乱码。

此方法与 [FileSystem.writeFileString](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/writeFileString) 配对使用——`writeFileString` 以 UTF-16LE 原始字节写入文件，
`readFileString` 以 UTF-16LE 方式读回。只要写入和读取使用同一对方法，数据可以正确往返。

如果文件打开失败或路径为空，静默返回 `undefined`（不抛出异常）。

## 示例

```javascript
/* 读取 UTF-16LE 文件 */
var content = FileSystem.readFileString("C:\\data\\utf16file.txt")
if (content !== undefined) {
  Console.log(content)
}
```

```javascript
/* 与 writeFileString 配对使用 */
FileSystem.writeFileString("C:\\temp\\data.dat", "测试数据")
var result = FileSystem.readFileString("C:\\temp\\data.dat")
Debug.Print(result)
```
