# FileSystem.existsSync

检查指定路径是否存在。

## 语法

```typescript
function existsSync(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要检查的路径。 |

## 返回值

路径存在返回 `true`，不存在返回 `false`。

## 说明

对应 Node.js 的 `fs.existsSync`，对文件和目录都有效。
功能上与 [FileSystem.Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists) 相同，两者在正常情况下结果一致。

## 示例

```javascript
/* 检查文件是否存在 */
if (FileSystem.existsSync("C:\\config\\app.json")) {
  Console.log("配置文件存在")
}
```
