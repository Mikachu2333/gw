# FileSystem.Exists

检查指定路径的文件或目录是否存在。

## 语法

```typescript
function Exists(path: string): boolean
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要检查的文件或目录路径。 |

## 返回值

路径存在返回 `true`，否则返回 `false`。

## 说明

判断路径是否指向一个存在的文件系统条目，对文件和目录都有效。
不支持通配符匹配，只检查精确路径。路径的大小写敏感性取决于操作系统的文件系统——Windows 不区分大小写，Linux 区分大小写。

与 VBA 的 [Dir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Dir) 函数不同，`Exists` 无全局搜索状态，不支持通配符，直接返回布尔值。
功能上与 [FileSystem.existsSync](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/existsSync) 相同，两者结果一致。

路径格式无效或为空字符串时返回 `false`，不会抛出异常。

## 示例

```javascript
/* 检查文件是否存在 */
if (FileSystem.Exists("C:\\data\\config.ini")) {
  Console.log("配置文件存在")
}
```

```javascript
/* 检查目录是否存在后创建 */
if (!FileSystem.Exists("C:\\output")) {
  FileSystem.Mkdir("C:\\output")
}
```
