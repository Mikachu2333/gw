# Annots.CreateMeasureDistance

创建距离测量注释（两点之间的直线距离）。

## 语法

express.**CreateMeasureDistance**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数，字段见下表 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| points | array | 是 | 测量端点坐标，格式 `[[x1,y1],[x2,y2]]`，必须恰好 2 个点；单位 pt，**PDF 坐标系**（原点在页面左下角，y 向上增大） |
| color | string | 否 | 标注线颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`）|
| lineWidth | number | 否 | 线宽（正整数） |
| opacity | number | 否 | 不透明度，整数 `0`–`255`，255 为完全不透明 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateMeasureDistance('{"points":[[50,600],[300,600]],"color":"#FF0000","lineWidth":2}');
```
