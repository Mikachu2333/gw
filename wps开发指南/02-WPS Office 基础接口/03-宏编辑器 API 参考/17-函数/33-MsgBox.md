# MsgBox

显示模态消息框并返回用户点击的按钮。

## 语法

```typescript
function MsgBox(Prompt: any, Buttons?: number, Title?: string): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Prompt | 必选 | any | 对话框中显示的提示文本。接受任意类型，布尔值转为 `"true"`/`"false"`，其他类型自动转字符串。 |
| Buttons | 可选 | number | 按钮组合和样式标志，参见 [JSMsgBoxStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/enum/JSMsgBoxStyle)。可用加法组合多个值。省略时默认为 `jsOKOnly`（仅显示"确定"按钮）。 |
| Title | 可选 | string | 对话框标题栏文本。省略时使用当前主窗口标题；无可用主窗口时使用应用程序名称。 |

## 返回值

用户点击的按钮，参见 [JSMsgBoxResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/enum/JSMsgBoxResult)。实际可能的返回值取决于 Buttons 指定的按钮组合。

## 说明

显示一个消息对话框，包含指定的提示文本和按钮组合，等待用户点击按钮后返回对应的 [JSMsgBoxResult](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/enum/JSMsgBoxResult) 值。调用后脚本会阻塞直到用户关闭对话框。
Buttons 参数可以通过加法或按位 OR 组合多个 [JSMsgBoxStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/enum/JSMsgBoxStyle) 值来同时指定按钮组合、图标、默认按钮和模态方式——例如 `jsYesNo + jsQuestion + jsDefaultButton2` 显示带问号图标的"是/否"对话框且默认选中"否"。
Prompt 接受任意类型的值，布尔值会转换为 `"true"` 或 `"false"` 字符串显示，其他类型自动转为字符串。

## 示例

```javascript
/* 基本提示 */
function test() {
  MsgBox("操作完成")
}
```

```javascript
/* 确认操作并处理用户选择 */
function test() {
  const result = MsgBox("是否保存更改？", jsYesNoCancel + jsQuestion, "保存确认")
  if (result === jsResultYes) {
    Debug.Print("用户选择保存")
  } else if (result === jsResultNo) {
    Debug.Print("用户选择不保存")
  } else {
    Debug.Print("用户取消操作")
  }
}
```

```javascript
/* 带警告图标和默认按钮 */
function test() {
  const result = MsgBox("确定要删除吗？", jsYesNo + jsCritical + jsDefaultButton2, "警告")
  if (result === jsResultYes) {
    Debug.Print("用户确认删除")
  }
}
```
