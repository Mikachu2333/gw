# Annots.CreateLine

创建直线注释。

## 语法

express.**CreateLine**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| points | array | 是 | 端点坐标数组，格式 `[[x1,y1],[x2,y2]]`，必须恰好 2 个点，单位 pt |
| color | string | 否 | 线条颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`）|
| lineWidth | number | 否 | 线条宽度（正整数） |
| opacity | number | 否 | 不透明度，整数 `0`–`255`，255 为完全不透明 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateLine('{"points":[[50,500],[300,500]],"color":"#FF0000","lineWidth":2}');
```
