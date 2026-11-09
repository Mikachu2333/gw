# Outline.Color

获取大纲节点的标题颜色。**string** 类型，只读。

## 语法

express.**Color**

express   一个代表 **Outline** 对象的变量。

## 类型

string

## 说明

返回 CSS 十六进制颜色字符串，格式为 `#RRGGBB`，每通道两位十六进制数，不足时补 `0`。例如红色返回 `"#ff0000"`，黑色返回 `"#000000"`。

颜色来源于 PDF 大纲字典的 `C` 键（RGB，各分量范围 0–1），经内核转换后以 8 位整数输出。

## 示例

```JavaScript
var outline = app.ActiveDocument.OutlineManager.RootOutline;
var color = outline.Color;
console.log("节点颜色: " + color);  // 例如 "#1a73e8"

// 判断是否为默认黑色
if (color === "#000000") {
    console.log("默认黑色");
}
```
