# JSMsgBoxStyle 枚举

[MsgBox](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/MsgBox) 的按钮组合与样式标志。

## 说明

通过加法或按位 OR 组合不同分类的值来定义消息框的外观和行为：按钮组合决定显示哪些按钮，图标类型决定左侧图标，默认按钮决定按回车时触发哪个按钮，模态方式决定对话框的阻塞范围。
例如 `jsYesNo + jsQuestion + jsDefaultButton2` 表示显示"是/否"按钮、问号图标、默认选中"否"。

## 示例

```javascript
/* 组合按钮和图标 */
const flags = jsOKCancel + jsExclamation
MsgBox("确定继续？", flags)
```

```javascript
/* 指定默认按钮 */
MsgBox("删除文件？", jsYesNo + jsCritical + jsDefaultButton2, "警告")
```

## 成员

| 名称 | 值 | 说明 |
| :--- | :--- | :--- |
| jsOKOnly | 0 | 仅显示"确定"按钮。 |
| jsOKCancel | 1 | 显示"确定"和"取消"按钮。 |
| jsAbortRetryIgnore | 2 | 显示"中止"、"重试"和"忽略"按钮。 |
| jsYesNoCancel | 3 | 显示"是"、"否"和"取消"按钮。 |
| jsYesNo | 4 | 显示"是"和"否"按钮。 |
| jsRetryCancel | 5 | 显示"重试"和"取消"按钮。 |
| jsCritical | 16 | 显示错误图标。 |
| jsQuestion | 32 | 显示问号图标。 |
| jsExclamation | 48 | 显示警告图标。 |
| jsInformation | 64 | 显示信息图标。 |
| jsDefaultButton1 | 0 | 第一个按钮为默认按钮。 |
| jsDefaultButton2 | 256 | 第二个按钮为默认按钮。 |
| jsDefaultButton3 | 512 | 第三个按钮为默认按钮。 |
| jsDefaultButton4 | 768 | 第四个按钮为默认按钮。 |
| jsApplicationModal | 0 | 应用程序模态，用户必须先响应消息框才能继续操作当前应用。 |
| jsSystemModal | 4096 | 系统模态，所有应用程序都被挂起直到用户响应消息框。 |
| jsMsgBoxHelpButton | 16384 | 添加帮助按钮。 |
| jsMsgBoxSetForeground | 65536 | 消息框成为前台窗口。 |
| jsMsgBoxRight | 524288 | 文本右对齐。 |
| jsMsgBoxRtlReading | 1048576 | 文本从右到左阅读顺序显示（用于阿拉伯语、希伯来语等）。 |
