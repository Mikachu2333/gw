# Annots.CreateStamp

创建图章注释。

## 语法

express.**CreateStamp**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| JsonParam | string | JSON 格式参数 |

**JSON 参数说明**：

| 字段 | 类型 | 必填 | 说明 |
|-----|------|------|------|
| position | Array | 是 | 图章中心点坐标 [x, y]，单位 pt（**PDF 坐标系**，原点在页面左下角） |
| imagePath | string | 是 | 图章图片路径 |
| useActualSize | bool | 否 | 是否使用原始尺寸 |
| width | int | 否 | 图章宽度 |
| height | int | 否 | 图章高度 |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateStamp('{"position":[200,200],"imagePath":"C:\\\\stamp.png"}');
```
