# Annots.CreateFreeText

创建文本框注释（带边框）。

## 语法

express.**CreateFreeText**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**JSON 参数说明**：

| 字段 | 类型 | 必填 | 说明 |
|-----|------|------|------|
| x | number | 是 | 文本框定位点 X 坐标，单位 pt（PDF 坐标系，原点在页面左下角） |
| y | number | 是 | 文本框定位点 Y 坐标，单位 pt（PDF 坐标系，原点在页面左下角，值越大越靠近页面顶部） |
| text | string | 是 | 文本内容 |
| color | string | 否 | 文字颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| fontSize | number | 否 | 字体大小 |
| fontName | string | 否 | 字体名称 |
| alignment | number | 否 | 对齐：0=左，1=中，2=右 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateFreeText('{"x":100,"y":200,"text":"示例文本"}');
```
