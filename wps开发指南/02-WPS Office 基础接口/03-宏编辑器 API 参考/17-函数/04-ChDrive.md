# ChDrive

切换当前驱动器。

## 语法

```typescript
function ChDrive(Drive: string): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Drive | 必选 | string | 驱动器号字符串，只使用第一个字符（如 `"D"` 或 `"D:"`）。 |

## 说明

只使用参数的第一个字符作为驱动器号。
如果之前通过 [ChDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/ChDir) 设置过该驱动器的目录，切换时会自动恢复到 ChDir 记录的路径；否则切换到该驱动器的根目录。
驱动器盘符是 Windows 特有概念，在 Linux/macOS 上实用性有限。

## 示例

```javascript
/* 切换到 D 盘 */
function test() {
  ChDrive("D")
  Debug.Print(CurDir())
}
```

```javascript
/* 先设置目录再切换驱动器 */
function test() {
  ChDir("D:\\Projects\\MyApp")
  ChDrive("D")
  Debug.Print(CurDir())
}
```
