# Annots.CreateSquare

创建矩形注释。

## 语法

express.**CreateSquare**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**jsonParam 字段说明**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| rect | array/object | 是 | 边界矩形，数组格式 `[x, y, width, height]` 或对象格式 `{left, top, width, height}`，单位 pt，width/height 必须 > 0。坐标为矩形**左下角**，使用 PDF 坐标系（左下角为原点，y 向上）。注意：字段名 `top`/`y` 填写的是矩形左下角距页面**底边**的距离（非顶边）。 |
| color | string | 否 | 边框颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| fillColor | string | 否 | 填充颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| lineWidth | number | 否 | 边框宽度（正整数） |
| opacity | number | 否 | 不透明度，整数 `0`–`255` |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateSquare('{"rect":[50,400,200,100],"color":"#00FF00"}');
```
