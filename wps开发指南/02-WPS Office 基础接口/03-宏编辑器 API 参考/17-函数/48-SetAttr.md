# SetAttr

设置文件或目录的属性。

## 语法

```typescript
function SetAttr(PathName: string, Attributes: number): void
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 文件或目录路径。 |
| Attributes | 必选 | number | 要设置的属性值（位标志组合）。 |

## 说明

在 Linux/macOS 上，SetAttr 实现仅模拟只读(1)与隐藏(2)，以及 vbNormal(0) 清除；其他位标志传入后无对应处理逻辑。

接受与 [GetAttr](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/GetAttr) 相同的属性常量：
- `vbNormal` (0) — 清除所有特殊属性
- `vbReadOnly` (1) — 只读
- `vbHidden` (2) — 隐藏
- `vbSystem` (4) — 系统文件（仅 Windows）
- `vbVolume` (8) — 卷标（仅 Windows；与其他属性组合时通常被忽略）
- `vbDirectory` (16) — 目录（仅 Windows；一般用于标识，SetAttr 对目录路径在 Windows 上可设置其他属性位）
- `vbAlias` (64) — 别名/符号链接（仅 Windows）

在 Linux/macOS 上，只读通过文件权限模拟，隐藏通过在文件名前添加 `.` 前缀模拟。

在 Windows 上，SetFileAttributesW 对文件与目录均适用。

## 示例

```javascript
/* 将文件设为只读 */
function test() {
  SetAttr("C:\\Data\\config.ini", 1)
  Debug.Print("文件已设为只读")
}
```

```javascript
/* 清除所有特殊属性 */
function test() {
  SetAttr("C:\\Data\\config.ini", 0)
  Debug.Print("属性已恢复为普通")
}
```
