# FSStats.isSymbolicLink

判断是否为符号链接。

## 语法

```typescript
isSymbolicLink(): boolean
```

express   一个代表 **FSStats** 对象的变量。

## 返回值

始终返回 `false`（受 stat 跟随链接行为限制）。

## 说明

注意：由于 [FileSystem.stat](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/FileSystem/member/stat) 会跟随符号链接（返回链接目标的信息而非链接本身），此方法在实际使用中**始终返回 `false`**。这与 Node.js 的 `fs.statSync` 行为一致——Node.js 中也需要使用 `fs.lstatSync` 才能检测符号链接，而 WPS 当前未提供对应的 `lstat` 方法。

如果路径是指向已有目标的符号链接，stat 返回目标的信息，`isFile()` 或 `isDirectory()` 会反映目标的类型。如果符号链接指向不存在的目标（悬空链接），stat 调用会失败，返回 `undefined`。

## 示例

```javascript
/* 此方法无法检测符号链接 */
var stats = FileSystem.stat("/home/user/link_to_dir")
if (stats) {
  Console.log(stats.isSymbolicLink())
  Console.log(stats.isDirectory())
}
```
