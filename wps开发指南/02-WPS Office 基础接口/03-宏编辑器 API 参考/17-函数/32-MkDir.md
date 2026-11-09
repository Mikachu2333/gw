# MkDir

创建一个新目录。

## 语法

```typescript
function MkDir(Path: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 要创建的目录路径。 |

## 说明

只创建单层目录——如果父目录不存在，操作会失败。要创建多层嵌套目录，需要逐层调用。
如果目录已存在，也会报错。
要删除目录使用 [RmDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/RmDir)。

## 示例

```javascript
/* 创建新目录 */
function test() {
  MkDir("C:\\Data\\Reports")
  Debug.Print("目录已创建")
}
```

```javascript
/* 确保父目录存在后创建子目录 */
function test() {
  MkDir("C:\\Projects")
  MkDir("C:\\Projects\\MyApp")
  MkDir("C:\\Projects\\MyApp\\Output")
}
```
