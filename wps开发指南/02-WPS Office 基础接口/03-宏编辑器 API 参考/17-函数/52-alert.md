# alert

显示一个仅含"确定"按钮的消息框。

## 语法

```typescript
function alert(Prompt: any): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Prompt | 必选 | any | 对话框中显示的提示文本。接受任意类型，布尔值转为 `"true"`/`"false"`，其他类型自动转字符串。 |

## 说明

简化版的 [MsgBox](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/MsgBox)，固定显示只有"确定"按钮、无标题的消息框。调用后脚本会阻塞直到用户关闭对话框。
只接受一个参数，如需自定义按钮组合、图标或标题，应使用 [MsgBox](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/MsgBox)。
Prompt 接受任意类型的值，布尔值会转换为 `"true"` 或 `"false"` 字符串显示，其他类型自动转为字符串。

## 示例

```javascript
/* 显示提示信息 */
function test() {
  alert("处理完成，共导入 100 条记录")
}
```

```javascript
/* 显示变量值 */
function test() {
  const count = Cells(1, 1).Value
  alert("当前值：" + count)
}
```
