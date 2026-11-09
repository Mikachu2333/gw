# FileSystem.toNativeSeparators

将路径中的分隔符转换为操作系统原生格式。

## 语法

```typescript
function toNativeSeparators(path: string): string
```

express   一个代表 **FileSystem** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| path | 必选 | string | 要转换的路径。 |

## 返回值

使用操作系统原生分隔符的路径。

## 说明

在 Windows 上将路径中的 `/` 转换为 `\`；在 Linux/macOS 上不做转换（`/` 即原生分隔符）。

这是纯字符串替换操作，不检查路径是否存在，不解析 `.` 或 `..`。

在编写跨平台脚本时，可以统一使用 `/` 作为路径分隔符，然后在需要原生分隔符的场景
（如传给 Shell 命令或 COM 对象）时使用此方法转换。

## 示例

```javascript
/* 转换路径分隔符 */
var nativePath = FileSystem.toNativeSeparators("C:/Users/data/file.txt")
Console.log(nativePath)
```
