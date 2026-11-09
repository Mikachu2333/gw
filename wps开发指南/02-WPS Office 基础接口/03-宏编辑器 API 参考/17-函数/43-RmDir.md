# RmDir

删除一个空目录。

## 语法

```typescript
function RmDir(Path: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 要删除的目录路径。 |

## 说明

只能删除空目录——如果目录中包含文件或子目录，操作会失败。
要删除目录中的文件，先使用 [Kill](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Kill)；创建目录使用 [MkDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/MkDir)。

## 示例

```javascript
/* 删除空目录 */
function test() {
  RmDir("C:\\Temp\\OldFolder")
  Debug.Print("目录已删除")
}
```

```javascript
/* 先清空再删除目录 */
function test() {
  Kill("C:\\Temp\\OldFolder\\*.*")
  RmDir("C:\\Temp\\OldFolder")
}
```
