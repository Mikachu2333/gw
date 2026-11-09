# Watermark.HasWatermark

检查文档或指定页面是否包含水印。

## 语法

express.**HasWatermark**

express   一个代表 **Watermark** 对象的变量。

## 参数说明

| 参数 | 类型 | 必需 | 说明 |
|-----|------|------|------|
| PageIndex | number | 否 | 页码索引（从 0 开始），省略则检查整个文档 |

## 返回值

`boolean` — `true` 表示存在水印，`false` 表示不存在水印

## 示例

```JavaScript
var watermark = app.ActiveDocument.Watermark;
if (watermark.HasWatermark()) {
    console.log("文档包含水印");
}
if (watermark.HasWatermark(0)) {
    console.log("第一页包含水印");
}
```
