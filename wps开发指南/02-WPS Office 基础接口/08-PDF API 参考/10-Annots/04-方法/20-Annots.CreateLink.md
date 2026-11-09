# Annots.CreateLink

创建超链接注释。

## 语法

express.**CreateLink**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**JSON 参数说明**：

| 字段 | 类型 | 必填 | 说明 |
|-----|------|------|------|
| rect | Array | 是 | 链接区域 [left, bottom, width, height]，单位 pt，**PDF 坐标系**（原点在页面左下角，bottom 为页面底部起的 y 坐标，y 向上增大） |
| action | string | 是 | 链接类型：url / page / view |
| url | string | 条件 | action=url 时必填 |
| pageIndex | int | 条件 | action=page 或 view 时必填 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateLink('{"rect":[50,400,200,30],"action":"url","url":"https://www.wps.cn"}');
```
