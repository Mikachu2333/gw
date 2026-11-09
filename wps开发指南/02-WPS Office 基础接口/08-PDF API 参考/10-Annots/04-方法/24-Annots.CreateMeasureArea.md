# Annots.CreateMeasureArea

创建面积测量注释（闭合多边形区域）。

## 语法

express.**CreateMeasureArea**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数，字段见下表 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| points | array | 是 | 多边形顶点坐标，格式 `[[x1,y1],[x2,y2],...]`，至少 3 个点，首尾自动闭合；单位 pt，**PDF 坐标系**（原点在页面左下角） |
| color | string | 否 | 边框颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| fillColor | string | 否 | 填充颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| lineWidth | number | 否 | 边框线宽（正整数） |
| opacity | number | 否 | 不透明度，整数 `0`–`255`，255 为完全不透明 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateMeasureArea('{"points":[[300,700],[450,700],[450,800],[300,800]],"color":"#00AA00","fillColor":"#00AA0033"}');
```
