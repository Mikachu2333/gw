# InputBox

显示输入对话框并返回用户输入的文本。

## 语法

```typescript
function InputBox(Prompt: any, Title?: string, Default?: string, XPos?: number, YPos?: number): string
```

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Prompt | 必选 | any | 对话框中显示的提示文本。接受任意类型，布尔值转为 `"true"`/`"false"`，其他类型自动转字符串。 |
| Title | 可选 | string | 对话框标题栏文本。省略或传入空字符串时，使用当前主窗口标题（`caption()`，即应用程序/主窗口名称）。 |
| Default | 可选 | string | 输入框中的初始文本。省略时输入框为空。 |
| XPos | 可选 | number | 对话框左边缘与屏幕左边缘的水平距离（以缇 twips 为单位）。1440 缇 = 1 英寸，运行时按 `值 × logicalDpi / 1440` 转为像素定位。省略时对话框在父窗口区域内水平居中。 |
| YPos | 可选 | number | 对话框上边缘与屏幕顶部的垂直距离（以缇 twips 为单位）。转换方式同 XPos。省略时对话框在父窗口区域内垂直居中。 |

## 返回值

用户输入的文本字符串。

## 说明

显示一个包含提示文本和文本输入框的模态对话框，等待用户输入后返回输入内容。调用后脚本会阻塞直到用户关闭对话框。
可通过 Default 参数预填充输入框的初始文本，通过 XPos/YPos 以缇为单位指定对话框在屏幕上的位置。
未提供 Title 时，标题栏显示与主窗口相同的标题。
仅当传入的 XPos/YPos 换算为像素后大于 0 时，才使用指定坐标；否则使用居中位置。
Prompt 接受任意类型的值，布尔值会转换为 `"true"` 或 `"false"` 字符串显示，其他类型自动转为字符串。

## 示例

```javascript
/* 获取用户输入 */
function test() {
  const name = InputBox("请输入您的姓名：", "用户信息")
  Debug.Print("姓名：" + name)
}
```

```javascript
/* 带默认值的输入 */
function test() {
  const path = InputBox("请输入文件路径：", "打开文件", "C:\\Documents\\")
  if (path !== "") {
    Debug.Print("用户输入的路径：" + path)
  }
}
```

```javascript
/* 指定对话框位置（XPos/YPos 单位为缇） */
function test() {
  const value = InputBox("请输入数值：", "输入", "0", 100, 200)
  Debug.Print("输入值：" + value)
}
```
