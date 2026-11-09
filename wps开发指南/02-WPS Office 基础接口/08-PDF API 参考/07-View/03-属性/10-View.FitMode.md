# View.FitMode

获取或设置适应模式。 **Long** 类型，可读写。

## 语法

express.**FitMode**

express   一个代表 **View** 对象的变量。

## 类型

long

## 说明

**枚举值说明**（对应 `PdfPageFit`）：

| 值 | 枚举名 | 说明 |
|----|--------|------|
| 0 | pdfPageFitNone | 无适合模式（保持当前缩放） |
| 1 | pdfPageFit100 | 100% 实际大小 |
| 2 | pdfPageFitWidth | 适合宽度 |
| 3 | pdfPageFitPageSize | 适合整页 |
| 4 | pdfPageFitVisible | 适合可见区域 |
| 5 | pdfPageFitFontSize | 适合字号 |

## 示例

```JavaScript
var view = app.ActiveWindow.ActiveView;
view.FitMode = 2; // 适合宽度
```
