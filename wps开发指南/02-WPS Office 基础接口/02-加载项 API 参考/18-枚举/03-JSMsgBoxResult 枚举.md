# JSMsgBoxResult 枚举

[MsgBox](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/MsgBox) 的返回值，表示用户点击了哪个按钮。

## 说明

用 `===` 比较 MsgBox 返回值与这些常量来判断用户点击了哪个按钮。实际可能的返回值取决于通过 [JSMsgBoxStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/enum/JSMsgBoxStyle) 指定的按钮组合——例如传入 `jsYesNo` 时只可能返回 jsResultYes 或 jsResultNo。

## 示例

```javascript
/* 判断用户选择 */
const result = MsgBox("是否继续？", jsYesNo)
if (result === jsResultYes) {
  Debug.Print("用户选择了是")
}
```

```javascript
/* 处理三按钮对话框 */
const result = MsgBox("重试操作？", jsAbortRetryIgnore)
if (result === jsResultRetry) {
  Debug.Print("用户选择了重试")
} else if (result === jsResultAbort) {
  Debug.Print("用户选择了终止")
} else {
  Debug.Print("用户选择了忽略")
}
```

## 成员

| 名称 | 值 | 说明 |
| :--- | :--- | :--- |
| jsResultOk | 1 | 用户点击了"确定"。 |
| jsResultCancel | 2 | 用户点击了"取消"。 |
| jsResultAbort | 3 | 用户点击了"中止"。 |
| jsResultRetry | 4 | 用户点击了"重试"。 |
| jsResultIgnore | 5 | 用户点击了"忽略"。 |
| jsResultYes | 6 | 用户点击了"是"。 |
| jsResultNo | 7 | 用户点击了"否"。 |
