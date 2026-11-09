# Annots.CreateFreeTextCallOut

创建指示批注（带指示线的文本注释）。

## 语法

express.**CreateFreeTextCallOut**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**JSON 参数说明**：

| 字段 | 类型 | 必填 | 说明 |
|-----|------|------|------|
| x | number | 是 | 文本框 X 坐标（pt，PDF 坐标系，原点在页面左下角） |
| y | number | 是 | 文本框 Y 坐标（pt，PDF 坐标系，原点在页面左下角，值越大越靠近页面顶部） |
| text | string | 是 | 文本内容 |
| color | string | 否 | 文字颜色，字符串格式：`#RRGGBB` 或 `#AARRGGBB`（十六进制）或 CSS 颜色名（如 `"red"`） |
| fontSize | number | 否 | 字体大小（磅） |
| fontName | string | 否 | 字体名称 |
| alignment | number | 否 | 对齐方式：`0`=左，`1`=中，`2`=右 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateFreeTextCallOut('{"x":100,"y":100,"text":"请注意"}');
```
