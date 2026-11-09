# Dir

返回匹配指定模式和属性的文件或目录名。

## 语法

```typescript
function Dir(PathName?: string, Attributes?: number): string
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 可选 | string | 文件路径模式，支持 `*` 和 `?` 通配符。省略时获取前次搜索的下一个匹配项。 |
| Attributes | 可选 | number | 文件属性过滤器（如 `vbDirectory`=16）。省略时匹配所有文件。 |

## 返回值

匹配的文件名（不含路径），无更多匹配时返回空字符串。

## 说明

首次调用时传入路径模式（可包含通配符 `*` 和 `?`）开始搜索，返回第一个匹配的文件名。
之后不传参数反复调用，每次返回下一个匹配的文件名。遍历结束时返回空字符串。
路径为空字符串时搜索当前目录所有文件。路径以 `/` 或 `\` 结尾且为目录时，自动搜索该目录下所有文件。
返回值只包含文件名，不含路径部分。

## 示例

```javascript
/* 遍历目录中的所有 txt 文件 */
function test() {
  let file = Dir("C:\\Documents\\*.txt")
  while (file !== "") {
    Debug.Print(file)
    file = Dir()
  }
}
```

```javascript
/* 检查文件是否存在 */
function test() {
  const result = Dir("C:\\config.ini")
  if (result !== "") {
    Debug.Print("文件存在：" + result)
  } else {
    Debug.Print("文件不存在")
  }
}
```
