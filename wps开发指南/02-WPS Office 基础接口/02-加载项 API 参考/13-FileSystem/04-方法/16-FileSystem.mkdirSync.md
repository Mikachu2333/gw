# FileSystem.mkdirSync

创建单层目录。

## 语法

```typescript
function mkdirSync(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要创建的目录路径。 |

## 返回值

创建成功返回 `true`，失败返回 `false`。

## 说明

对应 Node.js 的 `fs.mkdirSync`，创建指定路径的目录。不支持递归创建——如果父目录不存在，创建会失败。

功能上与 [FileSystem.Mkdir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Mkdir) 基本一致，两者都在目录已存在时返回 `false`。

## 示例

```javascript
/* 创建目录 */
var ok = FileSystem.mkdirSync("C:\\workspace\\output")
if (ok) {
  Console.log("目录创建成功")
}
```
