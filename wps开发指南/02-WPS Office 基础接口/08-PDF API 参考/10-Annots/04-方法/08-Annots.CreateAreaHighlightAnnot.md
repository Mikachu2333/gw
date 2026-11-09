# Annots.CreateAreaHighlightAnnot

创建区域高亮注释。

## 语法

express.**CreateAreaHighlightAnnot**

express   一个代表 **Annots** 对象的变量。

## 参数说明

| 参数 | 类型 | 说明 |
|-----|------|------|
| Left | double | 距页面左边的距离，单位 pt |
| Bottom | double | 距页面**底部**的距离，单位 pt。使用 **PDF 坐标系**（左下角为原点，y 向上） |
| Width | double | 宽度，单位 pt |
| Height | double | 高度，单位 pt |

## 返回值

`Annot` — 创建的注释对象

## 示例

```JavaScript
var page = app.ActiveDocument.Pages.Item(1);
var annot = page.Annots.CreateAreaHighlightAnnot(50, 400, 200, 50);
```
