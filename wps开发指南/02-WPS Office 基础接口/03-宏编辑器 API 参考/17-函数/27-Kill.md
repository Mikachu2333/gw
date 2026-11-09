# Kill

删除磁盘上的文件。

## 语法

```typescript
function Kill(PathName: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 要删除的文件路径，支持通配符。 |

## 说明

支持使用通配符 `*` 和 `?` 一次删除多个匹配的文件，例如 `Kill("C:\\Temp\\*.log")` 删除所有 `.log` 文件。
只能删除文件，不能删除目录——删除目录应使用 [RmDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/RmDir)。
如果没有匹配的文件，会报错。

## 示例

```javascript
/* 删除单个文件 */
function test() {
  Kill("C:\\Temp\\old_report.xlsx")
  Debug.Print("文件已删除")
}
```

```javascript
/* 使用通配符批量删除 */
function test() {
  Kill("C:\\Temp\\*.tmp")
  Debug.Print("所有临时文件已删除")
}
```
