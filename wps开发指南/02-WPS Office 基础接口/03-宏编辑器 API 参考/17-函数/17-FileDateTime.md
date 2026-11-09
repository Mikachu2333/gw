# FileDateTime

返回文件的最后修改日期和时间。

## 语法

```typescript
function FileDateTime(PathName: string): Date
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| PathName | 必选 | string | 文件路径。 |

## 返回值

文件的最后修改日期和时间。

## 说明

返回指定文件的最后修改时间，格式为 Date 值。
获取的是最后修改时间（lastModified），不是创建时间或最后访问时间。

## 示例

```javascript
/* 获取并显示文件修改时间 */
function test() {
  const dt = FileDateTime("C:\\Data\\report.xlsx")
  Debug.Print("最后修改：" + dt)
}
```

```javascript
/* 检查文件是否在今天被修改过 */
function test() {
  const fileDate = FileDateTime("C:\\log.txt")
  const today = new Date()
  Debug.Print("文件日期：" + fileDate)
}
```
