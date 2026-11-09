# FileSystem.isWritable

检查指定路径的文件或目录是否可写。

## 语法

```typescript
function isWritable(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要检查的文件或目录路径。 |

## 返回值

路径可写返回 `true`，不可写或不存在返回 `false`。

## 说明

检查当前进程对指定路径是否具有写入权限。对文件和目录都有效——文件可写表示可以修改其内容，
目录可写表示可以在其中创建或删除文件。

路径不存在时返回 `false`。如果需要区分"文件不存在"和"文件存在但不可写"，
应先调用 [FileSystem.Exists](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/Exists) 检查。

## 示例

```javascript
/* 检查文件是否可写 */
if (FileSystem.isWritable("C:\\data\\config.ini")) {
  FileSystem.WriteFile("C:\\data\\config.ini", "新配置")
} else {
  Console.log("文件不可写")
}
```

```javascript
/* 根据可写性选择删除方式 */
if (FileSystem.isWritable(path)) {
  FileSystem.unlinkSync(path)
} else {
  FileSystem.Remove(path)
}
```
