# CurDir

返回指定驱动器的当前目录路径。

## 语法

```typescript
function CurDir(Drive?: string): string
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Drive | 可选 | string | 驱动器号字符串，只使用第一个字符。省略时返回当前工作目录。 |

## 返回值

指定驱动器的当前目录路径。

## 说明

不传参数时返回操作系统的当前工作目录。传入驱动器号时：
- 如果与当前驱动器相同或为空字符串，返回当前工作目录。
- 如果与当前驱动器不同，返回该驱动器的当前目录路径。

可通过 [ChDir](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/ChDir) 和 [ChDrive](/app-integration-dev/wps365/client/wpsoffice/jsapi/macro-editor-api/function/ChDrive) 改变当前目录。

## 示例

```javascript
/* 获取当前工作目录 */
function test() {
  Debug.Print("当前目录：" + CurDir())
}
```

```javascript
/* 查看指定驱动器的当前目录 */
function test() {
  Debug.Print("C 盘：" + CurDir("C"))
  Debug.Print("D 盘：" + CurDir("D"))
}
```
