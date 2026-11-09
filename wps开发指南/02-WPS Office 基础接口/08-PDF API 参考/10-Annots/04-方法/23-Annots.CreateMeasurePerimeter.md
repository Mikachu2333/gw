# Annots.CreateMeasurePerimeter

创建周长测量注释（折线各段长度之和）。

## 语法

express.**CreateMeasurePerimeter**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数，字段见下表 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| points | array | 是 | 路径顶点坐标，格式 `[[x1,y1],[x2,y2],...]`，至少 3 个点，按顺序连接各段；单位 pt，**PDF 坐标系**（原点在页面左下角） |
| color | string | 否 | 标注线颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| lineWidth | number | 否 | 线宽（正整数） |
| opacity | number | 否 | 不透明度，整数 `0`–`255`，255 为完全不透明 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateMeasurePerimeter('{"points":[[50,700],[150,700],[100,780]],"color":"#0000FF"}');
```
