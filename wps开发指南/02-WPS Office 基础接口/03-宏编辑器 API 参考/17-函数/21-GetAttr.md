# GetAttr

返回文件或目录的属性。

## 语法

```typescript
function GetAttr(PathName: string): number
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 文件或目录路径。 |

## 返回值

文件属性值（位标志组合）。

## 说明

返回值是以下 VBA 文件属性常量的位组合：
- `vbNormal` (0) — 无特殊属性
- `vbReadOnly` (1) — 只读
- `vbHidden` (2) — 隐藏
- `vbSystem` (4) — 系统文件
- `vbVolume` (8) — 卷标（Windows 上由 `GetFileAttributesW` 返回；与其他属性同时指定时通常忽略卷标语义）
- `vbAlias` (64) — 别名（Windows 上可能出现在属性位组合中；Unix 实现不单独设置此位）
- `vbDirectory` (16) — 目录

可以通过按位与运算检测特定属性是否存在。
要修改文件属性，使用 [SetAttr](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/SetAttr)。

## 示例

```javascript
/* 检查文件是否为只读 */
function test() {
  const attr = GetAttr("C:\\Data\\config.ini")
  if (attr & 1) {
    Debug.Print("文件是只读的")
  } else {
    Debug.Print("文件可写")
  }
}
```

```javascript
/* 检查路径是否为目录 */
function test() {
  const attr = GetAttr("C:\\Data")
  if (attr & 16) {
    Debug.Print("这是一个目录")
  }
}
```
