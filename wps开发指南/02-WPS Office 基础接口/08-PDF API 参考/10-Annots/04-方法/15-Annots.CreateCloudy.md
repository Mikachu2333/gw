# Annots.CreateCloudy

创建云朵注释（波浪边框折线，需传入多边形顶点）。

## 语法

express.**CreateCloudy**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| points | array | 是 | 顶点坐标数组，格式 `[[x1,y1],[x2,y2],...]`，至少 2 个点，单位 pt |
| color | string | 否 | 边框颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| fillColor | string | 否 | 填充颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| lineWidth | number | 否 | 边框宽度（正整数） |
| opacity | number | 否 | 不透明度，整数 `0`–`255` |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateCloudy('{"points":[[50,400],[250,400],[250,550],[50,550]],"color":"#FF8800"}');
```
