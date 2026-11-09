# Shell

启动一个外部程序并返回其进程 ID。

## 语法

```typescript
function Shell(PathName: string, WindowStyle?: number): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 要执行的程序路径或命令行。 |
| WindowStyle | 可选 | number | 窗口显示样式，参见 [JSAppWinStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/enum/JSAppWinStyle)。省略时默认为 `jsMinimizedFocus`（最小化并获得焦点）。仅 Windows 有效。 |

## 返回值

新进程的进程 ID。macOS 上始终返回 0。

## 说明

以指定的窗口样式启动外部程序。返回进程 ID 可用于 [AppActivate](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/AppActivate) 激活该程序窗口。
WindowStyle 仅在 Windows 上生效，macOS 和 Linux 上忽略该参数。
macOS 通过 osascript 执行命令，返回值始终为 0；Linux 通过后台进程启动，返回实际 PID。

## 示例

```javascript
/* 启动记事本 */
function test() {
  const pid = Shell("notepad.exe", jsNormalFocus)
  Debug.Print("进程ID：" + pid)
}
```

```javascript
/* 启动并激活窗口 */
function test() {
  const pid = Shell("calc.exe", jsNormalFocus)
  AppActivate(pid)
}
```

```javascript
/* 隐藏窗口执行命令 */
function test() {
  Shell("cmd /c dir > C:\\output.txt", jsHide)
}
```
