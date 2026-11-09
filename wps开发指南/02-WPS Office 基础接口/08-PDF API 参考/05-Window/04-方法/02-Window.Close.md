# Window.Close

关闭窗口。

## 语法

express.**Close**

express   一个代表 **Window** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| SaveChanges | number (可选) | 保存选项，枚举值 `PdfSaveOptions`：`pdfDoNotSaveChanges`(0)=不保存更改，`pdfSaveChanges`(-1)=保存更改，`pdfPromptToSaveChanges`(-2)=提示保存 |

## 返回值

无

## 示例

```JavaScript
app.ActiveWindow.Close(0);
```
