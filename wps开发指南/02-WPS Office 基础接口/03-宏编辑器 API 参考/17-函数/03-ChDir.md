# ChDir

更改指定驱动器上的当前目录。

## 语法

```typescript
function ChDir(Path: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Path | 必选 | string | 目标目录路径。不能为空字符串。 |

## 说明

模拟 VBA 的 ChDir 行为——仅更改指定驱动器的当前目录，不切换当前驱动器。
如果路径所在驱动器与当前驱动器相同（或路径以 `.` 开头），会实际调用操作系统 API 更改工作目录。
如果路径所在驱动器与当前驱动器不同，只记录该驱动器的当前目录，不切换当前驱动器。要切换驱动器，需要使用 [ChDrive](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/ChDrive)。

## 示例

```javascript
/* 切换到子目录 */
function test() {
  ChDir("C:\\Projects\\MyApp")
  Debug.Print("已切换目录")
}
```

```javascript
/* 配合 ChDrive 切换到另一个驱动器的目录 */
function test() {
  ChDir("D:\\Data")
  ChDrive("D")
  Debug.Print(CurDir())
}
```
