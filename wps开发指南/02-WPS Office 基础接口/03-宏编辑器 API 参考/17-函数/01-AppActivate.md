# AppActivate

激活指定的应用程序窗口，使其成为前台窗口。

## 语法

```typescript
function AppActivate(Title: any): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Title | 必选 | any | 目标窗口标题（字符串）或进程 ID（数字）。 |

## 说明

通过窗口标题或进程 ID 查找目标窗口并将其激活到前台。传入字符串时按窗口标题查找，传入数字时按进程 ID 查找。
按进程 ID 查找常用于配合 [Shell](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/Shell) 使用——Shell 启动进程后窗口可能尚未创建，此时会自动重试等待最多约 300ms（仅 Windows）。
标题匹配规则因平台而异：Windows 上为精确匹配，Linux 上为子串匹配。
macOS 上此函数未实现，调用无效。
若找不到目标窗口或激活失败，运行时将报错。

## 示例

```javascript
/* 按窗口标题激活 */
function test() {
  AppActivate("记事本")
}
```

```javascript
/* 配合 Shell 使用 */
function test() {
  const pid = Shell("notepad.exe", jsNormalFocus)
  AppActivate(pid)
}
```
