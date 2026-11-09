# FileSystem.Mkdir

创建单层目录。

## 语法

```typescript
function Mkdir(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要创建的目录路径。 |

## 返回值

创建成功返回 `true`，目录已存在或创建失败返回 `false`。

## 说明

在指定路径创建一个新目录，不会递归创建父目录——如果路径中的某个中间目录不存在，创建会失败。
与 VBA 的 [MkDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/MkDir) 行为一致。

如果目标目录已经存在，返回 `false` 而非视为成功。
调用者可以先通过 [FileSystem.Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists) 检查目录是否存在，避免将"已存在"与"创建失败"混淆。

功能上与 [FileSystem.mkdirSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/mkdirSync) 基本一致。

## 示例

```javascript
/* 创建目录 */
if (!FileSystem.Exists("C:\\output")) {
  var ok = FileSystem.Mkdir("C:\\output")
  Console.log("创建结果：" + ok)
}
```
