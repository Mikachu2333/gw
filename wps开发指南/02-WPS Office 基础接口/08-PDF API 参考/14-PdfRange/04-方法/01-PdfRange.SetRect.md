# PdfRange.SetRect

批量设置范围的矩形区域（**PDF 坐标系**，原点在页面左下角，Y 轴向上）。

## 语法

express.**SetRect**

express   一个代表 **PdfRange** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Left | float | 矩形左边 x 坐标（pt） |
| Top | float | 矩形下边 y 坐标（pt，PDF 坐标系，值越大越靠页面顶部） |
| Width | float | 矩形宽度（pt） |
| Height | float | 矩形高度（pt） |

## 返回值

无

## 示例

```JavaScript
var range = ranges.Item(1);
// 在 PDF 坐标系下，以左下角(100, 200)为起点，设置宽300高50的矩形
range.SetRect(100, 200, 300, 50);
```
